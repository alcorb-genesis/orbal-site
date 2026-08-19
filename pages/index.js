import { useState } from "react";

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

export default function Accueil() {
  return (
    <>
      <style jsx global>{STYLES}</style>

      {/* HERO */}
      <div className="hero">
        <img className="hero-img" src="/corbeau-cercle.png" alt="Orbal" />
        <h1 className="hero-title serif">Vos mots.<br /><em>Puis plus rien.</em></h1>
        <div className="signature">« La seule trace, c'est le souvenir. »</div>
        <p className="hero-sub">
          Une messagerie où les messages s'effacent après lecture. Rien n'est gardé,
          rien n'est analysé, rien n'est vendu.
        </p>
      </div>

      <div className="divider" />

      {/* CE QU'EST ORBAL */}
      <section>
        <div className="label">Ce qu'est Orbal</div>
        <h2 className="title serif">Un endroit,<br /><em>pas un outil</em></h2>
        <p className="lead">
          Orbal ne cherche pas à retenir votre attention. Il vous permet de dire ce que vous
          avez à dire, puis s'efface. Ce que vous écrivez disparaît après lecture — et
          nos serveurs n'en gardent rien, parce qu'ils n'en ont jamais rien su.
        </p>
        <div className="grid">
          <div className="card">
            <h3>Éphémère par nature</h3>
            <p>Les messages ne s'effacent pas par option : c'est leur condition. Ce qui est lu disparaît.</p>
          </div>
          <div className="card">
            <h3>Chiffré de bout en bout</h3>
            <p>Orbal Protocol v3. Les clés ne quittent jamais votre appareil — même nous ne pouvons pas lire ce qui passe.</p>
          </div>
          <div className="card">
            <h3>Sans identité</h3>
            <p>Un pseudonyme, un mot de passe. Ni numéro de téléphone, ni adresse email, ni carnet de contacts aspiré.</p>
          </div>
          <div className="card">
            <h3>Rien à saisir</h3>
            <p>Nous ne pouvons pas remettre ce que nous n'avons pas. Le contenu de vos échanges nous est inaccessible.</p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* LE MODELE */}
      <section>
        <div className="label">Le modèle</div>
        <h2 className="title serif">Écrire est libre.<br /><em>Toujours.</em></h2>
        <p className="lead">
          Tous vos messages écrits sont gratuits et sans limite, pour tout le monde, pour toujours.
          L'abonnement ouvre les vocaux, les photos, les vidéos et les documents — et c'est lui
          qui permet à Orbal de ne rien vendre de ce que vous confiez.
        </p>
        <div className="prix">
          <div className="offre libre">
            <div className="nom">Gratuit</div>
            <div className="montant serif">0€</div>
            <div className="quoi">Tous vos messages écrits, sans limite</div>
          </div>
          <div className="offre">
            <div className="nom">Journée</div>
            <div className="montant serif">1€</div>
            <div className="quoi">Tout illimité pendant 24 heures</div>
          </div>
          <div className="offre">
            <div className="nom">Semaine</div>
            <div className="montant serif">3€</div>
            <div className="quoi">Tout illimité pendant 7 jours</div>
          </div>
          <div className="offre phare">
            <div className="nom">Premium</div>
            <div className="montant serif">9,90€</div>
            <div className="quoi">Par mois — ou 99€ l'année, deux mois offerts</div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ATTENTE */}
      <section>
        <div className="label">Bientôt</div>
        <h2 className="title serif">Orbal <em>arrive</em></h2>
        <div className="attente">
          <p>
            Nous ne vous demanderons jamais votre adresse. Ce serait commencer par
            exactement ce que nous refusons de faire.
          </p>
          <p>
            La seule chose que nous vous conseillons, c'est d'en parler autour de vous.
            Constituez votre cercle — pour que le moment venu, votre parole vous soit
            pleinement rendue.
          </p>
          <p className="fin">L'Orbalescence est imminente. À bientôt — Alcorb.</p>
        </div>
      </section>

      <div className="divider" />

      {/* CGU */}
      <div className="legal" id="cgu">
        <h2 className="serif">Conditions Générales d'Utilisation</h2>
        <p className="maj">Version 1.1 — Droit français applicable</p>

        <Accordion title="Article 1 — Objet et champ d'application">
          <p>Les présentes Conditions Générales d'Utilisation régissent l'utilisation du service de messagerie chiffrée Orbal, édité par Alexis Bertrand, Entrepreneur Individuel exerçant sous l'enseigne Alcorb, SIRET 103 664 496 00017, domicilié 200 rue Croix Nivert, 75015 Paris.</p>
          <p>En accédant au service, l'utilisateur reconnaît avoir pris connaissance des présentes conditions et les accepter. Elles peuvent évoluer ; l'utilisateur sera informé de tout changement substantiel.</p>
        </Accordion>

        <Accordion title="Article 2 — Description du service">
          <p>Orbal est un service de messagerie chiffrée de bout en bout utilisant Orbal Protocol v3. Le service permet :</p>
          <ul>
            <li>L'envoi et la réception de messages texte chiffrés et éphémères</li>
            <li>L'envoi de fichiers, photos, vidéos et messages vocaux jusqu'à 150 Mo</li>
            <li>La gestion d'un compte sans numéro de téléphone ni adresse email</li>
          </ul>
          <p>Les clés de déchiffrement ne quittant jamais les appareils des utilisateurs, ni les équipes ni les serveurs d'Alcorb ne peuvent accéder au contenu des messages.</p>
          <p>L'ensemble des messages écrits est accessible gratuitement et sans limite à tout utilisateur, de manière permanente et inconditionnelle.</p>
        </Accordion>

        <Accordion title="Article 3 — Inscription et compte">
          <p>L'inscription requiert un pseudonyme et un mot de passe. Aucun numéro de téléphone ni adresse email n'est demandé. L'utilisateur est responsable de la confidentialité de ses identifiants.</p>
          <p>L'utilisateur doit conserver sa phrase de récupération de douze mots, qui seule permet de restaurer son compte en cas de perte d'appareil. Alcorb ne peut en aucun cas récupérer le compte d'un utilisateur ayant perdu cette phrase.</p>
        </Accordion>

        <Accordion title="Article 4 — Tarifs et paiement">
          <p>Les messages écrits sont gratuits, sans limite et sans condition. Les fonctionnalités multimédias (vocaux, photos, vidéos, documents) requièrent un abonnement :</p>
          <ul>
            <li>Journée : 1€ TTC — accès complet pendant 24 heures</li>
            <li>Semaine : 3€ TTC — accès complet pendant 7 jours</li>
            <li>Mensuel : 9,90€ TTC par mois, renouvelé automatiquement</li>
            <li>Annuel : 99€ TTC par an, renouvelé automatiquement</li>
          </ul>
          <p>Les paiements sont traités par Stripe. Alcorb ne stocke aucune donnée bancaire et ne conserve aucun lien entre un paiement et le contenu des échanges.</p>
          <p>L'abonnement peut être résilié à tout moment ; l'accès reste ouvert jusqu'au terme de la période déjà payée. Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne s'applique pas aux services numériques dont l'exécution a commencé avec l'accord de l'utilisateur.</p>
        </Accordion>

        <Accordion title="Article 5 — Protection des données personnelles">
          <p>Conformément au Règlement (UE) 2016/679 et à la loi n°78-17 du 6 janvier 1978, l'utilisateur dispose des droits d'accès, de rectification, d'effacement, de portabilité et d'opposition.</p>
          <p>Ces droits s'exercent par courriel à alcorb.admin@proton.me. Alcorb s'engage à répondre dans un délai de trente jours.</p>
          <p>Orbal est conçu pour collecter le strict minimum : aucune adresse, aucun numéro, aucun carnet de contacts. Le contenu des messages est chiffré et techniquement inaccessible. Les métadonnées de connexion sont conservées pour la durée légale.</p>
        </Accordion>

        <Accordion title="Article 6 — Propriété intellectuelle">
          <p>La marque Orbal, le corbeau qui la représente, l'interface et le code d'Orbal sont la propriété exclusive d'Alcorb. Toute reproduction ou utilisation sans autorisation préalable est interdite.</p>
          <p>Orbal Protocol v3 est développé par Alcorb. Les composants libres utilisés restent soumis à leurs licences respectives.</p>
        </Accordion>

        <Accordion title="Article 7 — Responsabilités et limitations">
          <p>Alcorb met tout en œuvre pour assurer la disponibilité du service sans pouvoir en garantir la continuité absolue.</p>
          <p>L'utilisateur est seul responsable du contenu de ses messages. Le chiffrement de bout en bout rend toute modération techniquement impossible ; il appartient à chacun de respecter les lois en vigueur.</p>
          <p>Alcorb ne saurait être tenu responsable des dommages indirects résultant de l'utilisation ou de l'impossibilité d'utilisation du service.</p>
          <p>En cas de réquisition judiciaire, Alcorb ne peut transmettre que les métadonnées de connexion légalement conservées. Le contenu des messages demeure techniquement inaccessible.</p>
        </Accordion>

        <Accordion title="Article 8 — Résiliation">
          <p>L'utilisateur peut résilier son abonnement à tout moment depuis les paramètres de son compte. La résiliation prend effet au terme de la période en cours, sans remboursement au prorata.</p>
          <p>Alcorb se réserve le droit de suspendre un compte en cas de violation des présentes conditions.</p>
          <p>En cas de fermeture du service, les utilisateurs seront informés quatre-vingt-dix jours à l'avance.</p>
          <p>Tout litige relatif aux présentes conditions est soumis au droit français.</p>
        </Accordion>
      </div>

      <div className="divider" />

      {/* MENTIONS LEGALES */}
      <div className="legal" id="mentions-legales">
        <h2 className="serif">Mentions légales</h2>
        <p className="maj">Éditeur, hébergement et propriété</p>

        <Accordion title="Éditeur du service">
          <p>Alexis Bertrand, Entrepreneur Individuel exerçant sous l'enseigne Alcorb.</p>
          <p>SIRET : 103 664 496 00017</p>
          <p>Siège : 200 rue Croix Nivert, 75015 Paris, France</p>
          <p>Contact : alcorb.admin@proton.me</p>
          <p>Directeur de la publication : Alexis Bertrand</p>
        </Accordion>

        <Accordion title="Hébergement">
          <p>Les serveurs d'Orbal sont hébergés par Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Allemagne — au sein de l'Union européenne.</p>
          <p>Le site est hébergé par Vercel Inc.</p>
        </Accordion>

        <Accordion title="Propriété intellectuelle">
          <p>La marque Orbal, le logo corbeau et l'ensemble des contenus du service sont la propriété exclusive d'Alcorb. Toute reproduction sans autorisation constitue une contrefaçon au sens des articles L335-2 et suivants du Code de la propriété intellectuelle.</p>
        </Accordion>
      </div>

      <div className="divider" />

      {/* CONFIDENTIALITE */}
      <div className="legal" id="confidentialite">
        <h2 className="serif">Politique de confidentialité</h2>
        <p className="maj">Ce que nous savons de vous — et ce que nous ne saurons jamais</p>

        <Accordion title="Ce que nous ne collectons pas">
          <p>Orbal ne demande ni numéro de téléphone, ni adresse email, ni nom, ni date de naissance. Nous n'accédons pas à votre carnet de contacts. Nous ne suivons pas votre position. Nous n'utilisons aucun traceur publicitaire.</p>
          <p>Le contenu de vos messages nous est techniquement inaccessible : il est chiffré sur votre appareil et ne peut être déchiffré que sur celui de votre correspondant.</p>
        </Accordion>

        <Accordion title="Ce que nous conservons">
          <p>Un identifiant de compte, un pseudonyme choisi par vous, et une empreinte de votre mot de passe. Les messages en attente de remise sont conservés chiffrés jusqu'à leur lecture, et au maximum sept jours.</p>
          <p>Les métadonnées de connexion sont conservées pour la durée légale, conformément à la réglementation française.</p>
        </Accordion>

        <Accordion title="Paiements">
          <p>Les paiements sont traités par Stripe, qui applique ses propres obligations d'identification. Alcorb ne stocke aucune donnée bancaire et n'établit aucun lien entre un paiement et le contenu des échanges.</p>
        </Accordion>

        <Accordion title="Vos droits">
          <p>Vous disposez des droits d'accès, de rectification, d'effacement, de portabilité et d'opposition prévus par le RGPD. Ils s'exercent à l'adresse alcorb.admin@proton.me.</p>
          <p>La suppression de votre compte est immédiate et définitive depuis les paramètres de l'application.</p>
        </Accordion>
      </div>

      <footer>
        <div className="marque serif">Orbal</div>
        <div>par Alcorb — Alexis Bertrand, Entrepreneur Individuel</div>
        <div style={{ marginTop: ".6rem" }}>
          <a href="#cgu">CGU</a> · <a href="#mentions-legales">Mentions légales</a> · <a href="#confidentialite">Confidentialité</a>
        </div>
      </footer>
    </>
  );
}
