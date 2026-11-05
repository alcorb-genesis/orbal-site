// Réclamations sans courriel — logique de la page, sans React ni dépendance : appels au service, états du dépôt et du
// suivi, textes des reçus. Les composants (components/Reclamation.js, components/SuiviReclamation.js) ne font que
// l'afficher ; ces fonctions sont exercées telles quelles contre le vrai service par les essais du lot.
//
// Règles tenues ici :
// - numéro, code et textes partent dans le CORPS d'un POST, jamais dans l'adresse ; ni cookie, ni stockage du
//   navigateur, ni historique : tout vit dans la mémoire de la page et disparaît avec elle ;
// - un accusé de réception n'est montré qu'après la réponse du service, qui ne la donne qu'une fois l'écriture faite ;
// - une réponse perdue n'est jamais présentée comme un échec certain ni comme un succès : l'envoi est « incertain »,
//   le texte reste figé et le même envoi peut être rejoué sans créer de doublon (même clé d'idempotence) ;
// - un refus certain (saisie, quota, service indisponible) laisse le texte intact et modifiable.

export const API_PAR_DEFAUT = "https://relay.alcorb.app/reclamations/v1";

export const MOTIFS = ["paiement", "compte", "acces", "fonctionnement", "donnees", "autre"];

// Bornes affichées à la personne ; le service applique les mêmes et reste seul juge.
export const BORNES = {
  description: [20, 4000],
  solution: [5, 2000],
  pseudo: [1, 64],
  reference_paiement: [3, 100],
  texte: [1, 4000],
};

export function nouvelleCle(aleatoire = (n) => globalThis.crypto.getRandomValues(new Uint8Array(n))) {
  const octets = aleatoire(32);
  let s = "";
  for (const o of octets) s += String.fromCharCode(o);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

const longueur = (s) => [...s].length;

function luhn(chiffres) {
  let somme = 0;
  for (let i = 0; i < chiffres.length; i++) {
    let n = chiffres.charCodeAt(chiffres.length - 1 - i) - 48;
    if (i % 2 === 1) { n *= 2; if (n > 9) n -= 9; }
    somme += n;
  }
  return somme % 10 === 0;
}
export function ressembleCarte(s) {
  for (const m of String(s).matchAll(/\d(?:[ -]?\d){12,18}/g)) {
    const c = m[0].replace(/[ -]/g, "");
    if (c.length >= 13 && c.length <= 19 && luhn(c)) return true;
  }
  return false;
}

// Contrôle avant envoi, pour aider à corriger tout de suite. Rend { champ: { raison, min?, max? } }.
export function controler(champs, noms) {
  const erreurs = {};
  for (const nom of noms) {
    const v = String(champs[nom] ?? "").trim();
    const [min, max] = BORNES[nom];
    const facultatif = nom === "pseudo" || nom === "reference_paiement";
    if (!v) { if (!facultatif) erreurs[nom] = { raison: "requis" }; continue; }
    if (longueur(v) < min) erreurs[nom] = { raison: "trop_court", min };
    else if (longueur(v) > max) erreurs[nom] = { raison: "trop_long", max };
    else if (ressembleCarte(v)) erreurs[nom] = { raison: "carte" };
  }
  return erreurs;
}

// Un appel au service. Rend toujours l'un de trois résultats :
//   { etat: "ok", donnees }                 le service a répondu et accepté ;
//   { etat: "refus", statut, erreur, ... }  le service a répondu et refusé : RIEN n'a été enregistré ;
//   { etat: "incertain" }                   pas de réponse exploitable : l'écriture a pu avoir lieu ou non.
export async function appeler(base, chemin, corps, { fetchImpl = globalThis.fetch, delai = 20000 } = {}) {
  const arret = new AbortController();
  const minuterie = setTimeout(() => arret.abort(), delai);
  let reponse;
  try {
    reponse = await fetchImpl(base + chemin, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(corps),
      credentials: "omit",
      cache: "no-store",
      redirect: "error",
      referrerPolicy: "no-referrer",
      signal: arret.signal,
    });
  } catch {
    return { etat: "incertain" };
  } finally {
    clearTimeout(minuterie);
  }
  let json = null;
  try { json = await reponse.json(); } catch { json = null; }
  if (reponse.ok && json && typeof json === "object") return { etat: "ok", donnees: json };
  // Le service ne répond « indisponible » ou « capacite » qu'après l'échec de son écriture : rien n'est enregistré.
  if (json && typeof json.erreur === "string" && reponse.status < 500) return { etat: "refus", statut: reponse.status, ...json };
  if (json && (json.erreur === "indisponible" || json.erreur === "capacite")) return { etat: "refus", statut: reponse.status, ...json };
  return { etat: "incertain" };
}

// ---------- Dépôt ----------

export const CHAMPS_DEPOT = ["description", "solution", "pseudo", "reference_paiement"];

export function depotInitial(cle) {
  return {
    phase: "saisie", // saisie | envoi | incertain | recu
    cle,
    champs: { motif: "", description: "", solution: "", pseudo: "", reference_paiement: "" },
    erreurs: {},
    alerte: null,
    recu: null,
  };
}

export function corpsDepot(etat, langue) {
  const c = etat.champs;
  const corps = { cle: etat.cle, langue, motif: c.motif, description: c.description, solution: c.solution };
  if (c.pseudo.trim()) corps.pseudo = c.pseudo;
  if (c.reference_paiement.trim()) corps.reference_paiement = c.reference_paiement;
  return corps;
}

export function reduireDepot(etat, action) {
  switch (action.type) {
    case "champ": {
      if (etat.phase !== "saisie") return etat; // texte figé pendant l'envoi et tant qu'un envoi est incertain
      const erreurs = { ...etat.erreurs };
      delete erreurs[action.nom];
      return { ...etat, champs: { ...etat.champs, [action.nom]: action.valeur }, erreurs };
    }
    case "envoyer": {
      if (etat.phase === "incertain") return { ...etat, phase: "envoi", alerte: null }; // même clé, même texte
      if (etat.phase !== "saisie") return etat;
      const erreurs = controler(etat.champs, CHAMPS_DEPOT);
      if (!etat.champs.motif) erreurs.motif = { raison: "requis" };
      if (Object.keys(erreurs).length) return { ...etat, erreurs, alerte: { code: "a_corriger" } };
      return { ...etat, phase: "envoi", erreurs: {}, alerte: null };
    }
    case "reponse": {
      if (etat.phase !== "envoi") return etat;
      const r = action.resultat;
      if (r.etat === "ok") return { ...etat, phase: "recu", alerte: null, recu: { numero: r.donnees.numero, code: r.donnees.code, cree_le: r.donnees.cree_le, deja: r.donnees.deja === true } };
      if (r.etat === "incertain") return { ...etat, phase: "incertain", alerte: { code: "incertain" } };
      if (r.erreur === "invalide" && r.champ && r.champ in etat.champs) {
        return { ...etat, phase: "saisie", erreurs: { [r.champ]: { raison: r.raison, min: r.min, max: r.max } }, alerte: { code: "a_corriger" } };
      }
      return { ...etat, phase: "saisie", alerte: { code: r.erreur || "technique", reessayer: r.reessayer, numero: r.numero } };
    }
    case "modifier": // après un envoi incertain : la personne choisit de changer son texte ; nouvel envoi, nouvelle clé
      if (etat.phase !== "incertain") return etat;
      return { ...etat, phase: "saisie", cle: action.cle, alerte: { code: "modifie_apres_incertain" } };
    case "nouveau":
      return depotInitial(action.cle);
    default:
      return etat;
  }
}

// ---------- Suivi ----------

export function suiviInitial() {
  return { phase: "acces", numero: "", code: "", dossier: null, alerte: null, ecriture: null };
}

export function ecritureNeuve(cle, nature) {
  return { phase: "saisie", texte: "", cle, nature, erreur: null };
}

export function reduireSuivi(etat, action) {
  switch (action.type) {
    case "acces":
      if (etat.phase !== "acces") return etat;
      return { ...etat, [action.nom]: action.valeur, alerte: null };
    case "ouvrir":
      if (etat.phase !== "acces") return etat;
      if (!etat.numero.trim() || !etat.code.trim()) return { ...etat, alerte: { code: "acces_incomplet" } };
      return { ...etat, phase: "ouverture", alerte: null };
    case "dossier": { // résultat d'une consultation
      if (etat.phase !== "ouverture") return etat;
      const r = action.resultat;
      if (r.etat === "ok") {
        const d = r.donnees;
        const nature = d.etat === "clos" ? "reouverture" : "message";
        const garder = etat.ecriture && etat.ecriture.phase !== "envoi" && etat.ecriture.nature === nature && etat.ecriture.texte;
        return { ...etat, phase: "dossier", dossier: d, numero: d.numero, alerte: etat.succes ? { code: "ecrit" } : null, succes: false, ecriture: garder ? etat.ecriture : ecritureNeuve(action.cle, nature) };
      }
      // Le code n'est jamais gardé après un refus d'accès : on le redemande.
      if (r.etat === "refus" && r.erreur === "acces_refuse") return { ...etat, phase: "acces", code: "", dossier: null, alerte: { code: "acces_refuse" } };
      if (r.etat === "incertain") return { ...etat, phase: etat.dossier ? "dossier" : "acces", alerte: { code: "lecture_impossible" } };
      return { ...etat, phase: etat.dossier ? "dossier" : "acces", alerte: { code: r.erreur || "technique", reessayer: r.reessayer } };
    }
    case "texte":
      if (etat.phase !== "dossier" || !etat.ecriture || etat.ecriture.phase !== "saisie") return etat;
      return { ...etat, ecriture: { ...etat.ecriture, texte: action.valeur, erreur: null } };
    case "ecrire": {
      if (etat.phase !== "dossier" || !etat.ecriture) return etat;
      const e = etat.ecriture;
      if (e.phase === "incertain") return { ...etat, ecriture: { ...e, phase: "envoi", erreur: null } };
      if (e.phase !== "saisie") return etat;
      const erreurs = controler({ texte: e.texte }, ["texte"]);
      if (erreurs.texte) return { ...etat, ecriture: { ...e, erreur: erreurs.texte } };
      return { ...etat, ecriture: { ...e, phase: "envoi", erreur: null } };
    }
    case "ecrit": { // résultat d'un ajout de message ou d'une réouverture
      if (!etat.ecriture || etat.ecriture.phase !== "envoi") return etat;
      const r = action.resultat;
      if (r.etat === "ok") return { ...etat, phase: "ouverture", alerte: null, ecriture: ecritureNeuve(action.cle, "message"), succes: true };
      if (r.etat === "incertain") return { ...etat, ecriture: { ...etat.ecriture, phase: "incertain", erreur: { raison: "incertain" } } };
      if (r.erreur === "acces_refuse") return { ...etat, phase: "acces", code: "", dossier: null, ecriture: null, alerte: { code: "acces_refuse" } };
      if (r.erreur === "invalide") return { ...etat, ecriture: { ...etat.ecriture, phase: "saisie", erreur: { raison: r.raison, min: r.min, max: r.max } } };
      return { ...etat, ecriture: { ...etat.ecriture, phase: "saisie", erreur: { raison: r.erreur || "technique", reessayer: r.reessayer } } };
    }
    case "modifier":
      if (!etat.ecriture || etat.ecriture.phase !== "incertain") return etat;
      return { ...etat, ecriture: { ...etat.ecriture, phase: "saisie", cle: action.cle, erreur: { raison: "modifie_apres_incertain" } } };
    case "quitter":
      return suiviInitial();
    default:
      return etat;
  }
}

// ---------- Copies écrites ----------

const ligne = (n = 60) => "-".repeat(n);
export const dateLisible = (iso, langue) => new Date(iso).toLocaleString(langue === "fr" ? "fr-FR" : "en-GB", { dateStyle: "long", timeStyle: "short", timeZone: "UTC" }) + " UTC";

// Reçu daté : tout le dossier tel qu'envoyé, SANS le code (il part dans un fichier à part).
export function texteRecu(t, langue, recu, champs) {
  return [
    t.recuTitre, ligne(),
    `${t.recuNumero} : ${recu.numero}`,
    `${t.recuDate} : ${dateLisible(recu.cree_le, langue)}`,
    `${t.recuMotif} : ${t.motifs[champs.motif]}`,
    champs.pseudo.trim() ? `${t.recuPseudo} : ${champs.pseudo.trim()}` : null,
    champs.reference_paiement.trim() ? `${t.recuReference} : ${champs.reference_paiement.trim()}` : null,
    "", t.champs.description, champs.description.trim(),
    "", t.champs.solution, champs.solution.trim(),
    "", ligne(), ...t.recuPied,
  ].filter((l) => l !== null).join("\n") + "\n";
}

export function texteCode(t, recu) {
  return [t.codeFichierTitre, ligne(), `${t.recuNumero} : ${recu.numero}`, `${t.codeLibelle} : ${recu.code}`, "", ...t.codeFichierExplication].join("\n") + "\n";
}

export function texteCopie(t, langue, d) {
  const lignes = [
    t.copieTitre, ligne(),
    `${t.recuNumero} : ${d.numero}`,
    `${t.copieEtat} : ${t.etats[d.etat]}`,
    `${t.recuDate} : ${dateLisible(d.cree_le, langue)}`,
    `${t.recuMotif} : ${t.motifs[d.motif]}`,
    d.pseudo ? `${t.recuPseudo} : ${d.pseudo}` : null,
    d.reference_paiement ? `${t.recuReference} : ${d.reference_paiement}` : null,
    "", t.champs.description, d.description, "", t.champs.solution, d.solution,
  ];
  for (const m of d.messages) {
    lignes.push("", `${ligne(20)} ${m.auteur === "alcorb" ? t.auteurAlcorb : t.auteurVous} — ${dateLisible(m.date, langue)}${m.nature === "reouverture" ? ` (${t.natureReouverture})` : m.nature === "cloture" ? ` (${t.natureCloture})` : ""}`);
    if (m.texte) lignes.push(m.texte);
  }
  lignes.push("", ligne(), `${t.copieFaite} ${dateLisible(new Date().toISOString(), langue)}`, t.copieSansCode);
  return lignes.filter((l) => l !== null).join("\n") + "\n";
}
