import styled from "styled-components";

interface Props {
  sizes: {
    widthMobile: number;
    heightMobile: number;
    widthDesktop: number;
    heightDesktop: number;
  };
  fontSizes: {
    mobile: string;
    laptop: string;
    laptopL: string;
    laptopXL: string;
  };
  color: string;
}

export const Wrapper = styled.button<Props>`
  background: ${(props) => props.color} 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 16px #00000029;
  border-radius: 60px;
  opacity: 1;

  width: ${(props) => props.sizes.widthMobile}px;
  height: ${(props) => props.sizes.heightMobile}px;
  border: none;
  outline: inherit;

  font: normal normal bold ${(props) => props.fontSizes.mobile}
    var(--font-montserrat);
  letter-spacing: 0px;
  color: #161616;
  text-transform: uppercase;

  cursor: pointer;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: ${(props) => props.sizes.widthDesktop}px;
    height: ${(props) => props.sizes.heightDesktop}px;
  }

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    font: normal normal bold ${(props) => props.fontSizes.laptop}
      var(--font-montserrat);
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopL}px) {
    font: normal normal bold ${(props) => props.fontSizes.laptopL}
      var(--font-montserrat);
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopXL}px) {
    font: normal normal bold ${(props) => props.fontSizes.laptopXL}
      var(--font-montserrat);
  }
`;
