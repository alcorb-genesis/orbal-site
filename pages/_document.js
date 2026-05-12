import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Orbal — Messagerie chiffrée souveraine. Vos messages. Votre souveraineté." />
        <meta name="keywords" content="messagerie chiffrée, E2EE, souveraineté données, Orbal, Alcorb" />
        <meta property="og:title" content="Orbal — Vos messages. Votre souveraineté." />
        <meta property="og:description" content="La seule messagerie E2EE européenne sans numéro de téléphone, sans confiance aveugle." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://orbal.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
