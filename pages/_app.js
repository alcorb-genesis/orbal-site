import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Le `robots` par defaut du site vit ICI, et non dans `_document.js`.
          Raison : `next/head` deduplique les `meta` de meme `name`, mais il ne
          peut rien contre `next/document`, rendu en dehors de lui. Pose dans
          `_document.js`, la valeur par defaut sortait EN PLUS du `noindex` des
          pages de retour de paiement — deux balises contradictoires. Pose ici,
          une page qui declare son propre `robots` remplace celui-ci, et toutes
          les autres routes gardent l'indexation habituelle. */}
      <Head>
        <meta name="robots" content="index, follow" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
