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
      red: "#EC90A7",
      yellow: "#FFCD45",
      ping: "#f5bbeb",
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
