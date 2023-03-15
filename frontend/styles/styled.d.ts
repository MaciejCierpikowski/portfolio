import "styled-components";

interface IPalette {
  main: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    sizes: {
      mobileS: number;
      mobileM: number;
      mobileL: number;
      tablet: number;
      laptop: number;
      laptopL: number;
      laptopXL: number;
      desktop: number;
    };
    sizesHeight: {
      heightS: number;
      heightL: number;
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
