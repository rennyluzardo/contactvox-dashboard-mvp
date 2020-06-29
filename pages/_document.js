import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="es">
        <Head>
          <script>window.dataLayer = window.dataLayer || [];</script>
          {/* <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' /> */}
          <meta name="description" content="Dashboard de Contactvox." />
          <meta
            name="keywords"
            content="Contactvox, Comunicaciones unificadas"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <link rel="stylesheet" href="/_next/static/style.css" /> */}

          {/* <link
            href="https://rluzardodashboard.contactvox.com/skin/4.0/build/css/sidevox.css"
            rel="stylesheet"
          /> */}

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
