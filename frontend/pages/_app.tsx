import type { AppProps } from "next/app";
import { useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { store } from "../store/store";
import { defaultTheme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme] = useState(defaultTheme);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
