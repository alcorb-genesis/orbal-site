import { useState } from "react";
import ChoixLangue from "./ChoixLangue";
import { accueil } from "../contenu/accueil";

// Page d'accueil, commune au français (/) et à l'anglais (/en). Mise en page et styles inchangés :
// seuls les textes viennent du dictionnaire `contenu/accueil.js`.

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --black: #04020a;
    --deep: #0e0d14;
    --purple: #7B2FBE;
    --purple-light: #a259e6;
    --gold: #E0B84C;
    --white: #ede8e3;
    --off: #b0a89e;
    --border: rgba(123,47,190,0.22);
  }
  html { scroll-behavior: smooth; }
  body { background: var(--black); color: var(--white); font-family: 'DM Sans', sans-serif; line-height: 1.75; overflow-x: hidden; }
  .serif { font-family: 'Cormorant Garamond', Georgia, serif; }
  a { color: inherit; }

  .hero { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 3rem 1.5rem; }
  .hero-img { width: min(560px, 92vw); height: auto; margin-bottom: 1.5rem; }
  .hero-title { font-size: clamp(2.4rem, 7vw, 4.4rem); font-weight: 300; line-height: 1.15; letter-spacing: .01em; }
  .hero-title em { font-style: italic; color: var(--purple-light); }
  .signature { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: clamp(1.1rem, 3vw, 1.5rem); color: var(--gold); margin-top: 1.6rem; letter-spacing: .02em; }
  .hero-sub { color: var(--off); font-size: 1rem; max-width: 30rem; margin: 1.8rem auto 0; }

  section { max-width: 62rem; margin: 0 auto; padding: 5.5rem 1.5rem; }
  .label { font-size: .68rem; letter-spacing: .22em; text-transform: uppercase; color: var(--purple-light); margin-bottom: .9rem; }
  .title { font-size: clamp(1.8rem, 4.5vw, 2.8rem); font-weight: 300; line-height: 1.25; margin-bottom: 1.6rem; }
  .title em { font-style: italic; color: var(--purple-light); }
  .lead { color: var(--off); font-size: 1.02rem; max-width: 40rem; }

  .ombres { text-align: center; }
  .ombres-txt { color: var(--off); font-size: clamp(.98rem, 2.4vw, 1.12rem); line-height: 2.1; max-width: 42rem; margin: 0 auto; }
  .ombres-fort { color: var(--white); }
  .ombres-chute { font-style: italic; color: var(--gold); font-size: clamp(1.25rem, 3.4vw, 1.75rem); margin-top: 2rem; line-height: 1.5; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); gap: 1.4rem; margin-top: 2.6rem; }
  .card { border: 1px solid var(--border); border-radius: 10px; padding: 1.6rem; background: rgba(14,13,20,0.6); }
  .card h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.35rem; font-weight: 400; margin-bottom: .6rem; }
  .card p { color: var(--off); font-size: .92rem; }

  .prix { display: grid; grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr)); gap: 1.1rem; margin-top: 2.6rem; }
  .offre { border: 1px solid var(--border); border-radius: 10px; padding: 1.5rem; text-align: center; background: rgba(14,13,20,0.6); }
  .offre.libre { border-color: rgba(162,89,230,0.5); }
  .offre.phare { border-color: var(--gold); background: rgba(224,184,76,0.06); }
  .offre .nom { font-size: .72rem; letter-spacing: .16em; text-transform: uppercase; color: var(--off); }
  .offre .montant { font-family: 'Cormorant Garamond', serif; font-size: 2.1rem; margin: .5rem 0 .3rem; }
  .offre.phare .montant { color: var(--gold); }
  .offre .quoi { color: var(--off); font-size: .86rem; }

  .attente { border: 1px solid rgba(224,184,76,0.3); border-radius: 12px; padding: 2.2rem; background: rgba(224,184,76,0.04); margin-top: 2.4rem; }
  .attente p { color: var(--off); margin-bottom: 1rem; }
  .attente p:last-child { margin-bottom: 0; }
  .attente .fin { color: var(--gold); font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; font-style: italic; }

  .legal { max-width: 52rem; margin: 0 auto; padding: 3rem 1.5rem; }
  .legal h2 { font-family: 'Cormorant Garamond', serif; font-size: 1.9rem; font-weight: 400; margin-bottom: .4rem; }
  .legal .maj { color: var(--off); font-size: .8rem; margin-bottom: 2rem; }
  .acc { border-bottom: 1px solid rgba(255,255,255,0.06); }
  .acc-head { display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding: 1.1rem 0; cursor: pointer; }
  .acc-head h3 { font-size: .96rem; font-weight: 500; }
  .acc-head span { color: var(--purple-light); font-size: 1.2rem; }
  .acc-body { overflow: hidden; transition: max-height .35s ease; }
  .acc-body p, .acc-body ul { color: var(--off); font-size: .92rem; margin-bottom: .9rem; }
  .acc-body ul { padding-left: 1.2rem; }
  .acc-body li { margin-bottom: .35rem; }

  .divider { height: 1px; background: linear-gradient(90deg, transparent, var(--border), transparent); max-width: 62rem; margin: 0 auto; }
  footer { text-align: center; padding: 3rem 1.5rem 4rem; color: var(--off); font-size: .84rem; }
  footer .marque { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; color: var(--white); margin-bottom: .3rem; }
`;

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="acc">
      <div className="acc-head" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <span>{open ? "\u2212" : "+"}</span>
      </div>
      <div className="acc-body" style={{ maxHeight: open ? "3000px" : "0" }}>
        <div style={{ paddingBottom: open ? "1.2rem" : 0 }}>{children}</div>
      </div>
    </div>
  );
};

export default function Accueil({ lang }) {
  const t = accueil[lang];
  return (
    <>
      <style jsx global>{STYLES}</style>
      <ChoixLangue lang={lang} />

      {/* HERO */}
      <div className="hero">
        <img className="hero-img" src="/corbeau-cercle.png" alt="Orbal" />
        <h1 className="hero-title serif">{t.hero.titre}</h1>
        <div className="signature">{t.hero.signature}</div>
        <p className="hero-sub">{t.hero.sous}</p>
      </div>

      <div className="divider" />

      {/* CE QUE NOUS VOYONS */}
      <section className="ombres">
        <div className="label">{t.ombres.label}</div>
        <p className="ombres-txt">{t.ombres.texte}</p>
        <p className="ombres-chute serif">{t.ombres.chute}</p>
      </section>

      <div className="divider" />

      {/* CE QU'EST ORBAL */}
      <section>
        <div className="label">{t.orbal.label}</div>
        <h2 className="title serif">{t.orbal.titre}</h2>
        <p className="lead">{t.orbal.lead}</p>
        <div className="grid">
          {t.orbal.cartes.map(([titre, texte]) => (
            <div className="card" key={titre}>
              <h3>{titre}</h3>
              <p>{texte}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* LE MODELE */}
      <section>
        <div className="label">{t.modele.label}</div>
        <h2 className="title serif">{t.modele.titre}</h2>
        <p className="lead">{t.modele.lead}</p>
        <div className="prix">
          {t.modele.offres.map(([classe, nom, montant, quoi]) => (
            <div className={classe} key={nom}>
              <div className="nom">{nom}</div>
              <div className="montant serif">{montant}</div>
              <div className="quoi">{quoi}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ATTENTE */}
      <section>
        <div className="label">{t.attente.label}</div>
        <h2 className="title serif">{t.attente.titre}</h2>
        <div className="attente">
          {t.attente.paragraphes.map((p) => <p key={p}>{p}</p>)}
          <p className="fin">{t.attente.fin}</p>
        </div>
      </section>

      <div className="divider" />

      {/* CGU */}
      <div className="legal" id="cgu">
        <h2 className="serif">{t.cgu.titre}</h2>
        <p className="maj">{t.cgu.maj}</p>
        {t.cgu.articles.map(([titre, corps]) => <Accordion key={titre} title={titre}>{corps}</Accordion>)}
      </div>

      <div className="divider" />

      {/* MENTIONS LEGALES */}
      <div className="legal" id="mentions-legales">
        <h2 className="serif">{t.mentions.titre}</h2>
        <p className="maj">{t.mentions.maj}</p>
        {t.mentions.blocs.map(([titre, corps]) => <Accordion key={titre} title={titre}>{corps}</Accordion>)}
      </div>

      <div className="divider" />

      {/* CONFIDENTIALITE */}
      <div className="legal" id="confidentialite">
        <h2 className="serif">{t.confidentialite.titre}</h2>
        <p className="maj">{t.confidentialite.maj}</p>
        {t.confidentialite.blocs.map(([titre, corps]) => <Accordion key={titre} title={titre}>{corps}</Accordion>)}
      </div>

      <footer>
        <div className="marque serif">Orbal</div>
        <div>{t.pied.par}</div>
        <div style={{ marginTop: ".6rem" }}>
          <a href="#cgu">{t.pied.cgu}</a> · <a href="#mentions-legales">{t.pied.mentions}</a> · <a href="#confidentialite">{t.pied.confidentialite}</a>
        </div>
      </footer>
    </>
  );
}
