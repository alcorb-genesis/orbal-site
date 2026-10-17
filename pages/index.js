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
          Une messagerie où les messages s'effacent après lecture. Leur contenu est chiffré
          sur votre appareil, et rien de ce que vous confiez n'est vendu.
        </p>
      </div>

      <div className="divider" />

      {/* CE QUE NOUS VOYONS */}
      <section className="ombres">
        <div className="label">Ce que nous voyons</div>
        <p className="ombres-txt">
          Pour acheminer un message, Orbal doit savoir vers quel pseudonyme l'envoyer.<br />
          C'est vrai de toute messagerie.<br />
          Le message et son adressage sont retirés du relais à la remise, ou après sept jours
          si personne n'est venu le chercher.<br />
          <span className="ombres-fort">Aucune identité civile n'est demandée à l'inscription.</span><br />
          Ni numéro, ni email, ni nom. Un abonnement payé via Stripe peut toutefois permettre
          un rapprochement avec l'identité du payeur.
        </p>
        <p className="ombres-chute serif">Nous acheminons des messages chiffrés entre pseudonymes.</p>
      </section>

      <div className="divider" />

      {/* CE QU'EST ORBAL */}
      <section>
        <div className="label">Ce qu'est Orbal</div>
        <h2 className="title serif">Un endroit,<br /><em>pas un outil</em></h2>
        <p className="lead">
          Orbal ne cherche pas à retenir votre attention. Il vous permet de dire ce que vous
          avez à dire, puis s'efface. Ce que vous écrivez disparaît après lecture — et
          son contenu, chiffré sur votre appareil avant l'envoi, ne transite par nos serveurs que sous cette forme.
        </p>
        <div className="grid">
          <div className="card">
            <h3>Éphémère par nature</h3>
            <p>Les messages ne s'effacent pas par option : c'est leur condition. Un message lu disparaît. Un vocal écouté reste trente minutes — le temps de le réécouter si la vie vous a interrompu — puis s'efface. Vous pouvez l'éteindre avant terme d'un appui long, sans confirmation.</p>
          </div>
          <div className="card">
            <h3>Chiffré de bout en bout</h3>
            <p>Orbal Protocol v3. Le contenu de vos messages est chiffré sur votre appareil avant l'envoi, avec des clés dérivées de vos douze mots de récupération ; nos serveurs ne relaient que ce contenu chiffré. Gardez ces mots pour vous seul.</p>
          </div>
          <div className="card">
            <h3>Sans identité</h3>
            <p>Un pseudonyme, un mot de passe. Ni numéro de téléphone, ni adresse email, ni carnet de contacts aspiré.</p>
          </div>
          <div className="card">
            <h3>Contenu chiffré</h3>
            <p>Nous ne détenons pas les clés de vos messages : leur contenu nous parvient chiffré, et nous ne pouvons pas le remettre en clair.</p>
          </div>
          <div className="card">
            <h3>Rien à revendre</h3>
            <p>Aucune publicité, aucun traceur, aucun profil marchand. Ce sont les abonnements qui font vivre Orbal — pas la revente de ce que vous confiez.</p>
          </div>
          <div className="card">
            <h3>Hébergé en Europe</h3>
            <p>Nos serveurs sont en Union européenne. Le contenu des messages y transite chiffré, et est retiré du relais une fois remis — après sept jours au plus si personne ne vient le chercher.</p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* LE MODELE */}
      <section>
        <div className="label">Le modèle</div>
        <h2 className="title serif">Écrire est libre.<br /><em>Toujours.</em></h2>
        <p className="lead">
          Tous vos messages écrits sont gratuits, pour tout le monde, pour toujours — dans les seules limites techniques qui protègent le service contre les abus.
          L'abonnement ouvre les vocaux, les photos, les vidéos et les documents — et c'est lui
          qui permet à Orbal de ne rien vendre de ce que vous confiez.
        </p>
        <div className="prix">
          <div className="offre libre">
            <div className="nom">Gratuit</div>
            <div className="montant serif">0€</div>
            <div className="quoi">Tous vos messages écrits</div>
          </div>
          <div className="offre">
            <div className="nom">Journée</div>
            <div className="montant serif">1€</div>
            <div className="quoi">Tout pendant 24 heures, dans les limites techniques anti-abus</div>
          </div>
          <div className="offre">
            <div className="nom">Semaine</div>
            <div className="montant serif">3€</div>
            <div className="quoi">Tout pendant 7 jours, dans les limites techniques anti-abus</div>
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
            Nous ne vous demanderons jamais votre adresse email. Ce serait commencer par
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
        <p className="maj">Version 1.2 — Droit français applicable</p>

        <Accordion title="Article 1 — Objet et champ d'application">
          <p>Les présentes Conditions Générales d'Utilisation régissent l'utilisation du service de messagerie chiffrée Orbal, édité par Alexis Bertrand, Entrepreneur Individuel exerçant sous l'enseigne Alcorb, SIRET 103 664 496 00017, domicilié 200 rue Croix Nivert, 75015 Paris.</p>
          <p>En accédant au service, l'utilisateur reconnaît avoir pris connaissance des présentes conditions et les accepter. Elles peuvent évoluer ; l'utilisateur sera informé de tout changement substantiel.</p>
        </Accordion>

        <Accordion title="Article 2 — Description du service">
          <p>Orbal est un service de messagerie chiffrée de bout en bout utilisant Orbal Protocol v3. Le service permet :</p>
          <ul>
            <li>L'envoi et la réception de messages texte chiffrés et éphémères</li>
            <li>L'envoi de fichiers, photos et messages vocaux jusqu'à 150 Mo. Les vidéos jusqu'à 100 Mo</li>
            <li>La gestion d'un compte sans numéro de téléphone ni adresse email</li>
          </ul>
          <p>Le contenu des messages est chiffré sur les appareils des utilisateurs avant l'envoi, avec des clés dérivées de la phrase de récupération propre à chaque compte. Les serveurs d'Alcorb transmettent ce contenu chiffré ; dans le fonctionnement prévu du service, ni les équipes ni les serveurs d'Alcorb ne disposent des clés permettant de le déchiffrer.</p>
          <p>L'ensemble des messages écrits est accessible gratuitement à tout utilisateur, de manière permanente, sous réserve des limites techniques destinées à prévenir les abus.</p>
        </Accordion>

        <Accordion title="Article 3 — Inscription et compte">
          <p>L'inscription requiert un pseudonyme et un mot de passe. Aucun numéro de téléphone ni adresse email n'est demandé. L'utilisateur est responsable de la confidentialité de ses identifiants.</p>
          <p>L'utilisateur doit conserver sa phrase de récupération de douze mots, qui seule permet de restaurer son compte en cas de perte d'appareil. Alcorb ne peut en aucun cas récupérer le compte d'un utilisateur ayant perdu cette phrase.</p>
          <p>Cette phrase permet de reconstituer les clés du compte : une personne qui l'obtient, et qui dispose d'une copie des contenus chiffrés, peut les déchiffrer. Elle doit rester secrète.</p>
        </Accordion>

        <Accordion title="Article 4 — Tarifs et paiement">
          <p>Les messages écrits sont gratuits, sous réserve des limites techniques destinées à prévenir les abus. Les fonctionnalités multimédias (vocaux, photos, vidéos, documents) requièrent un abonnement :</p>
          <ul>
            <li>Journée : 1€ TTC — accès complet pendant 24 heures</li>
            <li>Semaine : 3€ TTC — accès complet pendant 7 jours</li>
            <li>Mensuel : 9,90€ TTC par mois, renouvelé automatiquement</li>
            <li>Annuel : 99€ TTC par an, renouvelé automatiquement</li>
          </ul>
          <p>Les paiements sont traités par Stripe. Alcorb ne stocke aucune donnée bancaire et ne conserve aucun lien entre un paiement et le contenu des échanges. Les informations d'abonnement (référence de l'abonnement et droits ouverts) sont en revanche rattachées au compte de l'utilisateur.</p>
          <p>L'abonnement peut être résilié à tout moment ; l'accès reste ouvert jusqu'au terme de la période déjà payée. Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne s'applique pas aux services numériques dont l'exécution a commencé avec l'accord de l'utilisateur.</p>
        </Accordion>

        <Accordion title="Article 5 — Protection des données personnelles">
          <p>Conformément au Règlement (UE) 2016/679 et à la loi n°78-17 du 6 janvier 1978, l'utilisateur dispose des droits d'accès, de rectification, d'effacement, de portabilité et d'opposition.</p>
          <p>Ces droits s'exercent par courriel à alcorb.admin@proton.me. Alcorb s'engage à répondre dans un délai de trente jours.</p>
          <p>Orbal est conçu pour collecter le strict minimum : aucune adresse email, aucun numéro de téléphone, aucun accès au carnet d'adresses du téléphone. Le contenu des messages est chiffré sur les appareils avant l'envoi ; dans le fonctionnement prévu du service, Alcorb ne détient pas les clés permettant de le déchiffrer.</p>
          <p>Les données conservées pour le fonctionnement du compte comprennent notamment : un identifiant, un pseudonyme, une empreinte de mot de passe, la liste des contacts et des blocages établis dans Orbal, les informations d'abonnement nécessaires aux droits du compte, et les messages non encore remis, chiffrés, au maximum sept jours.</p>
          <p>Comme tout service en ligne, le serveur reçoit l'adresse IP des appareils qui s'y connectent. Depuis le 14 octobre 2026, les requêtes ordinaires adressées au relais ne sont plus inscrites dans un journal d'accès. Les erreurs techniques restent consignées et peuvent comporter une adresse IP ; des journaux antérieurs à cette date peuvent également subsister.</p>
        </Accordion>

        <Accordion title="Article 6 — Propriété intellectuelle">
          <p>La marque Orbal, le corbeau qui la représente, l'interface et le code d'Orbal sont la propriété exclusive d'Alcorb. Toute reproduction ou utilisation sans autorisation préalable est interdite.</p>
          <p>Orbal Protocol v3 est développé par Alcorb. Les composants libres utilisés restent soumis à leurs licences respectives.</p>
        </Accordion>

        <Accordion title="Article 7 — Responsabilités et limitations">
          <p>Alcorb met tout en œuvre pour assurer la disponibilité du service sans pouvoir en garantir la continuité absolue.</p>
          <p>L'utilisateur est seul responsable du contenu de ses messages. Alcorb ne détenant pas les clés permettant de lire le contenu des messages, aucune modération de ce contenu n'est possible ; il appartient à chacun de respecter les lois en vigueur.</p>
          <p>Alcorb ne saurait être tenu responsable des dommages indirects résultant de l'utilisation ou de l'impossibilité d'utilisation du service.</p>
          <p>En cas de réquisition judiciaire, Alcorb transmet ce dont il dispose à la date de la demande — les données de compte mentionnées à l'article 5 et, s'ils existent, les journaux techniques du serveur. Alcorb ne détient pas les clés permettant de déchiffrer le contenu des messages.</p>
        </Accordion>

        <Accordion title="Article 8 — Résiliation">
          <p>L'utilisateur peut résilier son abonnement à tout moment depuis les paramètres de son compte. La résiliation prend effet au terme de la période en cours, sans remboursement au prorata.</p>
          <p>Alcorb ne détenant pas les clés permettant de lire le contenu des échanges, aucune suspension ne peut être fondée sur ce contenu. Alcorb ne peut agir que sur ce qui lui est techniquement constatable : défaut de paiement, usage abusif de l'infrastructure compromettant le service pour les autres utilisateurs, ou usurpation d'un pseudonyme réservé.</p>
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
        <p className="maj">Ce que nous savons de vous — et ce que nous ne vous demandons pas</p>

        <Accordion title="Ce que nous ne collectons pas">
          <p>Orbal ne demande ni numéro de téléphone, ni adresse email, ni nom, ni date de naissance. Nous n'accédons pas au carnet d'adresses de votre téléphone. Nous ne suivons pas votre position. Nous n'utilisons aucun traceur publicitaire.</p>
          <p>Le contenu de vos messages est chiffré sur votre appareil avant l'envoi, avec des clés dérivées de la phrase de récupération de votre compte ; nos serveurs ne transmettent que ce contenu chiffré et n'en détiennent pas les clés. Ce chiffrement porte sur le contenu : les informations d'acheminement décrites ci-dessous restent visibles de nos serveurs. Cette phrase permet de reconstituer ces clés : une personne qui l'obtient, et qui dispose d'une copie de vos contenus chiffrés, peut les déchiffrer. Gardez-la secrète.</p>
        </Accordion>

        <Accordion title="Ce que nous conservons">
          <p>Notamment : un identifiant de compte, un pseudonyme choisi par vous, une empreinte de votre mot de passe, la liste de vos contacts et de vos blocages dans Orbal, et, si vous vous abonnez, la référence de votre abonnement et les droits qu'il ouvre. Les messages en attente de remise sont conservés chiffrés jusqu'à leur remise, et au maximum sept jours.</p>
          <p>Les accusés de lecture — qui ne contiennent aucun texte, seulement le signal qu'un message a été ouvert — attendent de la même manière et disparaissent dès qu'ils sont remis.</p>
          <p>Pour acheminer un message, Orbal doit savoir vers quel pseudonyme l'envoyer — c'est vrai de toute messagerie, sans exception. Le message et son adressage sont retirés du relais à sa remise ou à son expiration ; cela n'efface ni votre liste de contacts, ni les copies de sauvegarde et journaux techniques décrits ici.</p>
          <p>Comme tout service en ligne, notre serveur reçoit l'adresse IP de votre appareil. Depuis le 14 octobre 2026, les requêtes ordinaires adressées au relais ne sont plus inscrites dans un journal d'accès ; les erreurs techniques, ainsi que des journaux antérieurs à cette date, peuvent comporter cette adresse.</p>
          <p>Aucun numéro, aucune adresse email ni aucun nom n'est demandé à l'inscription, et Orbal n'accède pas au carnet d'adresses de votre téléphone. Un pseudonyme peut toutefois être rapproché d'une adresse IP dans ces journaux techniques et, si vous vous abonnez, de l'identité du payeur connue de Stripe.</p>
        </Accordion>

        <Accordion title="Paiements">
          <p>Les paiements sont traités par Stripe, qui applique ses propres obligations d'identification. Alcorb ne stocke aucune donnée bancaire et n'établit aucun lien entre un paiement et le contenu des échanges. La référence de votre abonnement et les droits qu'il ouvre sont en revanche rattachés à votre compte.</p>
        </Accordion>

        <Accordion title="Vos droits">
          <p>Vous disposez des droits d'accès, de rectification, d'effacement, de portabilité et d'opposition prévus par le RGPD. Ils s'exercent à l'adresse alcorb.admin@proton.me.</p>
          <p>La suppression de votre compte depuis les paramètres de l'application prend effet immédiatement sur le serveur en service. Des copies de sauvegarde et des journaux techniques antérieurs à la suppression peuvent encore en contenir des éléments.</p>
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
