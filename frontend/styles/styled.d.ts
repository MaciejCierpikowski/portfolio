import "styled-components";

interface IPalette {
  main: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        red: string;
        yellow: string;
        ping: string;
        green: string;
        blue: string;
        orange: string;
        black: string;
        white: string;
        gray: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
  }
}
