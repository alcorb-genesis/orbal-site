// Textes des deux pages de retour de paiement. Le français est celui déjà publié, mot pour mot.
// Aucune des deux langues n'annonce de statut : la page renvoie vers l'application.

export const retour = {
  fr: {
    suite: "La suite",
    retourSite: "Retour au site",
    success: {
      titre: "Retrouvez Orbal",
      sousTitre: "Pour connaître l’état de votre abonnement, rouvrez l’application.",
      indications: [
        "La validation du paiement peut prendre quelques instants.",
        "Si votre accès n’a pas changé, vérifiez son état dans Orbal avant de recommencer un paiement.",
      ],
      signature: "À bientôt dans Orbal.",
    },
    cancel: {
      titre: "De retour vers Orbal",
      sousTitre: "Vous pouvez rouvrir l’application pour consulter votre abonnement ou reprendre votre souscription.",
      indications: [
        "Vérifiez votre accès dans Orbal avant de recommencer un paiement.",
      ],
      signature: "À bientôt dans Orbal.",
    },
  },
  en: {
    suite: "What comes next",
    retourSite: "Back to the site",
    success: {
      titre: "Return to Orbal",
      sousTitre: "To see the status of your subscription, reopen the app.",
      indications: [
        "Confirming the payment may take a few moments.",
        "If your access has not changed, check its status in Orbal before starting a new payment.",
      ],
      signature: "See you soon in Orbal.",
    },
    cancel: {
      titre: "On the way back to Orbal",
      sousTitre: "You can reopen the app to check your subscription or pick up where you left off.",
      indications: [
        "Check your access in Orbal before starting a new payment.",
      ],
      signature: "See you soon in Orbal.",
    },
  },
};
