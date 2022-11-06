import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="http://fonts.googleapis.com/css?family=Bungee&subset=latin,latin-ext"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="http://fonts.googleapis.com/css?family=Bungee+Inline&subset=latin,latin-ext"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="http://fonts.googleapis.com/css?family=Bitter&subset=latin,latin-ext"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
