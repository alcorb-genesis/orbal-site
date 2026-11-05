import { useEffect, useReducer, useRef } from "react";
import Head from "next/head";
import ChoixLangue from "./ChoixLangue";
import { suivi } from "../contenu/reclamation";
import { homologues } from "../lib/langue";
import { API_PAR_DEFAUT, BORNES, appeler, dateLisible, nouvelleCle, reduireSuivi, suiviInitial, texteCopie } from "../lib/reclamations";
import { STYLES, messageErreur, telecharger } from "./reclamationCommun";

// Suivi d'une réclamation (/reclamation/suivi et /en/reclamation/suivi) : numéro + code dans le corps d'un POST,
// jamais dans l'adresse ; page non indexée, sans référent. Le code ne vit que dans la mémoire de la page.

const API = process.env.NEXT_PUBLIC_RECLAMATIONS_API || API_PAR_DEFAUT;

export default function SuiviReclamation({ lang }) {
  const t = suivi[lang];
  const [etat, dispatch] = useReducer(reduireSuivi, null, suiviInitial);
  const alerteRef = useRef(null);
  const titreRef = useRef(null);
  const e = etat.ecriture;

  useEffect(() => {
    if (etat.phase !== "ouverture") return undefined;
    let vivant = true;
    appeler(API, "/dossier/consulter", { numero: etat.numero, code: etat.code })
      .then((resultat) => { if (vivant) dispatch({ type: "dossier", resultat, cle: nouvelleCle() }); });
    return () => { vivant = false; };
  }, [etat.phase]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!e || e.phase !== "envoi") return undefined;
    let vivant = true;
    const chemin = e.nature === "reouverture" ? "/dossier/rouvrir" : "/dossier/message";
    appeler(API, chemin, { numero: etat.numero, code: etat.code, cle: e.cle, texte: e.texte })
      .then((resultat) => { if (vivant) dispatch({ type: "ecrit", resultat, cle: nouvelleCle() }); });
    return () => { vivant = false; };
  }, [e && e.phase]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (etat.alerte && alerteRef.current) alerteRef.current.focus();
    else if (etat.phase === "dossier" && titreRef.current) titreRef.current.focus();
  }, [etat.phase, etat.alerte]);

  const d = etat.dossier;
  const depot = homologues("/reclamation")[lang];
  const alerte = etat.alerte && (
    <p className={etat.alerte.code === "ecrit" ? "alerte info" : "alerte"} tabIndex={-1} ref={alerteRef}>{messageErreur(t, etat.alerte)}</p>
  );

  return (
    <>
      <Head>
        <title>{t.titrePage}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="referrer" content="no-referrer" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <style jsx global>{STYLES}</style>
      <ChoixLangue lang={lang} garderRequete={false} />
      <main className="wrap">
        <p className="sur">{t.sur}</p>
        <h1>{t.titre}</h1>

        {etat.phase === "acces" || !d ? (
          <>
            <p className="intro">{t.intro}</p>
            <noscript><p className="alerte">{t.sansJs}</p></noscript>
            <form noValidate onSubmit={(ev) => { ev.preventDefault(); dispatch({ type: "ouvrir" }); }} aria-busy={etat.phase === "ouverture"}>
              <div>
                <label htmlFor="numero">{t.champs.numero}</label>
                <input id="numero" name="numero" type="text" value={etat.numero} readOnly={etat.phase !== "acces"} autoComplete="off"
                  spellCheck={false} autoCapitalize="characters" placeholder="R-XXXX-XXXX" maxLength={32}
                  onChange={(ev) => dispatch({ type: "acces", nom: "numero", valeur: ev.target.value })} />
              </div>
              <div>
                <label htmlFor="code">{t.champs.code}</label>
                <input id="code" name="code" type="text" value={etat.code} readOnly={etat.phase !== "acces"} autoComplete="off"
                  spellCheck={false} autoCapitalize="characters" placeholder="XXXX-XXXX-XXXX-XXXX-XXXX" maxLength={48}
                  onChange={(ev) => dispatch({ type: "acces", nom: "code", valeur: ev.target.value })} />
              </div>
              <div aria-live="polite">{alerte}</div>
              <div className="actions">
                <button type="submit" disabled={etat.phase === "ouverture"}>{etat.phase === "ouverture" ? t.ouverture : t.ouvrir}</button>
              </div>
            </form>
            <section className="encart" aria-labelledby="perdu-titre" style={{ marginTop: "1.8rem" }}>
              <h2 id="perdu-titre">{t.codePerduTitre}</h2>
              <p>{t.codePerdu}</p>
              <p><a href={depot}>{t.nouvelle}</a></p>
            </section>
          </>
        ) : (
          <section className="bloc" aria-labelledby="dossier-titre">
            <h2 id="dossier-titre" tabIndex={-1} ref={titreRef}><span className="numero">{t.dossierTitre(d.numero)}</span></h2>
            <dl>
              <dt>{t.copieEtat}</dt><dd>{t.etats[d.etat]}</dd>
              <dt>{t.deposeLe}</dt><dd>{dateLisible(d.cree_le, lang)}</dd>
              <dt>{t.recuMotif}</dt><dd>{t.motifs[d.motif]}</dd>
              {d.pseudo && <><dt>{t.recuPseudo}</dt><dd>{d.pseudo}</dd></>}
              {d.reference_paiement && <><dt>{t.recuReference}</dt><dd>{d.reference_paiement}</dd></>}
            </dl>
            <div aria-live="polite">{alerte}</div>
            <ol className="fil">
              <li>
                <p className="qui">{t.vosTextes} — {dateLisible(d.cree_le, lang)}</p>
                <p className="texte"><strong>{t.champs.description}</strong>{"\n"}{d.description}</p>
                <p className="texte"><strong>{t.champs.solution}</strong>{"\n"}{d.solution}</p>
              </li>
              {d.messages.map((m, i) => (
                <li key={i} className={m.auteur === "alcorb" ? "alcorb" : undefined}>
                  <p className="qui">
                    {m.auteur === "alcorb" ? t.auteurAlcorb : t.auteurVous} — {dateLisible(m.date, lang)}
                    {m.nature === "reouverture" ? ` (${t.natureReouverture})` : m.nature === "cloture" ? ` (${t.natureCloture})` : ""}
                  </p>
                  {m.texte && <p className="texte">{m.texte}</p>}
                </li>
              ))}
            </ol>

            {d.etat === "clos" && <p className="alerte info">{t.closTitre} {d.reouverture_possible ? t.rouvrirAide : t.nonRouvrable}</p>}
            {d.etat === "clos" && !d.reouverture_possible && <p><a href={depot}>{t.nouvelle}</a></p>}

            {e && (d.etat !== "clos" || d.reouverture_possible) && (
              <form noValidate onSubmit={(ev) => { ev.preventDefault(); dispatch({ type: "ecrire" }); }} aria-busy={e.phase === "envoi"}>
                <div>
                  <label htmlFor="texte">{d.etat === "clos" ? t.rouvrir : t.ajouter}</label>
                  <textarea id="texte" name="texte" rows={5} value={e.texte} readOnly={e.phase !== "saisie"} autoComplete="off"
                    maxLength={BORNES.texte[1] * 2} aria-invalid={e.erreur && e.erreur.raison !== "modifie_apres_incertain" ? "true" : undefined}
                    aria-describedby={e.erreur ? "texte-erreur" : undefined}
                    onChange={(ev) => dispatch({ type: "texte", valeur: ev.target.value })} />
                  <p className="compte" aria-hidden="true">{t.caracteres([...e.texte].length, BORNES.texte[1])}</p>
                  {e.erreur && <p className="erreur" id="texte-erreur" role="alert">{messageErreur(t, e.erreur)}</p>}
                </div>
                <div className="actions">
                  {e.phase === "incertain" ? (
                    <>
                      <button type="submit">{t.reessayer}</button>
                      <button type="button" className="discret" onClick={() => dispatch({ type: "modifier", cle: nouvelleCle() })}>{t.modifier}</button>
                    </>
                  ) : (
                    <button type="submit" disabled={e.phase === "envoi"}>{e.phase === "envoi" ? t.envoi : d.etat === "clos" ? t.rouvrir : t.envoyer}</button>
                  )}
                </div>
              </form>
            )}

            <div className="actions">
              <button type="button" className="discret" onClick={() => telecharger(`dossier-orbal-${d.numero}.txt`, texteCopie(t, lang, d))}>{t.telechargerCopie}</button>
              <button type="button" className="discret" onClick={() => dispatch({ type: "quitter" })}>{t.quitter}</button>
            </div>
          </section>
        )}
        <p className="signature">{t.signature}</p>
      </main>
    </>
  );
}
