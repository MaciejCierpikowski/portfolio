import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  borderRadius: "4px",
  sizes: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
  },
  palette: {
    common: {
      red: "#f8687f",
      yellow: "#fee563",
      ping: "#f5bbeb",
      green: "#19bec4",
      blue: "#93d8f9",
      orange: "#f3af26",
      black: "#000000",
      white: "#ffffff",
      gray: "#414141",
    },
    primary: {
      main: "#726a95",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#709fb0",
      contrastText: "#ffffff",
    },
  },
};
