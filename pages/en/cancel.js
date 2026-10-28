import PageRetour from "../../components/PageRetour";

// Retour de paiement en anglais (/en/cancel). Même neutralité que la page française : rien n'est affirmé.
export default function Cancel() {
  return <PageRetour lang="en" page="cancel" />;
}
