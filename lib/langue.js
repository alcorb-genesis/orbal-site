// Langues du site : le français reste la langue par défaut, aux adresses existantes ; l'anglais vit sous /en.
// La langue est portée par l'adresse elle-même : un lien partagé, un rechargement ou une navigation la gardent,
// sans cookie, sans stockage et sans redirection imposée selon le navigateur.

export const SITE = "https://alcorb.app";

// Pages homologues, dans l'ordre : français (adresse historique), anglais.
const PAIRES = [
  ["/", "/en"],
  ["/install", "/en/install"],
  ["/success", "/en/success"],
  ["/cancel", "/en/cancel"],
  ["/privacy.html", "/en/privacy.html"],
  ["/eclaireurs.html", "/en/eclaireurs.html"],
];

// Langue d'une page Next (`__NEXT_DATA__.page`, ex. "/en/install") : l'anglais vit sous /en, le reste est en français.
export const langueDe = (page) => (page === "/en" || (typeof page === "string" && page.startsWith("/en/")) ? "en" : "fr");

// Adresses française et anglaise d'une page connue, ou null (404, erreur).
export function homologues(page) {
  const p = PAIRES.find(([fr, en]) => fr === page || en === page);
  return p ? { fr: p[0], en: p[1] } : null;
}

// Métadonnées par langue (pages/_document.js). Le français reprend mot pour mot les valeurs déjà publiées.
export const META = {
  fr: {
    description: "Orbal — Messagerie chiffrée souveraine. Vos messages. Votre souveraineté.",
    keywords: "messagerie chiffrée, E2EE, souveraineté données, Orbal, Alcorb",
    ogTitle: "Orbal — Vos messages. Votre souveraineté.",
    ogDescription: "Orbal — Messagerie chiffrée souveraine. Vos messages. Votre souveraineté.",
  },
  en: {
    description: "Orbal — A sovereign encrypted messenger. Your messages. Your sovereignty.",
    keywords: "encrypted messenger, E2EE, data sovereignty, Orbal, Alcorb",
    ogTitle: "Orbal — Your messages. Your sovereignty.",
    ogDescription: "Orbal — A sovereign encrypted messenger. Your messages. Your sovereignty.",
  },
};
