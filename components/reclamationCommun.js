// Éléments communs aux deux pages de réclamation : feuille de style, encart de transparence, messages, fichiers.
// Tout texte venu du service ou de la personne est rendu comme TEXTE par React (jamais comme HTML).

export const STYLES = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #04020a; color: #ede8e3;
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.65;
  }
  .wrap { max-width: 40rem; margin: 0 auto; padding: 4.5rem 1.25rem 3rem; }
  .sur { color: #a259e6; font-size: .75rem; letter-spacing: .2em; text-transform: uppercase; margin-bottom: .6rem; }
  h1 { font-family: 'Cormorant Garamond', Georgia, 'Times New Roman', serif; font-size: clamp(2rem, 6vw, 2.8rem); font-weight: 300; line-height: 1.15; margin-bottom: 1rem; }
  h2 { font-size: 1.05rem; font-weight: 500; margin: 0 0 .7rem; }
  .intro { color: #b0a89e; margin-bottom: 1.6rem; }
  .encart { border: 1px solid rgba(123,47,190,0.32); border-radius: 14px; background: rgba(14,13,20,0.6); padding: 1.1rem 1.3rem; margin-bottom: 1.4rem; }
  .encart p, .encart li { color: #b0a89e; font-size: .94rem; }
  .encart p + p { margin-top: .5rem; }
  .encart ul { padding-left: 1.2rem; }
  .jamais { border-color: rgba(224,184,76,0.35); }
  form, .bloc { display: flex; flex-direction: column; gap: 1.15rem; }
  label { display: block; font-weight: 500; margin-bottom: .35rem; }
  .aide { color: rgba(237,232,227,0.55); font-size: .86rem; margin-top: .3rem; }
  .compte { color: rgba(237,232,227,0.4); font-size: .8rem; text-align: right; margin-top: .2rem; }
  input, select, textarea {
    width: 100%; font: inherit; font-size: 16px; color: #ede8e3; background: #0e0d14;
    border: 1px solid rgba(237,232,227,0.22); border-radius: 10px; padding: .75rem .85rem; min-height: 44px;
  }
  textarea { min-height: 8rem; resize: vertical; white-space: pre-wrap; }
  input[readonly], textarea[readonly] { opacity: .7; }
  [aria-invalid="true"] { border-color: #e0806b; }
  .erreur { color: #f0a08f; font-size: .9rem; margin-top: .35rem; }
  .alerte { border-radius: 12px; padding: .9rem 1.1rem; background: rgba(224,128,107,0.1); border: 1px solid rgba(224,128,107,0.45); color: #f3c2b6; }
  .alerte.info { background: rgba(123,47,190,0.12); border-color: rgba(162,89,230,0.45); color: #dccbf0; }
  .alerte:focus { outline: 2px solid #E0B84C; outline-offset: 3px; }
  .actions { display: flex; flex-wrap: wrap; gap: .7rem; }
  button, .bouton {
    font: inherit; font-size: 1rem; min-height: 48px; padding: .8rem 1.5rem; border-radius: 14px; cursor: pointer;
    border: 1px solid #E0B84C; background: rgba(224,184,76,0.14); color: #E0B84C; text-decoration: none; display: inline-block; text-align: center;
  }
  button.discret, .bouton.discret { border-color: rgba(237,232,227,0.3); background: transparent; color: #ede8e3; }
  button:disabled { opacity: .55; cursor: default; }
  button:focus-visible, a:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible, h2:focus-visible { outline: 2px solid #E0B84C; outline-offset: 3px; }
  a { color: #E0B84C; }
  dl { display: grid; grid-template-columns: max-content 1fr; gap: .4rem 1rem; margin: .4rem 0 1rem; }
  dt { color: rgba(237,232,227,0.55); }
  dd { word-break: break-word; }
  .code, .numero { font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace; font-size: 1.12rem; letter-spacing: .06em; color: #E0B84C; }
  .fil { list-style: none; display: flex; flex-direction: column; gap: .8rem; margin: 1rem 0; }
  .fil li { border-left: 2px solid rgba(162,89,230,0.6); padding: .2rem 0 .2rem .9rem; }
  .fil li.alcorb { border-left-color: #E0B84C; }
  .fil .qui { color: rgba(237,232,227,0.55); font-size: .85rem; }
  .texte { white-space: pre-wrap; word-break: break-word; }
  .signature { font-family: 'Cormorant Garamond', Georgia, serif; font-style: italic; color: #E0B84C; margin-top: 2.2rem; }
  .vu { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
  @media (max-width: 30rem) { dl { grid-template-columns: 1fr; } .actions > * { width: 100%; } }
`;

export function Transparence({ t }) {
  return (
    <>
      <section className="encart" aria-labelledby="transparence-titre">
        <h2 id="transparence-titre">{t.transparenceTitre}</h2>
        {t.transparence.map((phrase) => <p key={phrase}>{phrase}</p>)}
      </section>
      <section className="encart jamais" aria-labelledby="jamais-titre">
        <h2 id="jamais-titre">{t.jamaisTitre}</h2>
        <ul>{t.jamais.map((x) => <li key={x}>{x}</li>)}</ul>
      </section>
    </>
  );
}

// Texte d'une alerte ou d'une erreur de champ ; un code inconnu donne le message technique, jamais un silence.
export function messageErreur(t, e) {
  if (!e) return null;
  const code = e.code || e.raison;
  const m = t.erreurs[code] || t.erreurs.technique;
  if (typeof m !== "function") return m;
  if (code === "trop_court") return m(e.min);
  if (code === "trop_long") return m(e.max);
  if (code === "rejeu_expire") return m(e.numero);
  return m(e.reessayer);
}

// Fichier texte produit dans la page (aucun aller-retour réseau) ; l'adresse temporaire est révoquée aussitôt après.
export function telecharger(nom, texte) {
  const url = URL.createObjectURL(new Blob(["﻿", texte], { type: "text/plain;charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = nom;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
