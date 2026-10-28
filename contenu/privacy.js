// Politique de confidentialité courte (adresse historique /privacy.html). Le français est celui de l'ancienne
// page HTML statique, mot pour mot, y compris son orthographe sans accents. L'anglais en est la traduction.

const MAIL = <a href="mailto:alcorb.admin@proton.me">alcorb.admin@proton.me</a>;

export const privacy = {
  fr: {
    titrePage: "Politique de confidentialite - Orbal par Alcorb",
    sub: "Alcorb - Orbal",
    titre: "Politique de confidentialite",
    maj: "Derniere mise a jour : 28 octobre 2026",
    note: "Cette mise a jour decrit plus precisement la protection de vos messages et la recuperation de votre compte : retrouver votre compte ne garantit pas de retrouver les messages qui attendaient votre ancien telephone. Rien ne change pour les tarifs, les abonnements ni vos droits.",
    sections: [
      ["1. Responsable du traitement", <>
        <p>Alexis Bertrand - Entrepreneur Individuel (Alcorb) - SIRET 103 664 496 00017<br />200 rue Croix Nivert, 75015 Paris (HelloDom SAS)<br />Contact : {MAIL}</p>
      </>],
      ["2. Principe fondamental", <>
        <p>Orbal est concu sur un principe : vos messages vous appartiennent. Nous ne lisons pas vos conversations et ne vendons pas vos donnees.</p>
      </>],
      ["3. Donnees collectees", <>
        <ul>
          <li>Compte pseudonyme : aucune identite civile demandee a l inscription</li>
          <li>Donnees de compte : un identifiant, un pseudonyme et une empreinte du mot de passe</li>
          <li>Cles cryptographiques publiques (les cles privees restent sur votre appareil et ne sont pas transmises a nos serveurs)</li>
          <li>Contacts et blocages que vous etablissez dans Orbal, conserves sur nos serveurs pour le fonctionnement du service</li>
          <li>Donnees de paiement traitees exclusivement par Stripe ; la reference de votre abonnement et les droits qu il ouvre sont rattaches a votre compte, ce qui peut permettre de le rapprocher de l identite du payeur</li>
          <li>Adresse IP de connexion : recue par le serveur comme pour tout service en ligne. Depuis le 14 octobre 2026, les requetes ordinaires adressees au relais ne sont plus inscrites dans un journal d acces ; les erreurs techniques, ainsi que des journaux anterieurs a cette date, peuvent comporter cette adresse</li>
        </ul>
      </>],
      ["4. Ce que nous ne collectons pas", <>
        <ul>
          <li>Le contenu de vos messages en clair : il est chiffre sur votre appareil avant l envoi, et nos serveurs ne transmettent que ce contenu chiffre</li>
          <li>Le carnet d adresses de votre telephone</li>
          <li>Votre localisation</li>
          <li>Tout identifiant publicitaire</li>
        </ul>
      </>],
      ["5. Chiffrement E2EE", <>
        <p>Le contenu des messages est chiffre sur votre appareil avant l envoi ; le serveur transmet ce contenu chiffre et, dans le fonctionnement prevu, ne dispose pas des cles permettant de le dechiffrer. Ce chiffrement porte sur ce que vous ecrivez : les informations necessaires a l acheminement (notamment le pseudonyme destinataire) restent visibles du serveur.</p>
        <p>Vos douze mots, votre fiche de secours et son mot de passe restent entre vos mains : nous ne pouvons ni ouvrir cette fiche ni retrouver ce mot de passe, et la fiche garde votre phrase, pas vos conversations. Quelqu un qui obtiendrait votre phrase pourrait entrer dans votre compte : gardez-la secrete.</p>
        <p>Certaines cles de vos conversations ne quittent pas votre telephone, et une sauvegarde restauree sur un autre appareil ne les rouvre pas. Retrouver votre compte ne garantit donc pas de retrouver les messages qui attendaient votre ancien telephone. Garder l application a jour vous fait profiter de sa protection la plus recente.</p>
      </>],
      ["6. Infrastructure", <>
        <p>Serveurs du relais Orbal heberges en Union Europeenne, en Allemagne (Hetzner).</p>
        <p>Certains prestataires interviennent en dehors de cette infrastructure, notamment Stripe pour les paiements et Expo pour les notifications. Ils traitent les donnees necessaires a leur fonction selon leurs propres conditions.</p>
      </>],
      ["7. Duree de conservation", <>
        <ul>
          <li>Messages remis : retires du relais des la livraison</li>
          <li>Messages non delivres : conserves chiffres au maximum 7 jours puis retires du relais</li>
          <li>Donnees de compte : conservees jusqu a la suppression du compte</li>
          <li>Copies de sauvegarde et journaux techniques : ils peuvent contenir certaines de ces donnees (messages en attente chiffres, donnees de compte, adresses IP) au-dela des durees ci-dessus</li>
        </ul>
      </>],
      ["8. Vos droits RGPD", <>
        <p>Acces, rectification, effacement, portabilite, opposition.<br />Contact : {MAIL}</p>
      </>],
      ["9. Cookies", <>
        <p>Aucun cookie publicitaire ni traceur. Alcorb ne diffuse pas de publicite.</p>
      </>],
      ["10. Contact et reclamations", <>
        <p>Pour toute question : {MAIL}<br />En cas de reclamation non resolue : <a href="https://www.cnil.fr">CNIL - cnil.fr</a></p>
      </>],
    ],
    pied: "2026 Alcorb - ",
    site: "https://alcorb.app",
  },

  en: {
    titrePage: "Privacy policy - Orbal by Alcorb",
    sub: "Alcorb - Orbal",
    titre: "Privacy policy",
    maj: "Last updated: 28 October 2026",
    note: "This update describes more precisely how your messages are protected and how your account can be recovered: recovering your account does not guarantee recovering the messages that were waiting for your old phone. Nothing changes for prices, subscriptions or your rights. This English text is a translation of the French privacy policy.",
    sections: [
      ["1. Data controller", <>
        <p>Alexis Bertrand - Entrepreneur Individuel (sole trader, Alcorb) - SIRET 103 664 496 00017<br />200 rue Croix Nivert, 75015 Paris (HelloDom SAS)<br />Contact: {MAIL}</p>
      </>],
      ["2. Founding principle", <>
        <p>Orbal is built on one principle: your messages belong to you. We do not read your conversations and we do not sell your data.</p>
      </>],
      ["3. Data collected", <>
        <ul>
          <li>Pseudonymous account: no civil identity is requested at sign-up</li>
          <li>Account data: an identifier, a pseudonym and a password hash</li>
          <li>Public cryptographic keys (private keys stay on your device and are not sent to our servers)</li>
          <li>Contacts and blocks you set up in Orbal, kept on our servers for the service to work</li>
          <li>Payment data processed exclusively by Stripe; your subscription reference and the access it grants are attached to your account, which may make it possible to link it to the payer’s identity</li>
          <li>Connection IP address: received by the server, as with any online service. Since 14 October 2026, ordinary requests sent to the relay are no longer recorded in an access log; technical errors, as well as logs from before that date, may include this address</li>
        </ul>
      </>],
      ["4. What we do not collect", <>
        <ul>
          <li>The plain-text content of your messages: it is encrypted on your device before it is sent, and our servers transmit only this encrypted content</li>
          <li>Your phone’s address book</li>
          <li>Your location</li>
          <li>Any advertising identifier</li>
        </ul>
      </>],
      ["5. End-to-end encryption (E2EE)", <>
        <p>Message content is encrypted on your device before it is sent; the server transmits this encrypted content and, in its intended operation, does not hold the keys needed to decrypt it. This encryption covers what you write: the information needed for delivery (in particular the recipient’s pseudonym) remains visible to the server.</p>
        <p>Your twelve words, your recovery sheet and its password stay in your hands: we can neither open this sheet nor retrieve that password, and the sheet keeps your phrase, not your conversations. Someone who obtained your phrase could get into your account: keep it secret.</p>
        <p>Some keys of your conversations never leave your phone, and a backup restored on another device does not reopen them. Recovering your account therefore does not guarantee recovering the messages that were waiting for your old phone. Keeping the application up to date gives you its most recent protection.</p>
      </>],
      ["6. Infrastructure", <>
        <p>Orbal relay servers hosted in the European Union, in Germany (Hetzner).</p>
        <p>Some providers operate outside this infrastructure, in particular Stripe for payments and Expo for notifications. They process the data needed for their function under their own terms.</p>
      </>],
      ["7. Retention periods", <>
        <ul>
          <li>Delivered messages: removed from the relay upon delivery</li>
          <li>Undelivered messages: kept encrypted for 7 days at most, then removed from the relay</li>
          <li>Account data: kept until the account is deleted</li>
          <li>Backup copies and technical logs: they may contain some of this data (encrypted pending messages, account data, IP addresses) beyond the periods above</li>
        </ul>
      </>],
      ["8. Your GDPR rights", <>
        <p>Access, rectification, erasure, portability, objection.<br />Contact: {MAIL}</p>
      </>],
      ["9. Cookies", <>
        <p>No advertising cookie and no tracker. Alcorb does not show advertising.</p>
      </>],
      ["10. Contact and complaints", <>
        <p>For any question: {MAIL}<br />If a complaint is not resolved: <a href="https://www.cnil.fr">CNIL - cnil.fr</a></p>
      </>],
    ],
    pied: "2026 Alcorb - ",
    site: "https://alcorb.app/en",
  },
};
