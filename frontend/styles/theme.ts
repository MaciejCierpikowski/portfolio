import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  borderRadius: "4px",
  sizes: {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    laptopXL: 1920,
    desktop: 2560,
  },
  sizesHeight: {
    heightS: 669,
    heightL: 844,
  },
  palette: {
    common: {
      red: "#EC90A7",
      yellow: "#FFCD45",
      ping: "#EC90A7",
      green: "#51D6D4",
      blue: "#93d8f9",
      orange: "#FF9B30",
      orangeHover: "#C28C1E",
      black: "#161616",
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
