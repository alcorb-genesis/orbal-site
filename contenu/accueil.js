// Textes de la page d'accueil, français et anglais côte à côte. Le français est celui déjà publié, mot pour mot ;
// l'anglais en est la traduction. Montants, durées, coordonnées et références juridiques sont identiques.

export const accueil = {
  fr: {
    hero: {
      titre: <>Vos mots.<br /><em>Puis plus rien.</em></>,
      signature: "« La seule trace, c'est le souvenir. »",
      sous: "Une messagerie où les messages s'effacent après lecture. Leur contenu est chiffré sur votre appareil, et rien de ce que vous confiez n'est vendu.",
    },
    ombres: {
      label: "Ce que nous voyons",
      texte: <>Pour acheminer un message, Orbal doit savoir vers quel pseudonyme l'envoyer.<br />C'est vrai de toute messagerie.<br />Le message et son adressage sont retirés du relais à la remise, ou après sept jours si personne n'est venu le chercher.<br /><span className="ombres-fort">Aucune identité civile n'est demandée à l'inscription.</span><br />Ni numéro, ni email, ni nom. Un abonnement payé via Stripe peut toutefois permettre un rapprochement avec l'identité du payeur.</>,
      chute: "Nous acheminons des messages chiffrés entre pseudonymes.",
    },
    orbal: {
      label: "Ce qu'est Orbal",
      titre: <>Un endroit,<br /><em>pas un outil</em></>,
      lead: "Orbal ne cherche pas à retenir votre attention. Il vous permet de dire ce que vous avez à dire, puis s'efface. Ce que vous écrivez disparaît après lecture — et son contenu, chiffré sur votre appareil avant l'envoi, ne transite par nos serveurs que sous cette forme.",
      cartes: [
        ["Éphémère par nature", "Les messages ne s'effacent pas par option : c'est leur condition. Un message lu disparaît. Un vocal écouté reste trente minutes — le temps de le réécouter si la vie vous a interrompu — puis s'efface. Vous pouvez l'éteindre avant terme d'un appui long, sans confirmation."],
        ["Chiffré de bout en bout", "Ce que vous écrivez est chiffré sur votre appareil, avant même de partir. Nos serveurs n'en relaient que cette forme. Gardez vos douze mots pour vous seul."],
        ["Sans identité", "Un pseudonyme, un mot de passe. Ni numéro de téléphone, ni adresse email, ni carnet de contacts aspiré."],
        ["Contenu chiffré", "Nous ne détenons pas les clés de vos messages : leur contenu nous parvient chiffré, et nous ne pouvons pas le remettre en clair."],
        ["Rien à revendre", "Aucune publicité, aucun traceur, aucun profil marchand. Ce sont les abonnements qui font vivre Orbal — pas la revente de ce que vous confiez."],
        ["Hébergé en Europe", "Nos serveurs sont en Union européenne. Le contenu des messages y transite chiffré, et est retiré du relais une fois remis — après sept jours au plus si personne ne vient le chercher."],
      ],
    },
    modele: {
      label: "Le modèle",
      titre: <>Écrire est libre.<br /><em>Toujours.</em></>,
      lead: "Tous vos messages écrits sont gratuits, pour tout le monde, pour toujours — dans les seules limites techniques qui protègent le service contre les abus. L'abonnement ouvre les vocaux, les photos, les vidéos et les documents — et c'est lui qui permet à Orbal de ne rien vendre de ce que vous confiez.",
      offres: [
        ["offre libre", "Gratuit", "0€", "Tous vos messages écrits"],
        ["offre", "Journée", "1€", "Tout pendant 24 heures, dans les limites techniques anti-abus"],
        ["offre", "Semaine", "3€", "Tout pendant 7 jours, dans les limites techniques anti-abus"],
        ["offre phare", "Premium", "9,90€", "Par mois — ou 99€ l'année, deux mois offerts"],
      ],
    },
    attente: {
      label: "Bientôt",
      titre: <>Orbal <em>arrive</em></>,
      paragraphes: [
        "Nous ne vous demanderons jamais votre adresse email. Ce serait commencer par exactement ce que nous refusons de faire.",
        "La seule chose que nous vous conseillons, c'est d'en parler autour de vous. Constituez votre cercle — pour que le moment venu, votre parole vous soit pleinement rendue.",
      ],
      fin: "L'Orbalescence est imminente. À bientôt — Alcorb.",
    },
    cgu: {
      titre: "Conditions Générales d'Utilisation",
      maj: <>Version 1.3 du 28 octobre 2026 — Droit français applicable<br />Cette mise à jour décrit plus précisément la protection de vos messages et la récupération de votre compte : retrouver votre compte ne garantit pas de retrouver les messages qui attendaient votre ancien téléphone. Rien ne change pour les tarifs, les abonnements ni vos droits.</>,
      articles: [
        ["Article 1 — Objet et champ d'application", <>
          <p>Les présentes Conditions Générales d'Utilisation régissent l'utilisation du service de messagerie chiffrée Orbal, édité par Alexis Bertrand, Entrepreneur Individuel exerçant sous l'enseigne Alcorb, SIRET 103 664 496 00017, domicilié 200 rue Croix Nivert, 75015 Paris.</p>
          <p>En accédant au service, l'utilisateur reconnaît avoir pris connaissance des présentes conditions et les accepter. Elles peuvent évoluer ; l'utilisateur sera informé de tout changement substantiel.</p>
        </>],
        ["Article 2 — Description du service", <>
          <p>Orbal est un service de messagerie chiffrée de bout en bout utilisant Orbal Protocol v3. Le service permet :</p>
          <ul>
            <li>L'envoi et la réception de messages texte chiffrés et éphémères</li>
            <li>L'envoi de fichiers, photos et messages vocaux jusqu'à 150 Mo. Les vidéos jusqu'à 100 Mo</li>
            <li>La gestion d'un compte sans numéro de téléphone ni adresse email</li>
          </ul>
          <p>Le contenu des messages est chiffré sur l'appareil de l'utilisateur avant l'envoi. Les serveurs d'Alcorb ne transmettent que ce contenu chiffré ; dans le fonctionnement prévu du service, ni les équipes ni les serveurs d'Alcorb ne disposent des clés permettant de le déchiffrer. Les informations nécessaires à l'acheminement, comme le pseudonyme du destinataire, restent visibles des serveurs. La protection évolue avec l'application : il est recommandé de la garder à jour.</p>
          <p>L'ensemble des messages écrits est accessible gratuitement à tout utilisateur, de manière permanente, sous réserve des limites techniques destinées à prévenir les abus.</p>
        </>],
        ["Article 3 — Inscription et compte", <>
          <p>L'inscription requiert un pseudonyme et un mot de passe. Aucun numéro de téléphone ni adresse email n'est demandé. L'utilisateur est responsable de la confidentialité de ses identifiants.</p>
          <p>L'utilisateur doit conserver sa phrase de récupération de douze mots, par écrit ou dans une fiche de secours chiffrée par un mot de passe qu'il choisit. Elle seule permet de reprendre son compte sur un nouvel appareil. La fiche de secours garde cette phrase ; elle ne sauvegarde pas les conversations. Alcorb ne peut ni récupérer un compte dont la phrase est perdue, ni ouvrir une fiche de secours, ni en retrouver le mot de passe.</p>
          <p>Retrouver son compte ne garantit pas de retrouver les messages qui attendaient l'ancien appareil : certains restent liés à celui-ci et ne peuvent pas être récupérés.</p>
          <p>Une personne qui obtient cette phrase peut se connecter à la place de l'utilisateur et lire certains contenus chiffrés dont elle aurait obtenu une copie. La phrase doit donc rester secrète, comme la fiche de secours et son mot de passe.</p>
        </>],
        ["Article 4 — Tarifs et paiement", <>
          <p>Les messages écrits sont gratuits, sous réserve des limites techniques destinées à prévenir les abus. Les fonctionnalités multimédias (vocaux, photos, vidéos, documents) requièrent un abonnement :</p>
          <ul>
            <li>Journée : 1€ TTC — accès complet pendant 24 heures</li>
            <li>Semaine : 3€ TTC — accès complet pendant 7 jours</li>
            <li>Mensuel : 9,90€ TTC par mois, renouvelé automatiquement</li>
            <li>Annuel : 99€ TTC par an, renouvelé automatiquement</li>
          </ul>
          <p>Les paiements sont traités par Stripe. Alcorb ne stocke aucune donnée bancaire et ne conserve aucun lien entre un paiement et le contenu des échanges. Les informations d'abonnement (référence de l'abonnement et droits ouverts) sont en revanche rattachées au compte de l'utilisateur.</p>
          <p>L'abonnement peut être résilié à tout moment ; l'accès reste ouvert jusqu'au terme de la période déjà payée. Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne s'applique pas aux services numériques dont l'exécution a commencé avec l'accord de l'utilisateur.</p>
        </>],
        ["Article 5 — Protection des données personnelles", <>
          <p>Conformément au Règlement (UE) 2016/679 et à la loi n°78-17 du 6 janvier 1978, l'utilisateur dispose des droits d'accès, de rectification, d'effacement, de portabilité et d'opposition.</p>
          <p>Ces droits s'exercent par courriel à alcorb.admin@proton.me. Alcorb s'engage à répondre dans un délai de trente jours.</p>
          <p>Orbal est conçu pour collecter le strict minimum : aucune adresse email, aucun numéro de téléphone, aucun accès au carnet d'adresses du téléphone. Le contenu des messages est chiffré sur les appareils avant l'envoi ; dans le fonctionnement prévu du service, Alcorb ne détient pas les clés permettant de le déchiffrer.</p>
          <p>Les données conservées pour le fonctionnement du compte comprennent notamment : un identifiant, un pseudonyme, une empreinte de mot de passe, la liste des contacts et des blocages établis dans Orbal, les informations d'abonnement nécessaires aux droits du compte, et les messages non encore remis, chiffrés, au maximum sept jours.</p>
          <p>Comme tout service en ligne, le serveur reçoit l'adresse IP des appareils qui s'y connectent. Depuis le 14 octobre 2026, les requêtes ordinaires adressées au relais ne sont plus inscrites dans un journal d'accès. Les erreurs techniques restent consignées et peuvent comporter une adresse IP ; des journaux antérieurs à cette date peuvent également subsister.</p>
        </>],
        ["Article 6 — Propriété intellectuelle", <>
          <p>La marque Orbal, le corbeau qui la représente, l'interface et le code d'Orbal sont la propriété exclusive d'Alcorb. Toute reproduction ou utilisation sans autorisation préalable est interdite.</p>
          <p>Orbal Protocol v3 est développé par Alcorb. Les composants libres utilisés restent soumis à leurs licences respectives.</p>
        </>],
        ["Article 7 — Responsabilités et limitations", <>
          <p>Alcorb met tout en œuvre pour assurer la disponibilité du service sans pouvoir en garantir la continuité absolue.</p>
          <p>L'utilisateur est seul responsable du contenu de ses messages. Alcorb ne détenant pas les clés permettant de lire le contenu des messages, aucune modération de ce contenu n'est possible ; il appartient à chacun de respecter les lois en vigueur.</p>
          <p>Alcorb ne saurait être tenu responsable des dommages indirects résultant de l'utilisation ou de l'impossibilité d'utilisation du service.</p>
          <p>En cas de réquisition judiciaire, Alcorb transmet ce dont il dispose à la date de la demande — les données de compte mentionnées à l'article 5 et, s'ils existent, les journaux techniques du serveur. Alcorb ne détient pas les clés permettant de déchiffrer le contenu des messages.</p>
        </>],
        ["Article 8 — Résiliation", <>
          <p>L'utilisateur peut résilier son abonnement à tout moment depuis les paramètres de son compte. La résiliation prend effet au terme de la période en cours, sans remboursement au prorata.</p>
          <p>Alcorb ne détenant pas les clés permettant de lire le contenu des échanges, aucune suspension ne peut être fondée sur ce contenu. Alcorb ne peut agir que sur ce qui lui est techniquement constatable : défaut de paiement, usage abusif de l'infrastructure compromettant le service pour les autres utilisateurs, ou usurpation d'un pseudonyme réservé.</p>
          <p>En cas de fermeture du service, les utilisateurs seront informés quatre-vingt-dix jours à l'avance.</p>
          <p>Tout litige relatif aux présentes conditions est soumis au droit français.</p>
        </>],
      ],
    },
    mentions: {
      titre: "Mentions légales",
      maj: "Éditeur, hébergement et propriété",
      blocs: [
        ["Éditeur du service", <>
          <p>Alexis Bertrand, Entrepreneur Individuel exerçant sous l'enseigne Alcorb.</p>
          <p>SIRET : 103 664 496 00017</p>
          <p>Siège : 200 rue Croix Nivert, 75015 Paris, France</p>
          <p>Contact : alcorb.admin@proton.me</p>
          <p>Directeur de la publication : Alexis Bertrand</p>
        </>],
        ["Hébergement", <>
          <p>Les serveurs d'Orbal sont hébergés par Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Allemagne — au sein de l'Union européenne.</p>
          <p>Le site est hébergé par Vercel Inc.</p>
        </>],
        ["Propriété intellectuelle", <>
          <p>La marque Orbal, le logo corbeau et l'ensemble des contenus du service sont la propriété exclusive d'Alcorb. Toute reproduction sans autorisation constitue une contrefaçon au sens des articles L335-2 et suivants du Code de la propriété intellectuelle.</p>
        </>],
      ],
    },
    confidentialite: {
      titre: "Politique de confidentialité",
      maj: "Ce que nous savons de vous — et ce que nous ne vous demandons pas",
      blocs: [
        ["Ce que nous ne collectons pas", <>
          <p>Orbal ne demande ni numéro de téléphone, ni adresse email, ni nom, ni date de naissance. Nous n'accédons pas au carnet d'adresses de votre téléphone. Nous ne suivons pas votre position. Nous n'utilisons aucun traceur publicitaire.</p>
          <p>Le contenu de vos messages est chiffré sur votre appareil avant l'envoi ; nos serveurs ne transmettent que ce contenu chiffré et n'en détiennent pas les clés. Ce chiffrement porte sur ce que vous écrivez : les informations d'acheminement décrites ci-dessous restent visibles de nos serveurs.</p>
        </>],
        ["Ce que nous conservons", <>
          <p>Notamment : un identifiant de compte, un pseudonyme choisi par vous, une empreinte de votre mot de passe, la liste de vos contacts et de vos blocages dans Orbal, et, si vous vous abonnez, la référence de votre abonnement et les droits qu'il ouvre. Les messages en attente de remise sont conservés chiffrés jusqu'à leur remise, et au maximum sept jours.</p>
          <p>Les accusés de lecture — qui ne contiennent aucun texte, seulement le signal qu'un message a été ouvert — attendent de la même manière et disparaissent dès qu'ils sont remis.</p>
          <p>Pour acheminer un message, Orbal doit savoir vers quel pseudonyme l'envoyer — c'est vrai de toute messagerie, sans exception. Le message et son adressage sont retirés du relais à sa remise ou à son expiration ; cela n'efface ni votre liste de contacts, ni les copies de sauvegarde et journaux techniques décrits ici.</p>
          <p>Comme tout service en ligne, notre serveur reçoit l'adresse IP de votre appareil. Depuis le 14 octobre 2026, les requêtes ordinaires adressées au relais ne sont plus inscrites dans un journal d'accès ; les erreurs techniques, ainsi que des journaux antérieurs à cette date, peuvent comporter cette adresse.</p>
          <p>Aucun numéro, aucune adresse email ni aucun nom n'est demandé à l'inscription, et Orbal n'accède pas au carnet d'adresses de votre téléphone. Un pseudonyme peut toutefois être rapproché d'une adresse IP dans ces journaux techniques et, si vous vous abonnez, de l'identité du payeur connue de Stripe.</p>
          <p>Ce que nous ne pouvons pas garder pour vous : vos douze mots, votre fiche de secours et son mot de passe. Nous ne pouvons ni ouvrir cette fiche ni retrouver ce mot de passe ; la fiche garde votre phrase, pas vos conversations. Quelqu'un qui obtiendrait votre phrase pourrait entrer dans votre compte : gardez-la secrète.</p>
          <p>Certaines clés de vos conversations ne quittent pas votre téléphone, et une sauvegarde restaurée sur un autre appareil ne les rouvre pas. Retrouver votre compte ne garantit donc pas de retrouver les messages qui attendaient votre ancien téléphone. Garder l'application à jour vous fait profiter de sa protection la plus récente.</p>
        </>],
        ["Paiements", <>
          <p>Les paiements sont traités par Stripe, qui applique ses propres obligations d'identification. Alcorb ne stocke aucune donnée bancaire et n'établit aucun lien entre un paiement et le contenu des échanges. La référence de votre abonnement et les droits qu'il ouvre sont en revanche rattachés à votre compte.</p>
        </>],
        ["Vos droits", <>
          <p>Vous disposez des droits d'accès, de rectification, d'effacement, de portabilité et d'opposition prévus par le RGPD. Ils s'exercent à l'adresse alcorb.admin@proton.me.</p>
          <p>La suppression de votre compte depuis les paramètres de l'application prend effet immédiatement sur le serveur en service. Des copies de sauvegarde et des journaux techniques antérieurs à la suppression peuvent encore en contenir des éléments.</p>
        </>],
      ],
    },
    pied: {
      par: "par Alcorb — Alexis Bertrand, Entrepreneur Individuel",
      cgu: "CGU", mentions: "Mentions légales", confidentialite: "Confidentialité",
    },
  },

  en: {
    hero: {
      titre: <>Your words.<br /><em>Then nothing.</em></>,
      signature: "“The only trace is memory.”",
      sous: "A messenger where messages fade once they are read. Their content is encrypted on your device, and nothing you entrust to us is sold.",
    },
    ombres: {
      label: "What we see",
      texte: <>To carry a message, Orbal has to know which pseudonym to send it to.<br />That is true of every messenger.<br />The message and its addressing leave the relay once delivered, or after seven days if no one has come for it.<br /><span className="ombres-fort">You do not need to give your legal identity to sign up.</span><br />No number, no email, no name. A subscription paid through Stripe may, however, make it possible to link an account to the payer’s identity.</>,
      chute: "We carry encrypted messages between pseudonyms.",
    },
    orbal: {
      label: "What Orbal is",
      titre: <>A place,<br /><em>not a tool</em></>,
      lead: "Orbal does not try to hold your attention. It lets you say what you have to say, then steps aside. What you write disappears once read — and its content, encrypted on your device before it is sent, passes through our servers only in that form.",
      cartes: [
        ["Ephemeral by nature", "Disappearing is not a setting. It is their nature. A message that has been read disappears. A voice message, once played, stays for thirty minutes — time to listen again if life interrupted you — then fades. You can put it out sooner with a long press, without confirmation."],
        ["End-to-end encrypted", "What you write is encrypted on your device before it even leaves. Our servers relay it only in that form. Keep your twelve words to yourself."],
        ["Without identity", "A pseudonym, a password. No phone number, no email address, no address book taken from your phone."],
        ["Encrypted content", "We do not hold the keys to your messages: their content reaches us encrypted, and we cannot turn it back into plain text."],
        ["Nothing to resell", "No advertising, no trackers, no commercial profile. Subscriptions keep Orbal alive — not the resale of what you entrust to us."],
        ["Hosted in Europe", "Our servers are in the European Union. Message content passes through them encrypted, and leaves the relay once delivered — after seven days at most if no one comes for it."],
      ],
    },
    modele: {
      label: "The model",
      titre: <>Writing is free.<br /><em>Always.</em></>,
      lead: "All your written messages are free, for everyone, forever — within the technical limits that protect the service from abuse. A subscription unlocks voice messages, photos, videos and documents — and it is what allows Orbal to sell nothing of what you entrust to us.",
      offres: [
        ["offre libre", "Free", "€0", "All your written messages"],
        ["offre", "Day", "€1", "Everything for 24 hours, within anti-abuse technical limits"],
        ["offre", "Week", "€3", "Everything for 7 days, within anti-abuse technical limits"],
        ["offre phare", "Premium", "€9.90", "Per month — or €99 a year, two months free"],
      ],
    },
    attente: {
      label: "Soon",
      titre: <>Orbal <em>is coming</em></>,
      paragraphes: [
        "We will never ask for your email address. That would mean beginning with exactly what we refuse to do.",
        "All we suggest is to spread the word. Gather your circle — so that, when the time comes, you can speak freely.",
      ],
      fin: "The Orbalescence is near. See you soon — Alcorb.",
    },
    cgu: {
      titre: "Terms of Use",
      maj: <>Version 1.3 of 28 October 2026 — Governed by French law<br />This update describes more precisely how your messages are protected and how your account can be recovered: recovering your account does not guarantee recovering the messages that were waiting for your old phone. Nothing changes for prices, subscriptions or your rights.<br />This English text is a translation of the French Terms of Use (Conditions Générales d’Utilisation).</>,
      articles: [
        ["Article 1 — Purpose and scope", <>
          <p>These Terms of Use govern the use of the encrypted messaging service Orbal, published by Alexis Bertrand, Entrepreneur Individuel (sole trader) trading under the name Alcorb, SIRET 103 664 496 00017, domiciled at 200 rue Croix Nivert, 75015 Paris.</p>
          <p>By accessing the service, the user acknowledges having read these terms and accepts them. They may change; the user will be informed of any substantial change.</p>
        </>],
        ["Article 2 — Description of the service", <>
          <p>Orbal is an end-to-end encrypted messaging service using Orbal Protocol v3. The service allows:</p>
          <ul>
            <li>Sending and receiving encrypted, ephemeral text messages</li>
            <li>Sending files, photos and voice messages up to 150 MB. Videos up to 100 MB</li>
            <li>Managing an account without a phone number or an email address</li>
          </ul>
          <p>Message content is encrypted on the user’s device before it is sent. Alcorb’s servers transmit only this encrypted content; in the intended operation of the service, neither Alcorb’s teams nor its servers hold the keys needed to decrypt it. The information needed for delivery, such as the recipient’s pseudonym, remains visible to the servers. Protection evolves with the application: keeping it up to date is recommended.</p>
          <p>All written messages are available free of charge to every user, permanently, subject to the technical limits intended to prevent abuse.</p>
        </>],
        ["Article 3 — Registration and account", <>
          <p>Registration requires a pseudonym and a password. No phone number or email address is requested. The user is responsible for keeping their credentials confidential.</p>
          <p>The user must keep their twelve-word recovery phrase, in writing or in a recovery sheet encrypted with a password of their choice. It alone makes it possible to recover the account on a new device. The recovery sheet keeps this phrase; it does not back up conversations. Alcorb can neither recover an account whose phrase has been lost, nor open a recovery sheet, nor retrieve its password.</p>
          <p>Recovering one’s account does not guarantee recovering the messages that were waiting for the old device: some remain tied to it and cannot be recovered.</p>
          <p>A person who obtains this phrase can sign in in the user’s place and read some encrypted content of which they may have obtained a copy. The phrase must therefore remain secret, as must the recovery sheet and its password.</p>
        </>],
        ["Article 4 — Prices and payment", <>
          <p>Written messages are free, subject to the technical limits intended to prevent abuse. Multimedia features (voice messages, photos, videos, documents) require a subscription:</p>
          <ul>
            <li>Day: €1 incl. VAT — full access for 24 hours</li>
            <li>Week: €3 incl. VAT — full access for 7 days</li>
            <li>Monthly: €9.90 incl. VAT per month, renewed automatically</li>
            <li>Annual: €99 incl. VAT per year, renewed automatically</li>
          </ul>
          <p>Payments are processed by Stripe. Alcorb stores no bank data and keeps no link between a payment and the content of exchanges. Subscription information (subscription reference and access granted) is, however, attached to the user’s account.</p>
          <p>The subscription can be cancelled at any time; access remains open until the end of the period already paid for. In accordance with Article L221-28 of the French Consumer Code, the right of withdrawal does not apply to digital services whose performance has begun with the user’s agreement.</p>
        </>],
        ["Article 5 — Protection of personal data", <>
          <p>In accordance with Regulation (EU) 2016/679 and French Law No. 78-17 of 6 January 1978, the user has the rights of access, rectification, erasure, portability and objection.</p>
          <p>These rights are exercised by email at alcorb.admin@proton.me. Alcorb undertakes to reply within thirty days.</p>
          <p>Orbal is designed to collect the strict minimum: no email address, no phone number, no access to the phone’s address book. Message content is encrypted on devices before it is sent; in the intended operation of the service, Alcorb does not hold the keys needed to decrypt it.</p>
          <p>The data kept for the account to work include in particular: an identifier, a pseudonym, a password hash, the list of contacts and blocks set up in Orbal, the subscription information needed for the account’s rights, and messages not yet delivered, encrypted, for seven days at most.</p>
          <p>Like any online service, the server receives the IP address of the devices that connect to it. Since 14 October 2026, ordinary requests sent to the relay are no longer recorded in an access log. Technical errors are still logged and may include an IP address; logs from before that date may also remain.</p>
        </>],
        ["Article 6 — Intellectual property", <>
          <p>The Orbal trademark, the raven that represents it, Orbal’s interface and code are the exclusive property of Alcorb. Any reproduction or use without prior authorisation is prohibited.</p>
          <p>Orbal Protocol v3 is developed by Alcorb. The open-source components used remain subject to their respective licences.</p>
        </>],
        ["Article 7 — Responsibilities and limitations", <>
          <p>Alcorb makes every effort to keep the service available, without being able to guarantee its absolute continuity.</p>
          <p>The user is solely responsible for the content of their messages. As Alcorb does not hold the keys needed to read message content, no moderation of that content is possible; it is up to everyone to comply with the laws in force.</p>
          <p>Alcorb cannot be held liable for indirect damage resulting from the use of, or the inability to use, the service.</p>
          <p>In the event of a judicial requisition, Alcorb hands over what it holds on the date of the request — the account data mentioned in Article 5 and, if they exist, the server’s technical logs. Alcorb does not hold the keys needed to decrypt message content.</p>
        </>],
        ["Article 8 — Termination", <>
          <p>The user can cancel their subscription at any time from their account settings. Cancellation takes effect at the end of the current period, without pro rata refund.</p>
          <p>As Alcorb does not hold the keys needed to read the content of exchanges, no suspension can be based on that content. Alcorb can act only on what it can technically observe: non-payment, abusive use of the infrastructure that compromises the service for other users, or impersonation of a reserved pseudonym.</p>
          <p>If the service closes, users will be informed ninety days in advance.</p>
          <p>Any dispute relating to these terms is governed by French law.</p>
        </>],
      ],
    },
    mentions: {
      titre: "Legal notice",
      maj: "Publisher, hosting and ownership",
      blocs: [
        ["Publisher of the service", <>
          <p>Alexis Bertrand, Entrepreneur Individuel (sole trader) trading under the name Alcorb.</p>
          <p>SIRET: 103 664 496 00017</p>
          <p>Registered office: 200 rue Croix Nivert, 75015 Paris, France</p>
          <p>Contact: alcorb.admin@proton.me</p>
          <p>Publication director: Alexis Bertrand</p>
        </>],
        ["Hosting", <>
          <p>Orbal’s servers are hosted by Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Germany — within the European Union.</p>
          <p>The website is hosted by Vercel Inc.</p>
        </>],
        ["Intellectual property", <>
          <p>The Orbal trademark, the raven logo and all the content of the service are the exclusive property of Alcorb. Any reproduction without authorisation constitutes infringement within the meaning of Articles L335-2 et seq. of the French Intellectual Property Code.</p>
        </>],
      ],
    },
    confidentialite: {
      titre: "Privacy policy",
      maj: <>What we know about you — and what we do not ask of you<br />This English text is a translation of the French privacy policy.</>,
      blocs: [
        ["What we do not collect", <>
          <p>Orbal asks for no phone number, no email address, no name and no date of birth. We do not access your phone’s address book. We do not follow your location. We use no advertising tracker.</p>
          <p>The content of your messages is encrypted on your device before it is sent; our servers transmit only this encrypted content and do not hold its keys. This encryption covers what you write: the delivery information described below remains visible to our servers.</p>
        </>],
        ["What we keep", <>
          <p>In particular: an account identifier, a pseudonym you choose, a hash of your password, the list of your contacts and blocks in Orbal, and, if you subscribe, your subscription reference and the access it grants. Messages awaiting delivery are kept encrypted until they are delivered, and for seven days at most.</p>
          <p>Read receipts — which contain no text, only the signal that a message has been opened — wait in the same way and disappear as soon as they are delivered.</p>
          <p>To carry a message, Orbal has to know which pseudonym to send it to — that is true of every messenger, without exception. The message and its addressing leave the relay when it is delivered or expires; this erases neither your contact list nor the backup copies and technical logs described here.</p>
          <p>Like any online service, our server receives your device’s IP address. Since 14 October 2026, ordinary requests sent to the relay are no longer recorded in an access log; technical errors, as well as logs from before that date, may include this address.</p>
          <p>No number, no email address and no name is requested at sign-up, and Orbal does not access your phone’s address book. A pseudonym may nevertheless be linked to an IP address in these technical logs and, if you subscribe, to the payer’s identity known to Stripe.</p>
          <p>What we cannot keep for you: your twelve words, your recovery sheet and its password. We can neither open this sheet nor retrieve that password; the sheet keeps your phrase, not your conversations. Someone who obtained your phrase could get into your account: keep it secret.</p>
          <p>Some keys of your conversations never leave your phone, and a backup restored on another device does not reopen them. Recovering your account therefore does not guarantee recovering the messages that were waiting for your old phone. Keeping the application up to date gives you its most recent protection.</p>
        </>],
        ["Payments", <>
          <p>Payments are processed by Stripe, which applies its own identification obligations. Alcorb stores no bank data and makes no link between a payment and the content of exchanges. Your subscription reference and the access it grants are, however, attached to your account.</p>
        </>],
        ["Your rights", <>
          <p>You have the rights of access, rectification, erasure, portability and objection provided by the GDPR. They are exercised at alcorb.admin@proton.me.</p>
          <p>Deleting your account from the application’s settings takes effect immediately on the server in service. Backup copies and technical logs from before the deletion may still contain some of its elements.</p>
        </>],
      ],
    },
    pied: {
      par: "by Alcorb — Alexis Bertrand, Entrepreneur Individuel (sole trader)",
      cgu: "Terms of Use", mentions: "Legal notice", confidentialite: "Privacy",
    },
  },
};
