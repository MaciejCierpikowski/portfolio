import "styled-components";

interface IPalette {
  main: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    sizes: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      desktop: string;
    };
    palette: {
      common: {
        red: string;
        yellow: string;
        ping: string;
        green: string;
        blue: string;
        orange: string;
        orangeHover: string;
        black: string;
        white: string;
        gray: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
  }
}
