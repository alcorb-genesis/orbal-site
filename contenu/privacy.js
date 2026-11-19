// Politique de confidentialité courte (adresse historique /privacy.html). Le français est celui de l'ancienne
// page HTML statique, mot pour mot, y compris son orthographe sans accents. L'anglais en est la traduction.
// Section 11 (réclamations, 2 novembre 2026) : texte neuf, accentué, qui reprend mot pour mot la phrase de
// transparence validée par Alexis (contenu/reclamation.js).

const MAIL = <a href="mailto:alcorb.admin@proton.me">alcorb.admin@proton.me</a>;
const FORMULAIRE = { fr: <a href="/reclamation">alcorb.app/reclamation</a>, en: <a href="/en/reclamation">alcorb.app/en/reclamation</a> };

export const privacy = {
  fr: {
    titrePage: "Politique de confidentialite - Orbal par Alcorb",
    sub: "Alcorb - Orbal",
    titre: "Politique de confidentialite",
    maj: "Dernière mise à jour : 19 novembre 2026",
    note: "La mise à jour du 16 novembre précise le rôle d’Expo pour les mises à jour et les notifications (section 6). La conservation légale de la section 12 est en service depuis le 10 novembre. Le contenu de vos conversations reste chiffré sur vos appareils ; les durées des messages, les tarifs et les abonnements ne changent pas.",
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
          <li>Informations techniques de connexion et de transmission : adresses IP, ports, dates, comptes concernés et identifiants techniques d’appareil disponibles. Leur conservation légale est distincte des journaux ordinaires du serveur ; voir la section 12.</li>
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
        <p>Certains prestataires interviennent en dehors de cette infrastructure, notamment Stripe pour les paiements et Expo pour les notifications et les mises à jour. Ils traitent les donnees necessaires a leur fonction selon leurs propres conditions.</p>
        <p>Pour vous apporter les mises à jour et leurs correctifs, Orbal utilise aussi Expo. Ce service reçoit un identifiant aléatoire propre à l’installation, des informations de version et, lorsqu’un lancement échoue, des informations techniques sur cet échec. Comme toute requête réseau, ces échanges rendent aussi votre adresse IP visible au service. Ces données servent à distribuer les mises à jour et à en mesurer le bon fonctionnement. Orbal n’ajoute ni votre pseudo ni le texte de vos conversations aux paramètres de mise à jour. Les notifications utilisent un jeton technique et un avis générique. Vous pouvez refuser les notifications dans les réglages du téléphone ; ce choix ne désactive pas les vérifications de mise à jour.</p>
        <p>Pour en savoir plus : <a href="https://expo.dev/privacy">politique de confidentialité d’Expo</a> et <a href="https://docs.expo.dev/eas-update/store-privacy-declarations/">données techniques des mises à jour Expo</a>.</p>
      </>],
      ["7. Duree de conservation", <>
        <ul>
          <li>Messages remis : retires du relais des la livraison</li>
          <li>Messages non delivres : conserves chiffres au maximum 7 jours puis retires du relais</li>
          <li>Données de compte : utilisées pendant la vie du compte ; les archives légales après sa clôture sont décrites en section 12.</li>
          <li>Réclamations déposées sans courriel : voir la section 11</li>
          <li>Sauvegardes du relais et du registre légal : copies chiffrées avec une cible de conservation de sept jours. Les copies peuvent contenir des données retirées du service jusqu’à leur propre purge. Diagnostics techniques : cible de sept jours ; authentification administrative : six mois. La cadence de nettoyage et les incidents éventuels peuvent introduire un décalage ; aucune disparition physique immédiate de toutes les copies n’est promise. Les sauvegardes du service de réclamations sont distinctes (section 11).</li>
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
        <p>Pour une réclamation sur Orbal (paiement, compte, accès…), vous pouvez aussi utiliser le formulaire sans courriel : {FORMULAIRE.fr} (section 11).</p>
      </>],
      ["11. Réclamations sans courriel", <>
        <p>Vous pouvez déposer et suivre une réclamation sur {FORMULAIRE.fr}, sans compte Orbal, y compris si vous n’avez plus accès au vôtre. Pas d’identité civile ni de courriel exigés pour utiliser Orbal ou ouvrir une réclamation. Des vérifications proportionnées peuvent être nécessaires avant d’agir sur un compte ou un paiement. Le contenu de votre réclamation est lisible par Alcorb pour vous répondre ; il est distinct de vos conversations privées dans Orbal.</p>
        <p>Ce qu’une réclamation contient : le motif, votre description, la solution souhaitée et, seulement si vous les indiquez, un pseudo et une référence de paiement ; puis les messages échangés et leurs dates. Le service garde un numéro de dossier et l’empreinte d’un code secret, jamais le code lui-même. Ni courriel, ni nom, ni téléphone ne sont demandés. N’y écrivez jamais de numéro de carte, de mot de passe, de code d’ouverture, de phrase de récupération ni le contenu de vos conversations.</p>
        <p>Le code donne accès à ce dossier seulement (le lire, y écrire, le rouvrir) : il ne donne accès ni à un compte Orbal, ni à un paiement, ni à un droit à remboursement. Nous ne pouvons pas le retrouver ; s’il est perdu, vous pouvez ouvrir un nouveau dossier.</p>
        <p>Les réclamations sont enregistrées sur le serveur du relais Orbal (Hetzner, Allemagne), dans une base distincte de celle de la messagerie. Les demandes ordinaires ne sont pas inscrites dans un journal d’accès ; l’adresse IP sert seulement, en mémoire et sous forme d’empreinte, à limiter les abus pendant une heure environ, et n’est pas enregistrée avec le dossier. Comme ailleurs, les erreurs techniques peuvent comporter cette adresse.</p>
        <p>Conservation : une réclamation ordinaire est effacée entièrement 12 mois après sa clôture. Pour une réclamation qui touche un paiement, un abonnement ou un remboursement, son texte est effacé au même moment ; Alcorb garde seulement, à accès restreint et pendant 5 ans après la clôture, une courte synthèse factuelle (dates, objet, période payée, décision, montant et référence d’un remboursement effectué), pour pouvoir prouver ce qui a été décidé et ne pas oublier un remboursement déjà fait. En cas de litige ou d’obligation légale, l’effacement est suspendu le temps nécessaire, pour un motif noté. Les pièces comptables (paiements, factures) ne sont pas dans les réclamations : elles suivent leur propre circuit, conservé 10 ans selon les obligations comptables. Les copies de sauvegarde du serveur peuvent contenir ces données un peu au-delà.</p>
        <p>Une synthèse n’est rattachée à un compte ou à un abonnement que par Alcorb, après une vérification faite par les moyens habituels : un pseudo écrit dans le formulaire ne suffit pas. Ces synthèses ne sont consultées que pour un motif précis, noté ; elles ne servent jamais à refuser automatiquement une demande, ni à tenir une liste noire, et rien n’est montré d’une réclamation à quelqu’un d’autre.</p>
        <p>Ce parcours auprès d’Alcorb est distinct de la médiation de la consommation. Vous pouvez consulter les <a href="/reclamation#mediation">coordonnées de CM2C et les modalités de saisine</a>. Il ne réduit aucun de vos droits, notamment auprès de la CNIL (section 10).</p>
      </>],
      ["12. Le secret de vos échanges et les traces techniques", <>
        <p>Vos paroles restent les vôtres. Le contenu des conversations est chiffré sur vos appareils. Pour ses obligations légales, Alcorb conserve séparément certaines traces techniques : les identifiants des comptes qui échangent, les dates et les caractéristiques des transmissions, ainsi que les adresses IP, ports et identifiants techniques d’appareil disponibles lors des connexions. Ces traces peuvent révéler qu’un échange a eu lieu ; elles ne donnent pas à Alcorb la clé pour lire vos messages.</p>
        <p>Les données de source de connexion sont conservées un an. Les données de trafic couvertes par une injonction légale sont conservées un an à compter du fait observé ; la poursuite de leur collecte dépend du texte applicable. Les informations nécessaires au compte et les références de paiement détenues pour ce service sont conservées pendant le service, puis un an après sa clôture. Les pièces comptables suivent leur durée propre. Si une conservation ciblée est valablement imposée, les seules données concernées restent préservées pendant la durée de la mesure.</p>
        <p>L’inscription reste fondée sur un pseudo et un mot de passe, sans identité civile, courriel ni numéro de téléphone demandés. Orbal ne recueille pas votre position GPS pour ces parcours. Les paiements et les démarches administratives peuvent faire intervenir des informations distinctes pour leur propre finalité.</p>
        <p>Ces archives sont réservées aux personnes habilitées chargées des obligations d’Alcorb. Elles peuvent être transmises à une autorité légalement compétente après vérification de sa demande. Elles ne servent ni à la publicité ni à la prospection. Leur conservation ne prolonge pas celle des messages ou des fichiers. Pour exercer vos droits, contactez {MAIL} ; une obligation légale ou la confidentialité d’une procédure peuvent limiter certains droits.</p>
      </>],
    ],
    pied: "2026 Alcorb - ",
    site: "https://alcorb.app",
  },

  en: {
    titrePage: "Privacy policy - Orbal by Alcorb",
    sub: "Alcorb - Orbal",
    titre: "Privacy policy",
    maj: "Last updated: 19 November 2026",
    note: "The 16 November update clarifies Expo’s role in updates and notifications (section 6). Legal retention under section 12 has been in operation since 10 November. Your conversation content remains encrypted on your devices; message lifetimes, prices and subscriptions do not change. This English text is a translation of the French privacy policy.",
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
          <li>Technical connection and transmission information: IP addresses, ports, dates, accounts involved and available technical device identifiers. Legal retention of these records is separate from ordinary server logs; see section 12.</li>
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
        <p>Some providers operate outside this infrastructure, in particular Stripe for payments and Expo for notifications and updates. They process the data needed for their function under their own terms.</p>
        <p>Orbal also uses Expo to bring you updates and fixes. This service receives a random identifier for the installation, version information and, if a launch fails, technical information about the failure. As with any network request, these exchanges also make your IP address visible to the service. These details help deliver updates and measure whether they work. Orbal does not add your username or conversation text to update parameters. Notifications use a technical token and a generic notice. You can decline notifications in your phone’s settings; this does not turn off update checks.</p>
        <p>Find out more: <a href="https://expo.dev/privacy">Expo’s privacy policy</a> and <a href="https://docs.expo.dev/eas-update/store-privacy-declarations/">technical data used by Expo updates</a>.</p>
      </>],
      ["7. Retention periods", <>
        <ul>
          <li>Delivered messages: removed from the relay upon delivery</li>
          <li>Undelivered messages: kept encrypted for 7 days at most, then removed from the relay</li>
          <li>Account data: used while the account is active; legal archives after closure are described in section 12.</li>
          <li>Complaints filed without email: see section 11</li>
          <li>Relay and legal-register backups: encrypted copies with a seven-day retention target. Copies may contain data removed from the live service until the copies themselves are purged. Technical diagnostics: seven-day target; administrative authentication: six months. Cleanup intervals and incidents may cause delays; immediate physical erasure of every copy is not promised. Complaint-service backups are separate (section 11).</li>
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
        <p>For a complaint about Orbal (payment, account, access…), you can also use the form that needs no email address: {FORMULAIRE.en} (section 11).</p>
      </>],
      ["11. Complaints without email", <>
        <p>You can file and follow a complaint at {FORMULAIRE.en}, without an Orbal account, including if you no longer have access to yours. No civil identity and no email address are required to use Orbal or to open a complaint. Proportionate checks may be needed before we act on an account or a payment. The content of your complaint can be read by Alcorb so that we can answer you; it is separate from your private conversations in Orbal.</p>
        <p>What a complaint contains: the reason, your description, the solution you would like and, only if you give them, a pseudonym and a payment reference; then the messages exchanged and their dates. The service keeps a case number and a hash of a secret code, never the code itself. No email address, name or phone number is requested. Never write a card number, a password, an unlock code, a recovery phrase or the content of your conversations in it.</p>
        <p>The code gives access to this case only (reading it, writing in it, reopening it): it gives no access to an Orbal account, to a payment or to any right to a refund. We cannot retrieve it; if it is lost, you can open a new case.</p>
        <p>Complaints are stored on the Orbal relay server (Hetzner, Germany), in a database separate from the messaging one. Ordinary requests are not recorded in an access log; the IP address is used only in memory, as a hash, to limit abuse for about one hour, and is not stored with the case. As elsewhere, technical errors may include this address.</p>
        <p>Retention: an ordinary complaint is deleted entirely 12 months after it is closed. For a complaint about a payment, a subscription or a refund, its text is deleted at the same time; Alcorb keeps only, with restricted access and for 5 years after closing, a short factual summary (dates, subject, period paid, decision, amount and reference of a refund actually made), so that what was decided can be proven and a refund already made is not forgotten. In case of a dispute or a legal obligation, deletion is suspended for as long as needed, for a recorded reason. Accounting records (payments, invoices) are not part of complaints: they follow their own process, kept for 10 years under accounting obligations. The server’s backup copies may contain this data for a little longer.</p>
        <p>A summary is linked to an account or a subscription only by Alcorb, after a check made through the usual means: a pseudonym written in the form is not enough. These summaries are consulted only for a specific, recorded reason; they are never used to refuse a request automatically or to keep a blacklist, and nothing from one complaint is shown to anyone else.</p>
        <p>This process with Alcorb is separate from consumer mediation. See <a href="/en/reclamation#mediation">CM2C’s contact details and how to apply</a>. It does not reduce any of your rights, in particular with the CNIL (section 10).</p>
      </>],
      ["12. The privacy of your conversations and technical records", <>
        <p>Your words remain yours. Conversation content is encrypted on your devices. To meet its legal obligations, Alcorb separately retains certain technical records: the identifiers of the accounts involved, dates and transmission characteristics, and the IP addresses, ports and technical device identifiers available at connection time. These records can show that an exchange took place; they do not give Alcorb the key to read your messages.</p>
        <p>Connection-source records are retained for one year. Traffic records covered by a legal retention order are retained for one year from the recorded event; continued collection depends on the applicable legal instrument. Information needed for the account and payment references held for that service are retained during the service and for one year after closure. Accounting records follow their own retention period. If a valid targeted preservation requirement applies, only the relevant records are preserved for the duration of that measure.</p>
        <p>Signing up still requires a username and a password, without requesting a civil identity, email address or telephone number. Orbal does not collect your GPS location for these functions. Payments and administrative procedures may involve separate information for their own purposes.</p>
        <p>Access to these archives is restricted to authorised people responsible for Alcorb’s legal obligations. Records may be disclosed to a legally competent authority after its request has been checked. They are not used for advertising or prospecting. Retaining them does not extend the lifetime of messages or files. To exercise your rights, contact {MAIL}; a legal obligation or the confidentiality of proceedings may limit certain rights.</p>
      </>],
    ],
    pied: "2026 Alcorb - ",
    site: "https://alcorb.app/en",
  },
};
