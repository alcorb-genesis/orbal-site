import { Fragment } from "react";
import Head from "next/head";
import ChoixLangue from "./ChoixLangue";
import { privacy } from "../contenu/privacy";

// Politique de confidentialité courte, autrefois `public/privacy.html`, désormais rendue par Next à la même
// adresse (/privacy.html) et en anglais sous /en/privacy.html. Même balisage et même feuille de style que
// l'ancienne page. `styles/globals.css` remet à zéro les marges de tous les éléments : les marges que le
// navigateur donnait par défaut à l'ancienne page (body, h1, p, ul) sont donc rétablies ici, à l'identique.

const STYLES = `
body{margin:8px}
h1{margin-top:.67em}
p{margin-top:1em}
ul{margin-top:1em}
body{background:#07070a;color:#ede8e3;font-family:-apple-system,sans-serif;line-height:1.8;padding:0 24px}
.wrap{max-width:720px;margin:0 auto;padding:60px 0}
h1{font-family:Georgia,serif;font-size:36px;font-weight:300;margin-bottom:8px}
.sub{color:#a259e6;font-size:12px;letter-spacing:3px;text-transform:uppercase;margin-bottom:40px}
h2{font-size:17px;font-weight:500;margin:32px 0 12px;padding-left:12px;border-left:2px solid #7B2FBE}
p,li{color:rgba(237,232,227,0.65);margin-bottom:12px}
ul{padding-left:20px;margin-bottom:12px}
a{color:#a259e6;text-decoration:none}
footer{margin-top:48px;padding-top:24px;border-top:1px solid rgba(123,47,190,0.3);font-size:13px;color:rgba(237,232,227,0.3)}
`;

export default function Privacy({ lang }) {
  const t = privacy[lang];
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>{t.titrePage}</title>
      </Head>
      <style jsx global>{STYLES}</style>
      <ChoixLangue lang={lang} />
      <div className="wrap">
        <p className="sub">{t.sub}</p>
        <h1>{t.titre}</h1>
        <p>{t.maj}</p>
        <p>{t.note}</p>
        {t.sections.map(([titre, corps]) => (
          <Fragment key={titre}>
            <h2>{titre}</h2>
            {corps}
          </Fragment>
        ))}
        <footer>{t.pied}<a href={t.site}>alcorb.app</a></footer>
      </div>
    </>
  );
}
