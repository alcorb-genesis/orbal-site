import { useState, useEffect } from "react";
import ChoixLangue from "./ChoixLangue";
import { install } from "../contenu/install";

// Page d'installation, commune au français (/install) et à l'anglais (/en/install). Comportement inchangé :
// détection du téléphone, choix manuel, code d'invitation lu dans ?ref=, demande de version au relais.

const APK = "https://relay.alcorb.app/orbal.apk";
const TESTFLIGHT = "https://testflight.apple.com/join/haS2C7aR";

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Sans:wght@300;400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #04020a; color: #ede8e3;
    font-family: 'DM Sans', sans-serif; line-height: 1.7;
    min-height: 100vh;
  }
  .wrap { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 3rem 1.5rem; }
  .corbeau { width: min(340px, 80vw); height: auto; margin-bottom: 1rem; }
  h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 6vw, 3rem); font-weight: 300; margin-bottom: .6rem; }
  .sub { color: #b0a89e; font-size: .98rem; max-width: 26rem; margin: 0 auto 2.4rem; }
  .btn {
    display: inline-block; text-decoration: none;
    padding: 1.1rem 2.6rem; border-radius: 14px;
    font-size: 1rem; font-weight: 500; letter-spacing: .02em;
    border: 1px solid #E0B84C; background: rgba(224,184,76,0.14); color: #E0B84C;
    transition: background .25s ease;
  }
  .btn:hover { background: rgba(224,184,76,0.24); }
  .btn.violet { border-color: #a259e6; background: rgba(162,89,230,0.14); color: #a259e6; }
  .btn.violet:hover { background: rgba(162,89,230,0.24); }
  .autre { margin-top: 1.6rem; }
  .autre a { color: rgba(237,232,227,0.45); font-size: .86rem; text-decoration: underline; cursor: pointer; }
  .invitation { margin-bottom: 2.4rem; padding: 1.4rem 2rem; border: 1px solid rgba(224,184,76,0.35); border-radius: 14px; background: rgba(224,184,76,0.06); }
  .invitation-titre { color: rgba(237,232,227,0.55); font-size: .78rem; letter-spacing: .18em; text-transform: uppercase; margin-bottom: .6rem; }
  .invitation-code { font-family: 'Cormorant Garamond', serif; color: #E0B84C; font-size: 1.7rem; letter-spacing: .12em; }
  .invitation-note { color: rgba(237,232,227,0.4); font-size: .8rem; margin-top: .6rem; }
  .infos { margin-top: 2.6rem; color: rgba(237,232,227,0.35); font-size: .8rem; line-height: 1.9; }
  .note { margin-top: 2rem; max-width: 28rem; color: rgba(237,232,227,0.45); font-size: .84rem; border-top: 1px solid rgba(123,47,190,0.25); padding-top: 1.6rem; }
  .signature { font-family: 'Cormorant Garamond', serif; font-style: italic; color: #E0B84C; font-size: 1.05rem; margin-top: 2.6rem; }
`;

export default function Install({ lang }) {
  const t = install[lang];
  const [os, setOs] = useState(null);
  const [forcer, setForcer] = useState(null);
  const [version, setVersion] = useState(null);
  const [code, setCode] = useState(null);

  useEffect(() => {
    // Un Eclaireur partage son lien avec ?ref=SON-CODE : on l'affiche pour
    // que le nouvel arrivant puisse le recopier a l'inscription.
    const ref = new URLSearchParams(window.location.search).get('ref');
    if (ref) setCode(ref.toUpperCase());

    const ua = navigator.userAgent || "";
    if (/android/i.test(ua)) setOs("android");
    else if (/iPad|iPhone|iPod/.test(ua)) setOs("ios");
    else setOs("autre");

    fetch("https://relay.alcorb.app/orbal-version.json")
      .then(r => r.json()).then(setVersion).catch(() => {});
  }, []);

  const vu = forcer || os;

  return (
    <>
      <style jsx global>{STYLES}</style>
      <ChoixLangue lang={lang} />
      <div className="wrap">
        <img className="corbeau" src="/corbeau-cercle.png" alt="Orbal" />
        <h1>{t.titre}</h1>
        <p className="sub">{t.sous}</p>

        {code && (
          <div className="invitation">
            <div className="invitation-titre">{t.invitationTitre}</div>
            <div className="invitation-code">{code}</div>
            <div className="invitation-note">{t.invitationNote}</div>
          </div>
        )}

        {vu === "android" && (
          <>
            <a className="btn" href={APK}>{t.android}</a>
            <div className="note">{t.androidNote}</div>
          </>
        )}

        {vu === "ios" && (
          <>
            <a className="btn violet" href={TESTFLIGHT}>{t.ios}</a>
            <div className="note">{t.iosNote}</div>
          </>
        )}

        {vu === "autre" && (
          <>
            <p className="sub" style={{ marginBottom: "1.4rem" }}>{t.autre}</p>
            <a className="btn" href={APK}>{t.apk}</a>
          </>
        )}

        <div className="autre">
          {vu !== "android" && <a onClick={() => setForcer("android")}>{t.surAndroid}</a>}
          {vu !== "android" && vu !== "ios" && <span style={{ color: "rgba(237,232,227,0.2)" }}> · </span>}
          {vu !== "ios" && <a onClick={() => setForcer("ios")}>{t.surIphone}</a>}
        </div>

        {version && (
          <div className="infos">
            {t.version} {version.version} · {version.tag}<br />
            {t.compilee} {version.build} · {version.taille}
          </div>
        )}

        <div className="signature">{t.signature}</div>
      </div>
    </>
  );
}
