import PageRetour from "../components/PageRetour";

// Adresse de retour quand le parcours de paiement n'est pas mene a son terme.
//
// ELLE N'AFFIRME RIEN NON PLUS, ni dans un sens ni dans l'autre : ni qu'un
// paiement a echoue, ni qu'aucun debit n'a eu lieu. Elle ne voit ni la banque
// ni le circuit. Elle renvoie vers l'application.

// Textes (français et anglais) : contenu/retour.js. Version anglaise : pages/en/cancel.js.
export default function Cancel() {
  return <PageRetour lang="fr" page="cancel" />;
}
