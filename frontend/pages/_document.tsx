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
          content="Tajniki Matematyki dla uczniów klas 1-8 - Korepetycje z pasjonatką matematyki."
        />
        <meta
          name="keywords"
          content="korepetycje, matematyka, matematyka dla klas 1-8, nauczyciele matematyki, nauka matematyki online, korepetycje online, przygotowanie do testów i egzaminów, metody nauczania matematyki, zadania i ćwiczenia matematyczne, poprawa wyników z matematyki"
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
