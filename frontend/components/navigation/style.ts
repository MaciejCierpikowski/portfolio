import styled from "styled-components";

interface Props {
  isFixed?: boolean;
  width?: number;
}

export const Wrapper = styled.ul<Props>`
  position: fixed;
  width: 100%;
  z-index: 1;

  display: flex;
  align-items: center;
  list-style: none;
  min-height: ${(props) => (props.isFixed ? 9.26 : 18.5185185)}%;
  transition: min-height 0.6s;

  padding-left: 40px;
  margin: 0;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 16px #00000029;

  li:nth-child(2) {
    padding-left: 15px;
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopL}px) {
    padding-left: 140px;
  }

  img {
    transition: width 0.6s;
  }
`;

export const ImageWrapper = styled.div<Props>`
  width: ${(props) => props.width}px;
`;

export const ItemElement = styled.li<Props>`
  color: ${(props) => props.theme.palette.common.green};
  font: normal normal bold 36px/44px var(--font-montserrat);
  letter-spacing: 0px;
  padding: 0 50px;

  cursor: pointer;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    font: normal normal bold 21px/29px var(--font-montserrat);
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopL}px) {
    font: normal normal bold 26px/34px var(--font-montserrat);
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopXL}px) {
    font: normal normal bold 36px/44px var(--font-montserrat);
  }
`;
