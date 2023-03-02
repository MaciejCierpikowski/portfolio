import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
  }
  * {
    box-sizing: border-box;
  }

  h1 {
    margin: 0;
    font: normal normal bold 30px/37px var(--font-montserrat);

    letter-spacing: 0px;
    color: ${(props) => props.theme.palette.common.black};
    text-transform: uppercase;
    text-align: center;

    @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
      font: normal normal bold 34px/47px var(--font-montserrat);
    }

    @media (min-width: ${(props) => props.theme.sizes.laptopL}px) {
      font: normal normal bold 46px/57px var(--font-montserrat);
    }

    @media (min-width: ${(props) => props.theme.sizes.laptopXL}px) {
      font: normal normal bold 64px/78px var(--font-montserrat);
    }
  }
`;
