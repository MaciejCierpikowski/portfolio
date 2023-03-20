import { Html, Head, Main, NextScript } from "next/document";
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LXJ0D4GEWP"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-LXJ0D4GEWP');
        '`,
          }}
        />
        <Favicon />
      </Head>

      <body>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
