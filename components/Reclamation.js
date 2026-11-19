import MediationConsommation from "./MediationConsommation";
import { useEffect, useReducer, useRef, useState } from "react";
import Head from "next/head";
import ChoixLangue from "./ChoixLangue";
import { reclamation } from "../contenu/reclamation";
import { homologues } from "../lib/langue";
import {
  API_PAR_DEFAUT, BORNES, MOTIFS, appeler, corpsDepot, dateLisible, depotInitial, nouvelleCle, reduireDepot, texteCode, texteRecu,
} from "../lib/reclamations";
import { STYLES, Transparence, messageErreur, telecharger } from "./reclamationCommun";

// Dépôt d'une réclamation, sans compte Orbal ni courriel (/reclamation et /en/reclamation). La logique vit dans
// lib/reclamations.js ; ici, l'affichage. Le reçu n'apparaît qu'après la réponse du service ; le code n'est montré
// qu'une fois, dans la mémoire de la page, et part dans un fichier séparé du reçu.

const API = process.env.NEXT_PUBLIC_RECLAMATIONS_API || API_PAR_DEFAUT;

function Champ({ t, etat, nom, dispatch, multiligne, aide }) {
  const fige = etat.phase !== "saisie";
  const erreur = etat.erreurs[nom];
  const valeur = etat.champs[nom];
  const decrit = [aide ? `${nom}-aide` : null, erreur ? `${nom}-erreur` : null].filter(Boolean).join(" ") || undefined;
  const commun = {
    id: nom, name: nom, value: valeur, readOnly: fige, "aria-invalid": erreur ? "true" : undefined, "aria-describedby": decrit,
    autoComplete: "off", maxLength: BORNES[nom][1] * 2,
    onChange: (e) => dispatch({ type: "champ", nom, valeur: e.target.value }),
  };
  return (
    <div>
      <label htmlFor={nom}>{t.champs[nom]}</label>
      {multiligne ? <textarea {...commun} rows={6} /> : <input type="text" {...commun} spellCheck={false} />}
      {multiligne && <p className="compte" aria-hidden="true">{t.caracteres([...valeur].length, BORNES[nom][1])}</p>}
      {aide && <p className="aide" id={`${nom}-aide`}>{aide}</p>}
      {erreur && <p className="erreur" id={`${nom}-erreur`}>{messageErreur(t, erreur)}</p>}
    </div>
  );
}

export default function Reclamation({ lang }) {
  const t = reclamation[lang];
  const [etat, dispatch] = useReducer(reduireDepot, null, () => depotInitial(null));
  const [copie, setCopie] = useState(null);
  const alerteRef = useRef(null);
  const recuRef = useRef(null);

  // La clé d'idempotence est tirée dans le navigateur, jamais au rendu serveur.
  useEffect(() => { dispatch({ type: "nouveau", cle: nouvelleCle() }); }, []);

  useEffect(() => {
    if (etat.phase !== "envoi") return undefined;
    let vivant = true;
    appeler(API, "/dossiers", corpsDepot(etat, lang)).then((resultat) => { if (vivant) dispatch({ type: "reponse", resultat }); });
    return () => { vivant = false; };
  }, [etat.phase]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (etat.phase === "recu" && recuRef.current) recuRef.current.focus();
    else if (etat.alerte && alerteRef.current) alerteRef.current.focus();
  }, [etat.phase, etat.alerte]);

  const suiviAdresse = homologues("/reclamation/suivi")[lang];
  const r = etat.recu;
  const copier = () => {
    if (!navigator.clipboard) { setCopie("echec"); return; }
    navigator.clipboard.writeText(r.code).then(() => setCopie("ok"), () => setCopie("echec"));
  };

  return (
    <>
      <Head>
        <title>{t.titrePage}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="referrer" content="no-referrer" />
      </Head>
      <style jsx global>{STYLES}</style>
      <ChoixLangue lang={lang} garderRequete={false} />
      <main className="wrap">
        <p className="sur">{t.sur}</p>
        <h1>{t.titre}</h1>

        {etat.phase === "recu" ? (
          <section className="bloc" aria-labelledby="recu-titre">
            <h2 id="recu-titre" tabIndex={-1} ref={recuRef}>{t.recuTitreEcran}</h2>
            {r.deja && <p>{t.recuDeja}</p>}
            <dl>
              <dt>{t.recuNumero}</dt><dd className="numero">{r.numero}</dd>
              <dt>{t.codeLibelle}</dt><dd className="code">{r.code}</dd>
              <dt>{t.recuDate}</dt><dd>{dateLisible(r.cree_le, lang)}</dd>
            </dl>
            <p className="alerte info">{t.recuAvertissement}</p>
            <p>{t.codeExplication}</p>
            <div className="actions">
              <button type="button" onClick={() => telecharger(`reclamation-orbal-${r.numero}.txt`, texteRecu(t, lang, r, etat.champs))}>{t.telechargerRecu}</button>
              <button type="button" onClick={() => telecharger(`code-reclamation-orbal-${r.numero}.txt`, texteCode(t, r))}>{t.telechargerCode}</button>
              <button type="button" className="discret" onClick={copier}>{t.copierCode}</button>
            </div>
            <p role="status">{copie === "ok" ? t.codeCopie : copie === "echec" ? t.copieImpossible : ""}</p>
            <section className="encart" aria-labelledby="suite-titre">
              <h2 id="suite-titre">{t.suiteTitre}</h2>
              {t.suite.map((p) => <p key={p}>{p}</p>)}
            </section>
            <div className="actions">
              <a className="bouton" href={suiviAdresse}>{t.suivreLien}</a>
              <button type="button" className="discret" onClick={() => { setCopie(null); dispatch({ type: "nouveau", cle: nouvelleCle() }); }}>{t.autre}</button>
            </div>
          </section>
        ) : (
          <>
            <p className="intro">{t.intro}</p>
            <section className="encart" aria-labelledby="suppression-titre">
              <h2 id="suppression-titre">{t.suppressionTitre}</h2>
              <p>{t.suppression}</p>
            </section>
            <Transparence t={t} />
            <p className="aide" style={{ marginBottom: "1.4rem" }}>{t.conservation}<a href={homologues("/privacy.html")[lang]}>{t.conservationLien}</a></p>
            <noscript><p className="alerte">{t.sansJs}</p></noscript>
            <form noValidate onSubmit={(e) => { e.preventDefault(); dispatch({ type: "envoyer" }); }} aria-busy={etat.phase === "envoi"}>
              <div>
                <label htmlFor="motif">{t.champs.motif}</label>
                <select id="motif" name="motif" value={etat.champs.motif} disabled={etat.phase !== "saisie"}
                  aria-invalid={etat.erreurs.motif ? "true" : undefined} aria-describedby={etat.erreurs.motif ? "motif-erreur" : undefined}
                  onChange={(e) => dispatch({ type: "champ", nom: "motif", valeur: e.target.value })}>
                  <option value="">{t.choisir}</option>
                  {MOTIFS.map((m) => <option key={m} value={m}>{t.motifs[m]}</option>)}
                </select>
                {etat.erreurs.motif && <p className="erreur" id="motif-erreur">{messageErreur(t, etat.erreurs.motif)}</p>}
              </div>
              <Champ t={t} etat={etat} nom="description" dispatch={dispatch} multiligne aide={t.aides.description} />
              <Champ t={t} etat={etat} nom="solution" dispatch={dispatch} multiligne aide={t.aides.solution} />
              <Champ t={t} etat={etat} nom="pseudo" dispatch={dispatch} aide={t.aides.pseudo} />
              <Champ t={t} etat={etat} nom="reference_paiement" dispatch={dispatch} aide={t.aides.reference_paiement} />

              <div aria-live="polite">
                {etat.alerte && (
                  <p className={etat.alerte.code === "modifie_apres_incertain" ? "alerte info" : "alerte"} tabIndex={-1} ref={alerteRef}>
                    {messageErreur(t, etat.alerte)}
                  </p>
                )}
              </div>

              <div className="actions">
                {etat.phase === "incertain" ? (
                  <>
                    <button type="submit">{t.reessayer}</button>
                    <button type="button" className="discret" onClick={() => dispatch({ type: "modifier", cle: nouvelleCle() })}>{t.modifier}</button>
                  </>
                ) : (
                  <button type="submit" disabled={etat.phase === "envoi" || !etat.cle}>{etat.phase === "envoi" ? t.envoi : t.envoyer}</button>
                )}
              </div>
            </form>
            <p className="aide" style={{ marginTop: "1.6rem" }}>{t.dejaDossier} <a href={suiviAdresse}>{t.suivreUn}</a></p>
          </>
        )}
        <section className="bloc" id="mediation" aria-label={lang === "fr" ? "Médiation de la consommation" : "Consumer mediation"}>
          <MediationConsommation lang={lang} titre />
        </section>
        <p className="signature">{t.signature}</p>
      </main>
    </>
  );
}
