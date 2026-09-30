import Head from "next/head";

// Presentation commune aux deux pages de retour de paiement.
//
// Elles n'annoncent aucun statut et ne racontent pas le parcours : arriver ici
// ne prouve rien, l'adresse pouvant etre ouverte directement. Elles se bornent a
// renvoyer vers l'application, seule a connaitre l'etat reel de l'abonnement.
//
// Elles ne demandent rien, ne lisent aucun parametre d'URL, et n'appellent aucun
// service tiers : les polices sont des piles locales, sans import distant.

const STYLES = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #04020a; color: #ede8e3;
    /* Piles LOCALES : ces pages ne declenchent aucune requete vers un tiers.
       Les familles du site sont nommees d'abord — si elles sont presentes sur
       l'appareil, le rendu s'aligne ; sinon la substitution est propre. */
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, sans-serif;
    line-height: 1.7; min-height: 100vh;
  }
  .wrap { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 3rem 1.5rem; }
  .corbeau { width: min(300px, 70vw); height: auto; margin-bottom: 1rem; }
  h1 {
    font-family: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
    font-size: clamp(2rem, 6vw, 3rem); font-weight: 300; line-height: 1.2; margin-bottom: .8rem;
  }
  .sub { color: #b0a89e; font-size: .98rem; max-width: 28rem; margin: 0 auto 1.4rem; }
  .suite { max-width: 28rem; padding: 1.4rem 1.8rem; border: 1px solid rgba(123,47,190,0.28); border-radius: 14px; background: rgba(14,13,20,0.6); margin-bottom: 2.2rem; }
  .suite-titre { color: rgba(237,232,227,0.55); font-size: .78rem; letter-spacing: .18em; text-transform: uppercase; margin-bottom: .7rem; }
  .suite p { color: #b0a89e; font-size: .94rem; }
  .suite p + p { margin-top: .8rem; }
  .btn {
    display: inline-block; text-decoration: none;
    padding: 1.1rem 2.6rem; border-radius: 14px;
    font-size: 1rem; font-weight: 500; letter-spacing: .02em;
    border: 1px solid #E0B84C; background: rgba(224,184,76,0.14); color: #E0B84C;
    transition: background .25s ease;
  }
  .btn:hover { background: rgba(224,184,76,0.24); }
  .signature {
    font-family: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
    font-style: italic; color: #E0B84C; font-size: 1.05rem; margin-top: 2.4rem;
  }

  /* Le focus reste VISIBLE : ces pages se parcourent aussi au clavier. */
  a:focus-visible { outline: 2px solid #E0B84C; outline-offset: 4px; border-radius: 4px; }
  @media (prefers-reduced-motion: reduce) { .btn { transition: none; } }
`;

export default function PageRetour({ titre, sousTitre, indications, signature }) {
  return (
    <>
      <Head>
        <title>{titre}</title>
        {/* Une page de retour de paiement n'a rien a faire dans un index. Le
            `robots` par defaut du site est pose par `_app.js`, via `next/head`
            comme ici : il est donc DEDUPLIQUE, et c'est celui-ci qui sort. */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <style jsx global>{STYLES}</style>
      <main className="wrap">
        <img className="corbeau" src="/corbeau-cercle.png" alt="Orbal" />
        <h1>{titre}</h1>
        <p className="sub">{sousTitre}</p>

        <div className="suite">
          <div className="suite-titre">La suite</div>
          {indications.map((texte, i) => <p key={i}>{texte}</p>)}
        </div>

        <a className="btn" href="/">Retour au site</a>

        <p className="signature">{signature}</p>
      </main>
    </>
  );
}
