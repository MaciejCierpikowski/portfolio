import styled, { keyframes } from "styled-components";

interface Props {
  color?: string;
  isOpen?: boolean;
  isAnimation?: boolean;
}

const fadeInText = () =>
  keyframes`
    0% {
      transform: translate(0, 0);

    }
    100% {
      transform: translate(0, -65vh);

    }

`;

const fadeOutText = () =>
  keyframes`
    100% {
      transform: translate(0, 0);

    }
    0% {
      transform: translate(0, -65vh);

    }
`;

const fadeInImage = () =>
  keyframes`
    0% {
      transform: translate(0, 0);

    }
    100% {
      transform: translate(-20vw, 0) scale(1.5);

    }

`;

const fadeOutImage = () =>
  keyframes`
    100% {
      transform: translate(0, 0) scale(1);

    }
    0% {
      transform: translate(-20vw, 0) scale(1.5);

    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;

  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
`;

export const CardWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
  padding-top: 20px;
  ${({ isAnimation, isOpen }) =>
    !isAnimation &&
    isOpen &&
    `
    z-index: -1;
  `}

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    padding-top: 0px;
  }
`;

export const Card = styled.div<Props>`
  background: ${({ isAnimation, isOpen }) =>
    isOpen ? `transparent;` : `#ffffff 0% 0% no-repeat padding-box;`};
  box-shadow: ${({ isAnimation, isOpen }) =>
    isAnimation && isOpen ? `none;` : `0px 0px 16px #00000029;`};

  opacity: 1;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  img {
    animation: ${(props) =>
        props.isAnimation && (props.isOpen ? fadeInImage() : fadeOutImage())}
      1s;
    animation-fill-mode: both;
  }
`;

export const Headline = styled.h1<Props>`
  color: ${(props) => props.color};
  text-align: left;
  margin: 15px 0 0 0;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    margin: 20px 0 0 0;
  }
  animation: ${(props) =>
      props.isAnimation && (props.isOpen ? fadeInText() : fadeOutText())}
    1s;
  animation-fill-mode: both;
`;

export const Background = styled.div`
  position: absolute;
  bottom: 0;

  width: 100vw;
  height: 29%;
  background: ${(props) => props.theme.palette.common.green} 0% 0% no-repeat
    padding-box;
  box-shadow: 0px 0px 16px #00000029;
  opacity: 1;
  z-index: -1;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    transform: translate(-50%, -50%);

    top: 51%;
    left: 50%;
    bottom: inherit;

    height: 350px;
  }
`;

export const Text = styled.p<Props>`
  font: normal normal 300 19px/23px var(--font-montserrat);

  letter-spacing: 0px;
  color: ${(props) => props.theme.palette.common.black};
  opacity: 1;
  margin: 0;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    font: normal normal 300 23px/29px var(--font-montserrat);
  }
  @media (min-width: ${(props) => props.theme.sizes.laptopL}px) {
    font: normal normal 300 28px/35px var(--font-montserrat);
  }
  @media (min-width: ${(props) => props.theme.sizes.laptopXL}px) {
    font: normal normal 300 36px/44px var(--font-montserrat);
  }
  animation: ${(props) =>
      props.isAnimation && (props.isOpen ? fadeInText() : fadeOutText())}
    1s;
  animation-fill-mode: both;
`;

export const ChildrenInner = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const WrapperModalContent = styled.div``;
export const Description = styled.p`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 16px #00000029;

  font: normal normal 300 24px/34px var(--font-montserrat);
  letter-spacing: 0px;
  color: #161616;
  opacity: 1;
  white-space: normal;
  width: 33%;
`;
