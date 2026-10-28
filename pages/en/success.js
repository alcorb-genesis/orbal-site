import PageRetour from "../../components/PageRetour";

// Retour de paiement en anglais (/en/success). Même neutralité que la page française : rien n'est affirmé.
export default function Success() {
  return <PageRetour lang="en" page="success" />;
}
