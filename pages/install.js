import { useState, useEffect } from "react";

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

export default function Install() {
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
      <div className="wrap">
        <img className="corbeau" src="/corbeau-cercle.png" alt="Orbal" />
        <h1>Orbal vous attend</h1>
        <p className="sub">
          Installez l'application, puis ouvrez-la : elle se tiendra à jour d'elle-même.
        </p>

        {code && (
          <div className="invitation">
            <div className="invitation-titre">Vous êtes attendu</div>
            <div className="invitation-code">{code}</div>
            <div className="invitation-note">Notez ce code : il vous sera demandé à l'inscription.</div>
          </div>
        )}

        {vu === "android" && (
          <>
            <a className="btn" href={APK}>Télécharger pour Android</a>
            <div className="note">
              Votre téléphone vous demandera d'autoriser une installation hors du Play Store.
              C'est normal : Orbal n'y est pas encore. Acceptez, puis ouvrez l'application.
            </div>
          </>
        )}

        {vu === "ios" && (
          <>
            <a className="btn violet" href={TESTFLIGHT}>Rejoindre sur TestFlight</a>
            <div className="note">
              Installez d'abord TestFlight depuis l'App Store si vous ne l'avez pas.
              Le lien ci-dessus vous y conduira ensuite jusqu'à Orbal.
            </div>
          </>
        )}

        {vu === "autre" && (
          <>
            <p className="sub" style={{ marginBottom: "1.4rem" }}>
              Orbal vit sur téléphone. Ouvrez cette page depuis le vôtre.
            </p>
            <a className="btn" href={APK}>Télécharger l'APK Android</a>
          </>
        )}

        <div className="autre">
          {vu !== "android" && <a onClick={() => setForcer("android")}>Je suis sur Android</a>}
          {vu !== "android" && vu !== "ios" && <span style={{ color: "rgba(237,232,227,0.2)" }}> · </span>}
          {vu !== "ios" && <a onClick={() => setForcer("ios")}>Je suis sur iPhone</a>}
        </div>

        {version && (
          <div className="infos">
            Version {version.version} · {version.tag}<br />
            Compilée le {version.build} · {version.taille}
          </div>
        )}

        <div className="signature">La seule trace, c'est le souvenir.</div>
      </div>
    </>
  );
}
