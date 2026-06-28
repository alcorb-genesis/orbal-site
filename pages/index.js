import { useState, useEffect } from "react";

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --black: #07070a;
    --deep: #0e0d14;
    --purple: #7B2FBE;
    --purple-light: #a259e6;
    --purple-dim: #2a1045;
    --white: #ede8e3;
    --off: #b0a89e;
    --gray: #3a3840;
    --border: rgba(123,47,190,0.25);
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--black);
    color: var(--white);
    font-family: 'DM Sans', sans-serif;
    line-height: 1.7;
    overflow-x: hidden;
  }

  .serif { font-family: 'Cormorant Garamond', Georgia, serif; }

  /* ── NAV ── */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.2rem 3rem;
    background: rgba(7,7,10,0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }
  .nav-logo { display: flex; align-items: center; gap: .7rem; text-decoration: none; }
  .nav-logo-text { font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-weight: 600; color: var(--white); letter-spacing: .05em; }
  .nav-logo-sub { font-size: .65rem; color: var(--purple-light); letter-spacing: .15em; text-transform: uppercase; margin-top: -.1rem; }
  .nav-links { display: flex; gap: 2rem; }
  .nav-links a { color: var(--off); text-decoration: none; font-size: .85rem; letter-spacing: .04em; transition: color .2s; }
  .nav-links a:hover { color: var(--white); }
  .nav-cta {
    background: var(--purple); color: var(--white); border: none; cursor: pointer;
    padding: .55rem 1.4rem; font-size: .85rem; font-family: 'DM Sans', sans-serif;
    font-weight: 500; letter-spacing: .04em; transition: background .2s, transform .15s;
  }
  .nav-cta:hover { background: var(--purple-light); transform: translateY(-1px); }

  /* ── HERO ── */
  .hero {
    min-height: 100vh; display: flex; flex-direction: column;
    align-items: center; justify-content: center; text-align: center;
    padding: 8rem 2rem 4rem;
    background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(123,47,190,.18) 0%, transparent 70%);
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: ''; position: absolute; inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237B2FBE' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: .5;
  }
  .raven-glyph { font-size: 3.5rem; margin-bottom: 1.5rem; filter: drop-shadow(0 0 20px rgba(123,47,190,.6)); }
  .hero-eyebrow { font-size: .75rem; letter-spacing: .25em; text-transform: uppercase; color: var(--purple-light); margin-bottom: 1.5rem; }
  .hero-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(3.5rem, 9vw, 7rem); font-weight: 300; line-height: 1.1; margin-bottom: 1.8rem; }
  .hero-title em { font-style: italic; color: var(--purple-light); }
  .hero-sub { font-size: 1.1rem; color: var(--off); max-width: 600px; margin: 0 auto 1rem; font-weight: 300; }
  .hero-badge { display: inline-block; margin: 1rem auto 2.5rem; padding: .4rem 1.2rem; border: 1px solid var(--border); color: var(--purple-light); font-size: .8rem; letter-spacing: .1em; text-transform: uppercase; }
  .hero-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
  .btn-primary { background: var(--purple); color: var(--white); border: none; cursor: pointer; padding: .9rem 2.2rem; font-size: .95rem; font-family: 'DM Sans', sans-serif; font-weight: 500; letter-spacing: .05em; transition: all .2s; }
  .btn-primary:hover { background: var(--purple-light); transform: translateY(-2px); }
  .btn-ghost { background: transparent; color: var(--white); border: 1px solid var(--border); cursor: pointer; padding: .9rem 2.2rem; font-size: .95rem; font-family: 'DM Sans', sans-serif; font-weight: 400; letter-spacing: .05em; transition: all .2s; }
  .btn-ghost:hover { border-color: var(--purple-light); color: var(--purple-light); }
  .hero-stats { display: flex; gap: 4rem; justify-content: center; margin-top: 5rem; padding-top: 3rem; border-top: 1px solid var(--border); flex-wrap: wrap; }
  .stat { text-align: center; }
  .stat-n { font-family: 'Cormorant Garamond', serif; font-size: 2.2rem; font-weight: 600; color: var(--white); }
  .stat-l { font-size: .75rem; color: var(--off); letter-spacing: .1em; text-transform: uppercase; margin-top: .2rem; }

  /* ── SECTIONS ── */
  section { padding: 6rem 2rem; max-width: 1100px; margin: 0 auto; }
  .section-full { max-width: 100%; padding-left: 0; padding-right: 0; }
  .section-full > .inner { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }
  .section-label { font-size: .7rem; letter-spacing: .25em; text-transform: uppercase; color: var(--purple-light); margin-bottom: 1rem; }
  .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 300; line-height: 1.2; margin-bottom: 1.5rem; }
  .section-title em { font-style: italic; color: var(--purple-light); }
  .section-lead { color: var(--off); font-size: 1.05rem; max-width: 650px; font-weight: 300; }
  .divider { height: 1px; background: linear-gradient(90deg, transparent, var(--border), transparent); margin: 0; }

  /* ── PHILOSOPHIE ── */
  .philosophy-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 4rem; }
  .philosophy-block { border-left: 2px solid var(--purple-dim); padding-left: 2rem; }
  .philosophy-block h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 400; margin-bottom: .8rem; }
  .philosophy-block p { color: var(--off); font-size: .95rem; font-weight: 300; line-height: 1.8; }

  /* ── FEATURES ── */
  .features-bg { background: var(--deep); }
  .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin-top: 4rem; }
  .feature-card { background: var(--black); padding: 2.5rem; transition: background .3s; }
  .feature-card:hover { background: rgba(123,47,190,.08); }
  .feature-icon { font-size: 1.8rem; margin-bottom: 1.2rem; }
  .feature-card h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 600; margin-bottom: .8rem; }
  .feature-card p { color: var(--off); font-size: .9rem; line-height: 1.7; font-weight: 300; }

  /* ── TARIFS ── */
  .pricing-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: var(--border); margin-top: 4rem; }
  .pricing-card { background: var(--black); padding: 2.5rem; position: relative; }
  .pricing-card.featured { background: var(--purple-dim); }
  .pricing-card.featured::before { content: 'Recommandé'; position: absolute; top: -1px; left: 50%; transform: translateX(-50%); background: var(--purple); color: var(--white); font-size: .7rem; letter-spacing: .12em; text-transform: uppercase; padding: .25rem .8rem; }
  .pricing-name { font-size: .75rem; letter-spacing: .2em; text-transform: uppercase; color: var(--purple-light); margin-bottom: 1rem; }
  .pricing-price { font-family: 'Cormorant Garamond', serif; font-size: 3rem; font-weight: 300; line-height: 1; }
  .pricing-period { font-size: .85rem; color: var(--off); margin-left: .3rem; }
  .pricing-desc { color: var(--off); font-size: .9rem; margin: 1rem 0 1.5rem; min-height: 2.5rem; }
  .pricing-features { list-style: none; }
  .pricing-features li { font-size: .88rem; color: var(--off); padding: .5rem 0; border-bottom: 1px solid rgba(255,255,255,.05); display: flex; gap: .6rem; align-items: flex-start; }
  .pricing-features li::before { content: '—'; color: var(--purple-light); flex-shrink: 0; margin-top: .1rem; }
  .msg-table { width: 100%; border-collapse: collapse; margin-top: 3rem; }
  .msg-table th { background: var(--purple-dim); color: var(--white); padding: 1rem; font-size: .8rem; letter-spacing: .1em; text-transform: uppercase; text-align: left; font-weight: 500; }
  .msg-table td { padding: 1rem; border-bottom: 1px solid var(--gray); font-size: .9rem; }
  .msg-table td:last-child { color: var(--purple-light); font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; }
  .msg-table tr:hover td { background: rgba(123,47,190,.05); }

  /* ── ÉCLAIREURS ── */
  .eclaireurs-box { border: 1px solid var(--border); padding: 3.5rem; margin-top: 4rem; position: relative; background: linear-gradient(135deg, rgba(123,47,190,.08) 0%, transparent 60%); }
  .eclaireurs-box::before { content: '✦'; position: absolute; top: -1rem; left: 3rem; background: var(--black); padding: 0 .5rem; color: var(--purple-light); font-size: 1.2rem; }
  .eclaireurs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 2rem; }
  .eclaireurs-stat { }
  .eclaireurs-stat .n { font-family: 'Cormorant Garamond', serif; font-size: 2.8rem; font-weight: 300; color: var(--purple-light); }
  .eclaireurs-stat .l { font-size: .8rem; color: var(--off); letter-spacing: .08em; margin-top: .2rem; }
  .invite-note { margin-top: 2rem; padding: 1.2rem 1.5rem; background: rgba(0,0,0,.4); border-left: 3px solid var(--purple); font-size: .9rem; color: var(--off); font-style: italic; }

  /* ── PARRAINAGE ── */
  .parrainage-flow { display: flex; align-items: center; gap: 0; margin: 3rem 0; flex-wrap: wrap; }
  .flow-step { flex: 1; min-width: 160px; padding: 2rem 1.5rem; border: 1px solid var(--border); text-align: center; }
  .flow-step h4 { font-size: .85rem; margin-bottom: .5rem; color: var(--purple-light); }
  .flow-step p { font-size: .85rem; color: var(--off); }
  .flow-arrow { color: var(--purple-dim); padding: 0 .5rem; font-size: 1.2rem; }
  .mlm-notice { background: rgba(123,47,190,.08); border: 1px solid var(--border); padding: 2rem; margin-top: 2rem; }
  .mlm-notice h4 { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; margin-bottom: 1rem; color: var(--white); }
  .mlm-notice p { font-size: .9rem; color: var(--off); }
  .mlm-compare { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border); margin-top: 1.5rem; }
  .mlm-col { background: var(--black); padding: 1.5rem; }
  .mlm-col h5 { font-size: .75rem; letter-spacing: .15em; text-transform: uppercase; margin-bottom: 1rem; }
  .mlm-col.bad h5 { color: #e05555; }
  .mlm-col.good h5 { color: var(--purple-light); }
  .mlm-col ul { list-style: none; }
  .mlm-col ul li { font-size: .88rem; color: var(--off); padding: .35rem 0; }
  .mlm-col.bad ul li::before { content: '✕ '; color: #e05555; }
  .mlm-col.good ul li::before { content: '✓ '; color: var(--purple-light); }

  /* ── SÉCURITÉ / LEGAL PROTECTION ── */
  .security-bg { background: var(--deep); }
  .security-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 3rem; }
  .security-item { padding: 2rem; border: 1px solid var(--border); }
  .security-item h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; margin-bottom: .8rem; }
  .security-item p { font-size: .88rem; color: var(--off); line-height: 1.7; }
  .law-ref { font-size: .75rem; color: var(--purple-light); letter-spacing: .05em; display: block; margin-top: .5rem; }
  .canary-box { background: rgba(123,47,190,.06); border: 1px solid var(--purple-dim); padding: 2rem; margin-top: 3rem; }
  .canary-box h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; margin-bottom: 1rem; }
  .canary-box p { font-size: .9rem; color: var(--off); }
  .canary-status { display: inline-flex; align-items: center; gap: .5rem; background: rgba(0,200,100,.1); border: 1px solid rgba(0,200,100,.3); padding: .35rem .9rem; font-size: .8rem; color: #4ade80; margin-top: 1rem; }
  .canary-dot { width: 6px; height: 6px; background: #4ade80; border-radius: 50%; animation: pulse 2s infinite; }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.3} }

  /* ── LEGAL SECTIONS ── */
  .legal-section { padding: 5rem 2rem; max-width: 800px; margin: 0 auto; }
  .legal-section h2 { font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 400; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border); }
  .legal-section h3 { font-size: 1rem; font-weight: 600; margin: 2rem 0 .8rem; color: var(--purple-light); }
  .legal-section p, .legal-section li { font-size: .9rem; color: var(--off); line-height: 1.8; margin-bottom: .8rem; }
  .legal-section ul, .legal-section ol { padding-left: 1.5rem; }
  .legal-section ul li, .legal-section ol li { margin-bottom: .5rem; }
  .legal-section .article { margin-bottom: 2.5rem; padding: 1.5rem; border-left: 2px solid var(--purple-dim); }
  .legal-section .article h3 { margin-top: 0; }

  /* ── ACCORDION ── */
  .accordion-header { display: flex; justify-content: space-between; align-items: center; padding: 1.2rem 0; cursor: pointer; border-bottom: 1px solid var(--border); user-select: none; }
  .accordion-header h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 400; }
  .accordion-header span { color: var(--purple-light); font-size: 1.2rem; transition: transform .3s; }
  .accordion-header.open span { transform: rotate(45deg); }
  .accordion-body { overflow: hidden; transition: max-height .4s ease; }

  /* ── FOOTER ── */
  footer { background: var(--deep); border-top: 1px solid var(--border); padding: 4rem 2rem 2rem; }
  .footer-inner { max-width: 1100px; margin: 0 auto; }
  .footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; margin-bottom: 3rem; }
  .footer-brand p { font-size: .88rem; color: var(--off); margin-top: 1rem; max-width: 300px; line-height: 1.7; }
  .footer-col h4 { font-size: .75rem; letter-spacing: .2em; text-transform: uppercase; color: var(--purple-light); margin-bottom: 1.2rem; }
  .footer-col a { display: block; font-size: .88rem; color: var(--off); text-decoration: none; margin-bottom: .6rem; transition: color .2s; }
  .footer-col a:hover { color: var(--white); }
  .footer-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 2rem; border-top: 1px solid var(--border); flex-wrap: wrap; gap: 1rem; }
  .footer-bottom p { font-size: .8rem; color: var(--gray); }
  .footer-bottom span { color: var(--purple-light); }

  /* ── RESPONSIVE ── */
  @media (max-width: 768px) {
    nav { padding: 1rem 1.5rem; }
    .nav-links { display: none; }
    .philosophy-grid, .features-grid, .pricing-grid, .eclaireurs-grid, .security-grid, .footer-top { grid-template-columns: 1fr; }
    .mlm-compare { grid-template-columns: 1fr; }
    .features-grid { gap: 1px; }
    .parrainage-flow { flex-direction: column; }
    .flow-arrow { transform: rotate(90deg); }
    .footer-top { gap: 2rem; }
  }
`;


const LOGO_DATA = "data:image/png;base64,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";

// ── LOGO ──
const RavenIcon = ({ size = 40 }) => (
  <img src={LOGO_DATA} alt="Orbal" width={size} height={size} style={{objectFit:"contain"}} />
);

// ── ACCORDION ──
const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className={`accordion-header ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <span>+</span>
      </div>
      <div className="accordion-body" style={{ maxHeight: open ? "2000px" : "0" }}>
        <div style={{ padding: "1.5rem 0" }}>{children}</div>
      </div>
    </div>
  );
};

export default function OrbalLanding() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <style>{STYLES}</style>

      {/* ── NAVIGATION ── */}
      <nav style={{ boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,.5)" : "none" }}>
        <a href="#accueil" className="nav-logo">
          <RavenIcon size={28} />
          <div>
            <div className="nav-logo-text">Orbal</div>
            <div className="nav-logo-sub">par Alcorb</div>
          </div>
        </a>
        <div className="nav-links">
          <a href="#philosophie">Philosophie</a>
          <a href="#fonctionnalites">Sécurité</a>
          <a href="#tarifs">Tarifs</a>
          <a href="#eclaireurs">Éclaireurs</a>
          <a href="#parrainage">Parrainage</a>
          <a href="#cgu">CGU</a>
        </div>
        <button className="nav-cta" onClick={() => document.getElementById("eclaireurs").scrollIntoView({behavior:"smooth"})}>
          Rejoindre la bêta
        </button>
      </nav>

      {/* ── HERO ── */}
      <div id="accueil" className="hero">
        <div className="hero-eyebrow">Messagerie souveraine · Chiffrement E2EE · Infrastructure européenne</div>
        <div className="raven-glyph"><RavenIcon size={64} color="#a259e6" /></div>
        <h1 className="hero-title serif">
          Vos messages.<br /><em>Votre souveraineté.</em>
        </h1>
        <p className="hero-sub">
          La seule messagerie E2EE européenne sans numéro de téléphone, sans confiance aveugle, sans compromis.
        </p>
        <div className="hero-badge">🕊 3 messages gratuits · pour toujours · parce qu'un message peut sauver une vie</div>
        <div className="hero-actions">
          <button className="btn-primary">Télécharger Orbal</button>
          <button className="btn-ghost" onClick={() => document.getElementById("eclaireurs").scrollIntoView({behavior:"smooth"})}>
            Programme Éclaireurs
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat"><div className="stat-n serif">E2EE</div><div className="stat-l">Orbal Protocol</div></div>
          <div className="stat"><div className="stat-n serif">🇪🇺</div><div className="stat-l">Union Européenne</div></div>
          <div className="stat"><div className="stat-n serif">0</div><div className="stat-l">Numéro requis</div></div>
          <div className="stat"><div className="stat-n serif">3</div><div className="stat-l">Messages gratuits</div></div>
        </div>
      </div>

      <div className="divider" />

      {/* ── PHILOSOPHIE ── */}
      <section id="philosophie">
        <div className="section-label">Notre engagement</div>
        <h2 className="section-title serif">Une approche <em>honnête</em><br />et transparente</h2>
        <p className="section-lead">
          Orbal n'est pas construit pour vous vendre quelque chose. Il est construit pour que vous possédiez réellement vos communications. Voici ce que nous croyons — et comment nous le prouvons.
        </p>
        <div className="philosophy-grid">
          <div className="philosophy-block">
            <h3 className="serif">Ce n'est pas Orbal qui s'adapte à votre matériel</h3>
            <p>C'est nous qui portons la puissance côté serveur pour que vous gardiez le contrôle de vos données. Nous prenons en charge les tâches lourdes pour que votre téléphone, quel qu'il soit, vous appartienne vraiment.</p>
          </div>
          <div className="philosophy-block">
            <h3 className="serif">Même nous ne pouvons pas lire vos messages</h3>
            <p>Les clés de déchiffrement ne quittent jamais vos appareils. Nos serveurs ne voient que des données chiffrées illisibles. Ce n'est pas une promesse — c'est une impossibilité technique.</p>
          </div>
          <div className="philosophy-block">
            <h3 className="serif">Vous savez exactement ce que vous payez</h3>
            <p>Pas de données vendues. Pas de publicité. Pas de financement opaque. Notre modèle économique est simple et public : vous payez pour un service, nous vous le rendons.</p>
          </div>
          <div className="philosophy-block">
            <h3 className="serif">Nous rémunérons ceux qui nous font confiance</h3>
            <p>Les personnes qui recommandent Orbal à leurs proches reçoivent une commission mensuelle récurrente. Pas un bonus unique — une récompense pour chaque personne qui reste et qui croit au projet.</p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── FONCTIONNALITÉS ── */}
      <div id="fonctionnalites" className="section-full features-bg">
        <div className="inner" style={{paddingTop:"6rem",paddingBottom:"6rem"}}>
          <div className="section-label">Ce qui nous différencie</div>
          <h2 className="section-title serif">6 piliers que<br /><em>personne d'autre</em> ne réunit</h2>
          <p className="section-lead">Signal est excellent. WhatsApp est populaire. Orbal est le seul à supprimer ce qui part plutôt que de protéger ce qui reste.</p>
          <div className="features-grid">
            {[
              { icon: "🚫", title: "Pas de numéro de téléphone", desc: "Une adresse email ou un pseudonyme suffisent. Les autres exigent votre numéro — Orbal, non. Votre identité vous appartient." },
              { icon: "🇪🇺", title: "Infrastructure 100% européenne", desc: "Serveurs en Union Européenne. Juridiction UE, RGPD strict. Zéro exposition au CLOUD Act américain. Vos données ne quittent jamais l'Europe." },
              { icon: "🗑", title: "Suppression serveur réelle", desc: "Vos messages sont supprimés de nos serveurs dès livraison confirmée. Pas masqués côté client — effacés. Vérifiable techniquement." },
              { icon: "💜", title: "Modèle économique transparent", desc: "Vous savez ce que vous payez et pourquoi. Pas de données vendues, pas de publicité. Un tarif clair, une prestation claire." },
              { icon: "🕊", title: "3 messages/ jour gratuits à vie", desc: "Tout le monde peut envoyer 3 messages par jour sans payer, sans inscription complète. Parce qu'une personne en danger doit pouvoir dire où elle est." },
              { icon: "🔐", title: "Orbal Protocol — Chiffrement éphémère", desc: "Chiffrement de bout en bout, état de l'art. Vos messages disparaissent après lecture. Aucune archive. Aucune trace. Vous possédez vos données — et leur absence." },
            ].map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon">{f.icon}</div>
                <h3 className="serif">{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="divider" />

      {/* ── TARIFS ── */}
      <section id="tarifs">
        <div className="section-label">Tarification</div>
        <h2 className="section-title serif">Transparent.<br /><em>Sans surprise.</em></h2>
        <p className="section-lead">Un abonnement pour les communicants réguliers. Des crédits à la carte pour ceux qui préfèrent la liberté. Vous choisissez.</p>

        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-name">Mensuel</div>
            <div className="pricing-price serif">9,90<span className="pricing-period">€/mois</span></div>
            <p className="pricing-desc">Messages brefs illimités (280 car. max)</p>
            <ul className="pricing-features">
              <li>Messages brefs (280 caractères) illimités</li>
              <li>3 messages gratuits inclus définitivement</li>
              <li>Chiffrement E2EE complet</li>
              <li>Stockage local chiffré sur vos appareils</li>
              <li>Accès au programme parrainage</li>
            </ul>
          </div>

          <div className="pricing-card featured">
            <div className="pricing-name">Annuel</div>
            <div className="pricing-price serif">99<span className="pricing-period">€/an</span></div>
            <p className="pricing-desc">Équivaut à 8,25€/mois · 2 mois offerts</p>
            <ul className="pricing-features">
              <li>Tout du mensuel inclus</li>
              <li>2 mois offerts (économisez 19,80€)</li>
              <li>Priorité support</li>
              <li>Accès anticipé aux nouvelles fonctionnalités</li>
              <li>Commission parrainage 10% récurrente</li>
            </ul>
          </div>

          <div className="pricing-card">
            <div className="pricing-name">À la carte</div>
            <div className="pricing-price serif">2€ <span className="pricing-period" style={{fontSize:".7rem"}}>à 500€</span></div>
            <p className="pricing-desc">Rechargez selon votre usage, sans engagement</p>
            <ul className="pricing-features">
              <li>Minimum 2€ · Maximum 500€ par recharge</li>
              <li>Crédits utilisés selon le type de message</li>
              <li>Aucun abonnement requis</li>
              <li>3 messages gratuits toujours inclus</li>
            </ul>
          </div>
        </div>

        <h3 className="serif" style={{fontSize:"1.5rem",marginTop:"4rem",marginBottom:".5rem"}}>Tarification par message</h3>
        <p style={{color:"var(--off)",fontSize:".9rem",marginBottom:"0"}}>Pour les utilisateurs à la carte et les messages hors abonnement.</p>
        <table className="msg-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Format</th>
              <th>Prix unitaire</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Bref", "280 caractères maximum", "0,05 €"],
              ["Standard", "Long format texte", "0,10 €"],
              ["Long", "Très long format", "0,20 €"],
              ["Fichier", "Max 25 MB (photo, document, audio, vidéo)", "1,00 €"],
            ].map(([t, f, p]) => (
              <tr key={t}>
                <td><strong>{t}</strong></td>
                <td style={{color:"var(--off)"}}>{f}</td>
                <td>{p}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="divider" />

      {/* ── ÉCLAIREURS ── */}
      <section id="eclaireurs">
        <div className="section-label">Programme bêta</div>
        <h2 className="section-title serif">Les <em>Éclaireurs</em><br />— sur invitation</h2>
        <p className="section-lead">
          Les Éclaireurs sont les premières personnes à croire en Orbal avant que le monde ne le découvre. Ils sont choisis personnellement par le fondateur. Ce statut n'est pas à vendre — il ne peut pas être obtenu après la bêta.
        </p>

        <div className="eclaireurs-box">
          <h3 className="serif" style={{fontSize:"1.6rem",marginBottom:"1rem"}}>Un statut fondateur, <em>à vie</em></h3>
          <p style={{color:"var(--off)",fontSize:".95rem",maxWidth:"600px"}}>
            Les Éclaireurs obtiennent un tarif que personne d'autre ne pourra jamais obtenir — et une commission mensuelle récurrente pour chaque personne qu'ils convainquent.
          </p>
          <div className="eclaireurs-grid">
            <div>
              <div className="eclaireurs-stat"><div className="n serif">0€</div><div className="l">gratuit, à vie (au lieu de 9,90€)</div></div>
              <div style={{marginTop:"1.5rem"}} className="eclaireurs-stat"><div className="n serif">25%</div><div className="l">de commission récurrente mensuelle sur vos filleuls directs</div></div>
            </div>
            <div>
              <p style={{color:"var(--off)",fontSize:".9rem",lineHeight:"1.8"}}>
                Exemple : vous convainquez 20 personnes de s'abonner à Orbal (9,90€/mois). Chaque mois où elles restent abonnées, vous percevez 25% de leur abonnement. Soit <strong style={{color:"var(--white)"}}>49,50€/mois récurrents</strong>, sans rien faire de plus.
              </p>
            </div>
          </div>
          <div className="invite-note">
            "Le programme Éclaireurs est fermé au public. Si vous souhaitez en faire partie, adressez-vous directement au fondateur. Ce statut est accordé à ceux qui comprennent et partagent la vision d'Orbal, pas à ceux qui cherchent uniquement un avantage financier."
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── PARRAINAGE ── */}
      <section id="parrainage">
        <div className="section-label">Programme de recommandation</div>
        <h2 className="section-title serif">Parrainage standard<br /><em>10% récurrent</em></h2>
        <p className="section-lead">
          Tout abonné Orbal peut parrainer des proches et toucher une commission mensuelle récurrente — uniquement sur ses filleuls directs.
        </p>

        <div className="parrainage-flow">
          {[
            { h: "Vous parrainez", p: "Vous partagez votre lien unique à un proche" },
            { h: "Il s'abonne", p: "Votre filleul souscrit à Orbal (9,90€/mois)" },
            { h: "Vous touchez", p: "0,99€ chaque mois tant qu'il reste abonné" },
          ].map((s, i, arr) => (
            <>
              <div className="flow-step" key={i}>
                <h4>{s.h}</h4>
                <p style={{fontSize:".83rem",color:"var(--off)"}}>{s.p}</p>
              </div>
              {i < arr.length - 1 && <div className="flow-arrow">→</div>}
            </>
          ))}
        </div>

        <div className="mlm-notice">
          <h4 className="serif">Ce que nous proposons n'est pas du MLM</h4>
          <p>Nous tenons à cette clarté. Voici la différence exacte :</p>
          <div className="mlm-compare">
            <div className="mlm-col bad">
              <h5>MLM (multi-niveaux)</h5>
              <ul>
                <li>Vous gagnez sur vos filleuls ET leurs filleuls</li>
                <li>Pyramide de commissions sur plusieurs niveaux</li>
                <li>Revenus dépendants du recrutement</li>
                <li>Interdit ou réglementé dans de nombreux pays</li>
              </ul>
            </div>
            <div className="mlm-col good">
              <h5>Parrainage Orbal (un niveau)</h5>
              <ul>
                <li>Vous gagnez uniquement sur vos filleuls directs</li>
                <li>Un seul niveau, jamais deux</li>
                <li>Revenus basés sur l'usage réel du service</li>
                <li>Légal, transparent, inscrit dans les CGU</li>
              </ul>
            </div>
          </div>
          <p style={{marginTop:"1rem",fontSize:".82rem",color:"var(--off)"}}>
            Art. L122-6 du Code de la consommation : le système de parrainage Orbal est un programme d'affiliation à un seul niveau, non assimilable à une chaîne commerciale ou une vente pyramidale.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ── SÉCURITÉ & PROTECTION ── */}
      <div id="securite" className="section-full security-bg">
        <div className="inner" style={{paddingTop:"6rem",paddingBottom:"6rem"}}>
          <div className="section-label">Protection juridique & technique</div>
          <h2 className="section-title serif">Vos droits sont<br /><em>gravés dans la loi</em></h2>
          <p className="section-lead">Orbal ne se contente pas de promettre la confidentialité. Elle est garantie par des protections techniques, juridiques et institutionnelles.</p>

          <div className="security-grid">
            {[
              { title: "Orbal Protocol — sécurité par l'absence", desc: "Chiffrement de bout en bout. Un message qui n'existe plus ne peut pas être compromis.", law: "Chiffrement de bout en bout · Orbal Protocol v3" },
              { title: "Arrêt CEDH Podchasov c. Russie", desc: "La Cour européenne des droits de l'homme a statué le 17 janvier 2024 qu'obliger un service à affaiblir son chiffrement E2EE viole l'article 8 (vie privée). Orbal s'appuie sur cette jurisprudence.", law: "CEDH, 17 jan. 2024, Podchasov c. Russie, req. n°33696/19" },
              { title: "RGPD — Règlement européen", desc: "Vos données personnelles sont traitées conformément au Règlement UE 2016/679. Droit d'accès, de rectification, de suppression. Délégué à la protection des données disponible sur demande.", law: "Règlement (UE) 2016/679 du 27 avril 2016" },
              { title: "Hébergement hors juridiction US", desc: "Nos serveurs sont hébergés en Union Européenne. Aucune exposition au CLOUD Act américain (50 U.S.C. § 1881). Une injonction étrangère ne peut pas atteindre vos données.", law: "Hébergement en Union Européenne · Juridiction UE" },
              { title: "Loi Informatique et Libertés", desc: "Orbal respecte la loi française n°78-17 du 6 janvier 1978 modifiée. Vos droits sont garantis et exercables à tout moment. Aucune donnée n'est transmise à des tiers sans votre consentement explicite.", law: "Loi n°78-17 du 6 janvier 1978 · CNIL" },
              { title: "Architecture Local-First", desc: "Vos clés cryptographiques sont stockées de façon sécurisée sur votre appareil (Keychain iOS / Keystore Android). Vos messages sont éphémères : rien n'est archivé.", law: "Stockage sécurisé système · Messages éphémères" },
            ].map((s, i) => (
              <div className="security-item" key={i}>
                <h3 className="serif">{s.title}</h3>
                <p>{s.desc}</p>
                <span className="law-ref">{s.law}</span>
              </div>
            ))}
          </div>

          <div className="canary-box">
            <h3 className="serif">Warrant Canary</h3>
            <p>
              Orbal publie un Warrant Canary actif. Tant que ce statut est affiché, nous certifions n'avoir reçu aucune injonction secrète, aucune demande d'accès aux données, et n'avoir installé aucune backdoor sur nos systèmes.
              Si ce statut disparaît ou change, considérez qu'une contrainte légale nous empêche de communiquer librement.
            </p>
            <div className="canary-status">
              <div className="canary-dot" />
              Aucune injonction reçue · Aucune backdoor · Dernière vérification : Mai 2026
            </div>
          </div>
        </div>
      </div>

      <div className="divider" />

      {/* ── CGU ── */}
      <div className="legal-section" id="cgu">
        <h2 className="serif">Conditions Générales d'Utilisation</h2>
        <p style={{color:"var(--off)",fontSize:".85rem",marginBottom:"2rem"}}>Version 1.0 — En vigueur depuis le lancement de la bêta · Droit français applicable</p>

        {[
          { title: "Article 1 — Objet et champ d'application", content: (
            <><p>Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du service de messagerie chiffrée Orbal, édité par Alcorb, auto-entrepreneur immatriculé en France, domicilié HelloDom, Paris 15e arrondissement.</p>
            <p>En accédant au service, l'utilisateur reconnaît avoir pris connaissance des présentes CGU et les accepter sans réserve. Les CGU peuvent évoluer ; l'utilisateur sera informé de tout changement substantiel.</p></>
          )},
          { title: "Article 2 — Description du service", content: (
            <><p>Orbal est un service de messagerie instantanée chiffrée de bout en bout (E2EE), utilisant Orbal Protocol v3 (chiffrement de bout en bout). Le service permet :</p>
            <ul>
              <li>L'envoi et la réception de messages texte chiffrés (brefs, standards, longs)</li>
              <li>L'envoi de fichiers jusqu'à 25 MB</li>
              <li>La gestion d'un compte personnel sans numéro de téléphone</li>
            </ul>
            <p>Orbal garantit que ni ses équipes ni ses serveurs ne peuvent accéder au contenu des messages, les clés de déchiffrement ne quittant jamais les appareils des utilisateurs.</p>
            <p>3 messages gratuits sont accordés à tout utilisateur, de manière permanente et inconditionnelle.</p></>
          )},
          { title: "Article 3 — Inscription et compte", content: (
            <><p>L'inscription requiert une adresse email valide ou un pseudonyme. Aucun numéro de téléphone n'est exigé. L'utilisateur est responsable de la confidentialité de ses identifiants.</p>
            <p>L'utilisateur doit conserver sa phrase de récupération (12 mots) permettant de restaurer ses données en cas de perte d'appareil. Alcorb ne peut pas récupérer les données d'un utilisateur ayant perdu sa phrase de récupération.</p>
            <p>Un seul compte par personne est autorisé. Toute création de compte frauduleuse entraînera la résiliation immédiate.</p></>
          )},
          { title: "Article 4 — Tarifs et paiement", content: (
            <><p>Les tarifs en vigueur sont :</p>
            <ul>
              <li>Abonnement mensuel : 9,90€ TTC/mois</li>
              <li>Abonnement annuel : 99€ TTC/an (2 mois offerts)</li>
              <li>Recharge à la carte : de 2€ à 500€</li>
            </ul>
            <p>Tarification au message hors abonnement : bref 0,02€ · standard 0,10€ · long 0,20€ · fichier 1,00€ (max 25 MB).</p>
            <p>Les paiements sont traités par Stripe Ireland Limited. Alcorb ne stocke aucune donnée bancaire. L'abonnement est renouvelé automatiquement sauf résiliation avant la date d'échéance.</p>
            <p>Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne s'applique pas aux services numériques dont l'exécution a commencé avec l'accord de l'utilisateur.</p></>
          )},
          { title: "Article 5 — Protection des données personnelles", content: (
            <><p>Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi n°78-17 du 6 janvier 1978, l'utilisateur dispose des droits suivants :</p>
            <ul>
              <li>Droit d'accès à ses données personnelles</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement ("droit à l'oubli")</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p>Ces droits s'exercent par email à contact@orbal.app. Alcorb s'engage à répondre dans un délai de 30 jours.</p>
            <p>Les données stockées sur nos serveurs en Union Européenne sont chiffrées et ne peuvent être lues par aucun employé d'Alcorb. Les métadonnées de connexion sont conservées pour une durée maximale de 12 mois, conformément à la loi.</p></>
          )},
          { title: "Article 6 — Propriété intellectuelle", content: (
            <><p>La marque Orbal, le logo (corbeau stylisé), l'interface et le code propriétaire d'Orbal sont la propriété exclusive d'Alcorb. Toute reproduction, représentation ou utilisation sans autorisation préalable est interdite.</p>
            <p>Orbal Protocol v3 est développé par Alcorb. Les composants open-source utilisés sont soumis à leurs licences respectives.</p></>
          )},
          { title: "Article 7 — Responsabilités et limitations", content: (
            <><p>Alcorb met tout en œuvre pour assurer la disponibilité du service (objectif 99,5% de disponibilité mensuelle), mais ne peut garantir une disponibilité sans interruption.</p>
            <p>L'utilisateur est seul responsable du contenu de ses messages. Orbal ne peut techniquement pas modérer les messages (chiffrement E2EE). Il appartient à chaque utilisateur de respecter les lois en vigueur.</p>
            <p>Alcorb ne pourra être tenu responsable des dommages indirects résultant de l'utilisation ou de l'impossibilité d'utilisation du service.</p>
            <p>En cas de saisie légale, Alcorb ne peut fournir que les métadonnées de connexion conservées légalement. Le contenu des messages est techniquement inaccessible, conformément à l'arrêt CEDH Podchasov c. Russie (17 janvier 2024).</p></>
          )},
          { title: "Article 8 — Résiliation", content: (
            <><p>L'utilisateur peut résilier son abonnement à tout moment depuis les paramètres de son compte. La résiliation prend effet à la fin de la période d'abonnement en cours. Aucun remboursement au prorata n'est effectué.</p>
            <p>Alcorb se réserve le droit de suspendre ou résilier un compte en cas de violation des présentes CGU, après mise en demeure restée sans effet pendant 48 heures.</p>
            <p>En cas de fermeture du service Orbal, les utilisateurs seront informés 90 jours à l'avance. Leurs données locales leur appartiennent et resteront accessibles sur leurs appareils.</p>
            <p>Tout litige relatif aux présentes CGU est soumis au droit français. Le tribunal compétent est celui du ressort du domicile du défendeur, sauf disposition légale contraire.</p></>
          )},
        ].map(({ title, content }) => (
          <Accordion key={title} title={title}>{content}</Accordion>
        ))}
      </div>

      <div className="divider" />

      {/* ── MENTIONS LÉGALES ── */}
      <div className="legal-section" id="mentions-legales">
        <h2 className="serif">Mentions légales</h2>
        <p style={{color:"var(--off)",fontSize:".85rem",marginBottom:"2rem"}}>Conformément à la loi n°2004-575 du 21 juin 2004 (LCEN)</p>

        <div className="article">
          <h3>Éditeur du service</h3>
          <p>Raison sociale : Alcorb<br />
          Forme juridique : Auto-entrepreneur<br />
          Fondateur : Alexis Bertrand (EL) — Auto-entrepreneur<br />
          SIRET : 103 664 496 00017<br />
          Domiciliation : HelloDom, Paris 15e arrondissement<br />
          Email : contact@orbal.app</p>
        </div>

        <div className="article">
          <h3>Hébergeur</h3>
          <p>Hetzner Online GmbH<br />
          Industriestr. 25<br />
          91710 Gunzenhausen, Allemagne<br />
          <a href="https://www.hetzner.com" style={{color:"var(--purple-light)"}}>www.hetzner.com</a></p>
        </div>

        <div className="article">
          <h3>Traitement des paiements</h3>
          <p>Stripe Ireland Limited<br />
          1 Grand Canal Street Lower, Dublin 2, Irlande<br />
          Alcorb ne stocke aucune donnée bancaire.</p>
        </div>

        <div className="article">
          <h3>Propriété intellectuelle</h3>
          <p>La marque Orbal, le logo corbeau et l'ensemble des contenus du service sont la propriété exclusive d'Alcorb. Toute reproduction sans autorisation préalable est interdite et constitue une contrefaçon au sens des articles L335-2 et suivants du Code de la propriété intellectuelle.</p>
        </div>

        <div className="article">
          <h3>Responsabilité</h3>
          <p>Alcorb ne peut être tenu responsable des dommages résultant de l'utilisation d'Internet, notamment toute interruption de service, intrusion extérieure ou présence de virus informatiques.</p>
        </div>
      </div>

      <div className="divider" />

      {/* ── CONFIDENTIALITÉ ── */}
      <div className="legal-section" id="confidentialite">
        <h2 className="serif">Politique de confidentialité</h2>
        <p style={{color:"var(--off)",fontSize:".85rem",marginBottom:"2rem"}}>Conformément au RGPD (Règlement UE 2016/679) et à la loi n°78-17 du 6 janvier 1978</p>

        <div className="article">
          <h3>Responsable du traitement</h3>
          <p>Alcorb, représenté par Alexis Bertrand (EL) — Auto-entrepreneur, contact@orbal.app</p>
        </div>

        <div className="article">
          <h3>Données collectées</h3>
          <ul>
            <li><strong>Compte :</strong> email ou pseudonyme, mot de passe haché (jamais en clair)</li>
            <li><strong>Paiement :</strong> traité exclusivement par Stripe — Alcorb ne voit que la confirmation</li>
            <li><strong>Connexion :</strong> adresse IP horodatée, conservée 12 mois maximum</li>
            <li><strong>Messages :</strong> jamais accessibles — chiffrés E2EE, clés sur vos appareils uniquement</li>
          </ul>
        </div>

        <div className="article">
          <h3>Base légale du traitement</h3>
          <ul>
            <li>Exécution du contrat (art. 6.1.b RGPD) pour la gestion du compte et des paiements</li>
            <li>Obligation légale (art. 6.1.c RGPD) pour la conservation des métadonnées de connexion</li>
          </ul>
        </div>

        <div className="article">
          <h3>Vos droits</h3>
          <p>Vous disposez d'un droit d'accès, de rectification, d'effacement, de portabilité et d'opposition. Exercez-les à : contact@orbal.app. Vous pouvez également adresser une réclamation à la CNIL (www.cnil.fr).</p>
        </div>

        <div className="article">
          <h3>Durée de conservation</h3>
          <ul>
            <li>Données de compte : durée de vie du compte + 3 ans</li>
            <li>Métadonnées de connexion : 12 mois</li>
            <li>Données de paiement : 5 ans (obligation comptable)</li>
            <li>Contenu des messages : jamais stocké sur nos serveurs au-delà de la livraison</li>
          </ul>
        </div>

        <div className="article">
          <h3>Transferts hors UE</h3>
          <p>Aucun transfert de données personnelles hors de l'Union européenne. Nos serveurs sont situés en Union Européenne. Les paiements sont traités en Irlande (Stripe).</p>
        </div>
      </div>

      <div className="divider" />

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div style={{display:"flex",alignItems:"center",gap:".6rem"}}>
                <RavenIcon size={24} />
                <span className="serif" style={{fontSize:"1.3rem",fontWeight:600}}>Orbal</span>
                <span style={{fontSize:".7rem",color:"var(--off)",marginLeft:".3rem"}}>par Alcorb</span>
              </div>
              <p>La messagerie chiffrée qui remet vos données entre vos mains. Infrastructure européenne. Aucun compromis.</p>
            </div>
            <div className="footer-col">
              <h4>Produit</h4>
              <a href="#fonctionnalites">Fonctionnalités</a>
              <a href="#tarifs">Tarifs</a>
              <a href="#securite">Sécurité</a>
              <a href="#eclaireurs">Éclaireurs</a>
            </div>
            <div className="footer-col">
              <h4>Légal</h4>
              <a href="#cgu">CGU</a>
              <a href="#mentions-legales">Mentions légales</a>
              <a href="#confidentialite">Confidentialité</a>
            </div>
            <div className="footer-col">
              <h4>Alcorb</h4>
              <a href="https://alcorb.app">alcorb.app</a>
              <a href="mailto:contact@orbal.app">contact@orbal.app</a>
              <a href="#securite">Warrant Canary</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Alcorb · Orbal est une marque d'Alcorb · Tous droits réservés</p>
            <p>Hébergé par <span>Hetzner Online GmbH</span> · Allemagne · RGPD conforme</p>
            <p style={{color:"var(--purple-light)",fontSize:".75rem"}}>🐦‍⬛ Le corbeau voit tout. Ne trahit personne.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
