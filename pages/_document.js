import { Html, Head, Main, NextScript } from 'next/document'
import { SITE, META, langueDe, homologues } from '../lib/langue'

// Langue et métadonnées choisies d'après la page servie (rendu serveur) : une adresse anglaise est servie en anglais
// dès le premier octet, sans passage par le français. Les deux anciennes pages HTML (confidentialité, Éclaireurs),
// désormais rendues par Next aux mêmes adresses, gardent leurs propres balises : elles n'en recevaient pas d'autres.
const PROPRES = {
  '/privacy.html': {}, '/en/privacy.html': {},
  '/eclaireurs.html': { ogTitle: 'Orbal - Acces Eclaireur', ogDescription: 'Vos messages. Votre souverainete. Rejoignez la beta Orbal.' },
  '/en/eclaireurs.html': { ogTitle: 'Orbal - Éclaireur access', ogDescription: 'Your messages. Your sovereignty. Join the Orbal beta.' },
}

export default function Document(props) {
  const page = props.__NEXT_DATA__ && props.__NEXT_DATA__.page
  const lang = langueDe(page)
  const m = META[lang]
  const h = homologues(page)
  const propres = PROPRES[page]
  return (
    <Html lang={lang}>
      <Head>
        <meta charSet="utf-8" />
        {propres ? (
          propres.ogTitle ? <>
            <meta property="og:title" content={propres.ogTitle} />
            <meta property="og:description" content={propres.ogDescription} />
          </> : null
        ) : <>
          <meta name="description" content={m.description} />
          <meta name="keywords" content={m.keywords} />
          <meta property="og:title" content={m.ogTitle} />
          <meta property="og:description" content={m.ogDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={lang === 'en' && h ? SITE + h.en : SITE} />
          <meta name="twitter:card" content="summary_large_image" />
        </>}
        {h && <>
          <link rel="alternate" hrefLang="fr" href={SITE + h.fr} />
          <link rel="alternate" hrefLang="en" href={SITE + h.en} />
          <link rel="alternate" hrefLang="x-default" href={SITE + h.fr} />
        </>}
        {/* `robots` est desormais pose par `_app.js` : `next/document` echappe a
            la deduplication de `next/head`, et une page ne pouvait donc pas
            remplacer la valeur par defaut, seulement s'y ajouter. */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
