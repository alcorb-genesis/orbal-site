import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { homologues } from "../lib/langue";

// Choix « Français / English ». Deux liens ordinaires vers la même page dans l'autre langue : ils se suivent au
// clavier, se lisent aux lecteurs d'écran (lang, hreflang, aria-current) et fonctionnent sans JavaScript.
// Une fois la page chargée, la requête et le fragment de l'adresse (ex. ?ref=CODE d'une invitation) sont recopiés
// sur ces liens, et le restent quand le fragment change ensuite (lien #cgu du pied de page, retour arrière) :
// changer de langue ne fait rien perdre. Aucun drapeau, aucun cookie, aucune mémoire.
// Les pages de retour de paiement passent `garderRequete={false}` : elles ne lisent aucun paramètre d'URL.

const STYLE = `
  .langue { position: absolute; top: 1rem; right: 1.2rem; z-index: 5; font-size: .78rem; letter-spacing: .08em;
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; }
  .langue ul { list-style: none; display: flex; gap: .2rem; margin: 0; padding: 0; }
  .langue li + li::before { content: "/"; color: rgba(237,232,227,0.25); margin-right: .2rem; }
  .langue a { color: rgba(237,232,227,0.55); text-decoration: none; padding: .2rem .25rem; border-radius: 4px; }
  .langue a:hover { color: #E0B84C; }
  .langue a[aria-current="page"] { color: #E0B84C; }
  .langue a:focus-visible { outline: 2px solid #E0B84C; outline-offset: 2px; }
`;

export default function ChoixLangue({ lang, garderRequete = true }) {
  const { pathname } = useRouter();
  const h = homologues(pathname);
  const [suite, setSuite] = useState("");
  useEffect(() => {
    if (!garderRequete) return undefined;
    const suivre = () => setSuite(window.location.search + window.location.hash);
    suivre();
    window.addEventListener("hashchange", suivre);
    window.addEventListener("popstate", suivre);
    return () => {
      window.removeEventListener("hashchange", suivre);
      window.removeEventListener("popstate", suivre);
    };
  }, [garderRequete]);
  if (!h) return null;
  return (
    <nav className="langue" aria-label={lang === "en" ? "Language" : "Langue"}>
      {/* Balise simple, pas `style jsx` : deux feuilles `style jsx global` tirées de constantes partagent le même
          identifiant et styled-jsx n'en garde qu'une. Celle-ci sort donc dès le rendu serveur, à côté de celle de la page. */}
      <style dangerouslySetInnerHTML={{ __html: STYLE }} />
      <ul>
        <li><a href={h.fr + suite} hrefLang="fr" lang="fr" aria-current={lang === "fr" ? "page" : undefined}>Français</a></li>
        <li><a href={h.en + suite} hrefLang="en" lang="en" aria-current={lang === "en" ? "page" : undefined}>English</a></li>
      </ul>
    </nav>
  );
}
