import PageRetour from "../components/PageRetour";

// Adresse de retour du parcours de paiement.
//
// ELLE N'AFFIRME NI PAIEMENT NI PARCOURS. Y arriver ne prouve rien : l'adresse
// peut etre ouverte directement, et la confirmation ne vient pas du navigateur
// mais du circuit d'Orbal. La page renvoie donc vers l'application, seule a
// pouvoir dire ou en est l'abonnement.

// Textes (français et anglais) : contenu/retour.js. Version anglaise : pages/en/success.js.
export default function Success() {
  return <PageRetour lang="fr" page="success" />;
}
