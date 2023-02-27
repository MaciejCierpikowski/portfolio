import styled from "styled-components";

interface Props {
  topOffset: number;
  width?: number;
  leftOffset?: number;
  leftOffsetMobile?: number;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 47.4444444vh;
  margin-top: 18.5185185vh;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -4%;

  order: -1;
  width: 100%;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    order: 0;
    width: 50%;
    margin-top: 4%;
  }
`;

export const Header = styled.h1`
  width: 215px;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: 510px;
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopL}px) {
    width: 690px;
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopXL}px) {
    width: 950px;
  }
`;

export const SubHeader = styled.span`
  font: normal normal 300 30px/37px var(--font-montserrat);
  letter-spacing: 0px;
  color: ${(props) => props.theme.palette.common.black};
  opacity: 1;
  display: block;
  text-align: end;
  text-transform: lowercase;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    font: normal normal 300 43px/52px var(--font-montserrat);
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopXL}px) {
    font: normal normal 300 56px/68px var(--font-montserrat);
  }
`;

export const ImageWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  position: relative;
  width: 50%;
  justify-content: center;
  margin-top: -10%;
  align-self: end;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: 21.7%;
    align-self: center;
  }

  img {
    position: relative !important;
    height: auto !important;
    inset: ${(p) => p.topOffset - 2}px 0 0 ${(p) => p.leftOffsetMobile}px !important;
    width: ${(props) => props.width! + 5}% !important;

    @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
      width: ${(props) => props.width}% !important;
      inset: ${(p) => p.topOffset}px 0 0 ${(p) => p.leftOffset}px !important;
    }
    @media (min-width: ${(props) => props.theme.sizes.desktop}px) {
      width: 33.33% !important;
    }
  }
`;

export const Line = styled.div`
  background: #ff9b30 0% 0% no-repeat padding-box;
  height: 10px;
  width: 100%;
  display: none;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    display: block;
  }
`;

export const BottomRectangle = styled.div`
  background: #ff9b30 0% 0% no-repeat padding-box;
  height: 37.037037vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    margin-top: 40px;
  }
`;
