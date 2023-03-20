import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import Favicon from "../components/favicon";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <title>Matematyka z pasją</title>
        <meta
          name="description"
          content="Tajniki Matematyki dla uczniów klas 4-8 - Korepetycje z pasjonatką matematyki."
        />
        <meta
          name="keywords"
          content="korepetycje, matematyka, matematyka dla klas 4-8, nauczyciele matematyki, nauka matematyki online, korepetycje online, przygotowanie do testów i egzaminów, metody nauczania matematyki, zadania i ćwiczenia matematyczne, poprawa wyników z matematyki"
        />

        <Favicon />
      </Head>

      <body>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LXJ0D4GEWP"
        />

        <Script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-LXJ0D4GEWP');
        '`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
