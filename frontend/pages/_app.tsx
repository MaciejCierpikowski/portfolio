import type { AppProps } from "next/app";
import { useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import ClientOnly from "../components/ssr";

import { store } from "../store/store";
import { GlobalStyle } from "../styles/globalCss";
import { defaultTheme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme] = useState(defaultTheme);

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ClientOnly>
            <Component {...pageProps} />
          </ClientOnly>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
