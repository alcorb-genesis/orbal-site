import PageRetour from "../components/PageRetour";

// Adresse de retour du parcours de paiement.
//
// ELLE N'AFFIRME NI PAIEMENT NI PARCOURS. Y arriver ne prouve rien : l'adresse
// peut etre ouverte directement, et la confirmation ne vient pas du navigateur
// mais du circuit d'Orbal. La page renvoie donc vers l'application, seule a
// pouvoir dire ou en est l'abonnement.

export default function Success() {
  return (
    <PageRetour
      titre="Retrouvez Orbal"
      sousTitre="Pour connaître l’état de votre abonnement, rouvrez l’application."
      indications={[
        "La validation du paiement peut prendre quelques instants.",
        "Si votre accès n’a pas changé, vérifiez son état dans Orbal avant de recommencer un paiement.",
      ]}
      signature="À bientôt dans Orbal."
    />
  );
}
