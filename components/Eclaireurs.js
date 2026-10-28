import { useState } from "react";
import Head from "next/head";
import ChoixLangue from "./ChoixLangue";
import { eclaireurs } from "../contenu/eclaireurs";
import { LOGO } from "../contenu/eclaireurs-logo";

// Page d'accès Éclaireur, autrefois `public/eclaireurs.html`, désormais rendue par Next à la même adresse
// (/eclaireurs.html) et en anglais sous /en/eclaireurs.html. Même balisage, même feuille de style, même
// comportement : prénom et téléphone choisis, alerte s'il manque l'un des deux, puis la marche à suivre.
// Rien n'est envoyé : tout reste dans la page. Seule différence de structure, imposée par Next : la carte
// est enveloppée dans `#__next`, qui reçoit donc la place que la carte occupait dans le body.

const STYLES = `*{box-sizing:border-box;margin:0;padding:0}body{background:#07070a;color:#ede8e3;font-family:-apple-system,sans-serif;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px}#__next{width:100%;max-width:420px}.card{background:#07070a;border:1px solid rgba(123,47,190,0.3);border-radius:16px;overflow:hidden;width:100%;max-width:420px}.header{padding:32px 24px;text-align:center;border-bottom:1px solid rgba(123,47,190,0.2)}.logo{width:72px;height:72px;border-radius:50%;object-fit:cover;border:1.5px solid rgba(123,47,190,0.5);display:block;margin:0 auto 16px}.brand{font-size:10px;color:#a259e6;letter-spacing:4px;text-transform:uppercase;margin-bottom:6px}.title{font-family:Georgia,serif;font-size:32px;font-weight:300;color:#ede8e3;letter-spacing:4px}.body{padding:24px}.badge{display:inline-block;background:rgba(123,47,190,0.12);border:1px solid rgba(123,47,190,0.3);color:#a259e6;font-size:10px;letter-spacing:2px;text-transform:uppercase;padding:4px 14px;border-radius:20px;margin-bottom:20px}.msg{color:rgba(237,232,227,0.75);font-size:14px;line-height:1.8;margin-bottom:24px}.divider{height:1px;background:rgba(123,47,190,0.2);margin:20px 0}.label{font-size:10px;color:#a259e6;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;display:block}.inp{width:100%;background:#0e0d14;border:1px solid rgba(123,47,190,0.3);color:#ede8e3;padding:11px 14px;font-size:14px;border-radius:6px;margin-bottom:14px;outline:none;font-family:inherit}.inp:focus{border-color:#7B2FBE}.inp::placeholder{color:rgba(237,232,227,0.3)}.radio-group{display:flex;gap:10px;margin-bottom:20px}.rbtn{flex:1;background:#0e0d14;border:1px solid rgba(123,47,190,0.3);color:rgba(237,232,227,0.5);padding:11px;font-size:14px;border-radius:6px;cursor:pointer;text-align:center;font-family:inherit}.rbtn.active{background:rgba(123,47,190,0.15);border-color:#7B2FBE;color:#ede8e3}.btn{width:100%;background:#7B2FBE;color:#fff;border:none;padding:14px;font-size:15px;font-weight:500;border-radius:6px;cursor:pointer;font-family:inherit}.result{display:none;margin-top:20px;background:#0e0d14;border:1px solid rgba(123,47,190,0.3);border-radius:8px;padding:16px}.result.show{display:block}.rtitle{color:#a259e6;font-size:10px;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px}.step{color:rgba(237,232,227,0.75);font-size:13px;line-height:1.7;padding-left:20px;position:relative;margin-bottom:8px}.step::before{content:attr(data-n);position:absolute;left:0;color:#7B2FBE;font-weight:500}.footer{padding:16px 24px;border-top:1px solid rgba(123,47,190,0.15);text-align:center}.footer a{color:#a259e6;font-size:13px;text-decoration:none;letter-spacing:1px}.footer span{color:rgba(237,232,227,0.2);font-size:11px;display:block;margin-top:4px;font-style:italic}`;

export default function Eclaireurs({ lang }) {
  const t = eclaireurs[lang];
  const [prenom, setPrenom] = useState("");
  const [ph, setPh] = useState(null);
  const [resultat, setResultat] = useState(null);

  function go() {
    const p = prenom.trim();
    if (!p || !ph) { window.alert(t.manque); return; }
    setResultat({ prenom: p, ph });
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>{t.titrePage}</title>
      </Head>
      <style jsx global>{STYLES}</style>
      <ChoixLangue lang={lang} />
      <div className="card">
        <div className="header"><img className="logo" src={LOGO} alt="Orbal" /><div className="brand">Alcorb</div><div className="title">Orbal</div></div>
        <div className="body"><div style={{ textAlign: "center", marginBottom: "20px" }}><span className="badge">{t.badge}</span></div>
          <div className="msg">{t.msg}</div>
          <div className="divider"></div>
          <label className="label">{t.prenom}</label><input className="inp" id="prenom" type="text" placeholder={t.exemple} value={prenom} onChange={(e) => setPrenom(e.target.value)} />
          <label className="label">{t.telephone}</label>
          <div className="radio-group"><button className={ph === "android" ? "rbtn active" : "rbtn"} id="ba" onClick={() => setPh("android")}>Android</button><button className={ph === "ios" ? "rbtn active" : "rbtn"} id="bi" onClick={() => setPh("ios")}>iPhone</button></div>
          <button className="btn" onClick={go}>{t.obtenir}</button>
          <div className={resultat ? "result show" : "result"} id="res">
            <div className="rtitle" id="rt">{resultat ? t.pour + resultat.prenom + " - " + (resultat.ph === "android" ? "Android" : "iPhone") : ""}</div>
            <div id="rs">{resultat && t.etapes[resultat.ph].map((x, n) => <div className="step" data-n={n + 1} key={n}>{x}</div>)}</div>
          </div></div>
        <div className="footer"><a href={t.site}>alcorb.app</a><span>{t.devise}</span></div>
      </div>
    </>
  );
}
