// Textes de la page Éclaireurs (adresse historique /eclaireurs.html). Le français est celui de l'ancienne page
// HTML statique, mot pour mot, sans accents comme elle. L'anglais garde le tutoiement et le mot « Éclaireur »,
// comme l'application ; les libellés d'écran cités (« Get started ») sont ceux de l'application anglaise.

export const eclaireurs = {
  fr: {
    titrePage: "Orbal - Acces Eclaireur",
    badge: "Acces Eclaireur - Beta",
    msg: <>Tu fais partie des premiers a recevoir cette invitation.<br /><br /><span style={{ color: "#ede8e3" }}>Orbal</span> est une messagerie chiffree de bout en bout — tes messages t'appartiennent. Vraiment.<br /><br />Renseigne tes informations pour recevoir ta marche a suivre personnalisee.</>,
    prenom: "Ton prenom",
    exemple: "Ex : Marie",
    telephone: "Ton telephone",
    obtenir: "Obtenir mes instructions",
    devise: "Vos messages. Votre souverainete.",
    site: "https://alcorb.app",
    manque: "Merci de remplir ton prenom et choisir ton telephone.",
    pour: "Instructions pour ",
    etapes: {
      android: ["Va dans Parametres > Securite > active Sources inconnues", "Telecharge Orbal.apk depuis le lien recu par Alexis", "Ouvre le fichier et appuie sur Installer", "Lance Orbal > Commencer > Eclaireur > cree ton compte"],
      ios: ["Telecharge TestFlight gratuitement sur App Store", "Ouvre le lien invitation TestFlight envoye par Alexis", "Installe Orbal depuis TestFlight", "Lance Orbal > Commencer > Eclaireur > cree ton compte"],
    },
  },
  en: {
    titrePage: "Orbal - Éclaireur access",
    badge: "Éclaireur access - Beta",
    msg: <>You are among the first to receive this invitation.<br /><br /><span style={{ color: "#ede8e3" }}>Orbal</span> is an end-to-end encrypted messenger — your messages belong to you. Truly.<br /><br />Fill in your details to receive your own step-by-step guide.</>,
    prenom: "Your first name",
    exemple: "e.g. Marie",
    telephone: "Your phone",
    obtenir: "Get my instructions",
    devise: "Your messages. Your sovereignty.",
    site: "https://alcorb.app/en",
    manque: "Please fill in your first name and choose your phone.",
    pour: "Instructions for ",
    etapes: {
      android: ["Go to Settings > Security > turn on Unknown sources", "Download Orbal.apk from the link Alexis sent you", "Open the file and tap Install", "Open Orbal > Get started > Éclaireur > create your account"],
      ios: ["Download TestFlight for free from the App Store", "Open the TestFlight invitation link sent by Alexis", "Install Orbal from TestFlight", "Open Orbal > Get started > Éclaireur > create your account"],
    },
  },
};
