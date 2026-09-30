import PageRetour from "../components/PageRetour";

// Adresse de retour quand le parcours de paiement n'est pas mene a son terme.
//
// ELLE N'AFFIRME RIEN NON PLUS, ni dans un sens ni dans l'autre : ni qu'un
// paiement a echoue, ni qu'aucun debit n'a eu lieu. Elle ne voit ni la banque
// ni le circuit. Elle renvoie vers l'application.

export default function Cancel() {
  return (
    <PageRetour
      titre="De retour vers Orbal"
      sousTitre="Vous pouvez rouvrir l’application pour consulter votre abonnement ou reprendre votre souscription."
      indications={[
        "Vérifiez votre accès dans Orbal avant de recommencer un paiement.",
      ]}
      signature="À bientôt dans Orbal."
    />
  );
}
