import styled from "styled-components";

interface Props {
  sizes: {
    widthMobile: number;
    heightMobile: number;
    widthDesktop: number;
    heightDesktop: number;
  };
}

export const Wrapper = styled.button<Props>`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 16px #00000029;
  border-radius: 60px;
  opacity: 1;

  width: ${(props) => props.sizes.widthMobile}px;
  height: ${(props) => props.sizes.heightMobile}px;
  border: none;
  outline: inherit;

  font: normal normal bold 19px/23px var(--font-montserrat);
  letter-spacing: 0px;
  color: #161616;
  text-transform: uppercase;

  cursor: pointer;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: ${(props) => props.sizes.widthDesktop}px;
    height: ${(props) => props.sizes.heightDesktop}px;
  }

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    font: normal normal bold 24px/30px var(--font-montserrat);
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopL}px) {
    font: normal normal bold 30px/37px var(--font-montserrat);
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopXL}px) {
    font: normal normal bold 36px/44px var(--font-montserrat);
  }
`;
