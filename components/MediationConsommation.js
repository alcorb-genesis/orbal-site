import { mediateur, mediation } from "../contenu/mediation";

// Aucun accès aux données du formulaire, au compte ou au numéro/code du dossier.
export default function MediationConsommation({ lang, titre = false, bref = false }) {
  const t = mediation[lang];
  const reclamation = lang === "fr" ? "/reclamation" : "/en/reclamation";
  return (
    <>
      {titre && <h2>{t.titre}</h2>}
      {!bref && <p>{t.debut}<a href={reclamation}>{t.reclamation}</a>{t.fin}</p>}
      {!bref && <p>{t.recours}</p>}
      <p><strong>{mediateur.nom}</strong> — {mediateur.nomComplet}<br />
        {mediateur.adresse}<br />
        <a href={mediateur.telephoneLien}>{mediateur.telephone}</a>{" · "}
        <a href={"mailto:" + mediateur.courriel}>{mediateur.courriel}</a><br />
        <a href={mediateur.site} target="_blank" rel="noopener noreferrer">{t.site} — www.cm2c.net</a>
        {" · "}<a href={mediateur.saisine} target="_blank" rel="noopener noreferrer">{t.saisir}</a>
      </p>
      {bref ? <p><a href={reclamation + "#mediation"}>{t.pied}</a></p> : <>
        <p>{t.delai}</p><p>{t.preuve}</p><p>{t.separation}</p>
      </>}
    </>
  );
}
