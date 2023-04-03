import styled, { css, keyframes } from "styled-components";

interface Props {
  color?: string;
  isOpen?: boolean;
  isAnimation?: boolean;
  index?: number;
  isModal?: boolean;
}

const positionsImage = ["10vw, 5vh", "-20vw, 5vh", "-50vw, 5vh"];

const positionsText = ["30vw, -65vh", "0, -65vh", "-30vw, -65vh"];

const fadeInText = (index: number) =>
  keyframes`
    0% {
      transform: translate(0, 0);

    }
    100% {
      transform: translate(${positionsText[index]});

    }
`;

const fadeOutText = (index: number) =>
  keyframes`
    100% {
      transform: translate(0, 0);

    }
    0% {
      transform: translate(${positionsText[index]});
    }
`;

const fadeInImageMobile = () =>
  keyframes`
    0% {
      transform: translate(0, 0);

    }
    100% {
      transform: translate(0,-15vh);
    }
`;

const fadeOutImageMobile = () =>
  keyframes`
    100% {
      transform: translate(0, 0);

    }
    0% {
      transform: translate(0,-15vh);

    }
`;

const fadeInTextMobile = () =>
  keyframes`
    0% {
      transform: translate(0, 0);

    }
    100% {
      transform: translate(0vw,-20vh);
    }
`;

const fadeOutTextMobile = () =>
  keyframes`
    100% {
      transform: translate(0, 0);

    }
    0% {
      transform: translate(0vw,-20vh);

    }
`;

const fadeInImage = (index: any) =>
  keyframes`
    0% {
      transform: translate(0, 0);

    }
    100% {
      transform: translate(${positionsImage[index]}) scale(1.5);
    }
`;

const fadeOutImage = (index: number) =>
  keyframes`
    100% {
      transform: translate(0, 0) scale(1);

    }
    0% {
      transform: translate(${positionsImage[index]}) scale(1.5);

    }
`;

const fadeIn = () =>
  keyframes`
    100% {
      opacity: 1;
      transform: translateY(0);

    }
    0% {
opacity: 0;
transform: translateY(3vh);

    }
`;

const fadeOut = () =>
  keyframes`
    100% {
      opacity: 0;
      transform: translateY(3vh);

    }
    0% {
      opacity: 1;
      transform: translateY(0);

    }
`;

const fadeInBackgroundImage = (isAnimation: boolean) =>
  keyframes`
    0% {
      background: #ffffff 0% 0% no-repeat padding-box;
      opacity: 1;
    }
    100% {
      background: transparent;
      opacity: ${isAnimation ? 1 : 0}
    }
`;

const fadeOutBackgroundImage = (isAnimation: boolean) =>
  keyframes`
    100% {
      background: #ffffff 0% 0% no-repeat padding-box;
      opacity: 1;
    }
    0% {
      background: transparent;
      opacity: ${isAnimation ? 1 : 0}
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

  position: relative;

  ${({ isAnimation, isOpen }) =>
    !isAnimation &&
    isOpen &&
    css`
      z-index: -1;
    `}

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    padding-top: 0px;
  }
`;

export const Card = styled.div<Props>`
  opacity: 1;
  position: relative;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  @media (max-width: ${(props) => props.theme.sizes.laptop}px) {
    &::before {
      z-index: -1;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      transition: transform 0.6s;
      box-shadow: 0px 0px 16px #00000029;
      background: #ffffff 0% 0% no-repeat padding-box;

      ${({ isModal }) =>
        isModal &&
        css`
          transform: scale(1.3, 2.5);
          top: 22%;
          transition: transform 0.6s;

          @media only screen and (min-height: ${(props) =>
              props.theme.sizesHeight.heightS}px) and (max-height: ${(props) =>
              props.theme.sizesHeight.heightL}px) {
            transform: scale(1.3, 2.7);
            top: 28%;
          }

          @media (max-height: ${(props) => props.theme.sizesHeight.heightS}px) {
            transform: scale(1.3, 2.9);
            top: 28%;
          }
        `}
    }
  }

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    box-shadow: ${({ isAnimation, isOpen }) =>
      isAnimation && isOpen ? `none;` : `0px 0px 16px #00000029;`};

    animation: ${(props) =>
        props.isOpen
          ? fadeInBackgroundImage(props.isAnimation!)
          : fadeOutBackgroundImage(props.isAnimation!)}
      0.2s;
    animation-fill-mode: both;
    animation-delay: ${(props) =>
      props.isOpen ? props.index! * 0.12 : (2 - props.index!) * 0.07}s;
  }

  img {
    animation: ${(props) =>
        props.isAnimation &&
        (props.isOpen ? fadeInImageMobile() : fadeOutImageMobile())}
      0.6s;
    animation-fill-mode: both;

    @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
      animation: ${(props) =>
          props.isAnimation &&
          (props.isOpen
            ? fadeInImage(props.index!)
            : fadeOutImage(props.index!))}
        0.6s;
      animation-fill-mode: both;
    }
  }
`;

export const Headline = styled.h1<Props>`
  font: normal normal bold 29px/35px var(--font-montserrat);

  color: ${(props) => props.color};
  text-align: left;
  margin: 15px 0 0 0;
  z-index: 1;

  animation: ${(props) =>
      props.isAnimation &&
      (props.isOpen ? fadeInTextMobile() : fadeOutTextMobile())}
    0.6s;
  animation-fill-mode: both;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    margin: 20px 0 0 0;

    animation: ${(props) =>
        props.isAnimation &&
        (props.isOpen ? fadeInText(props.index!) : fadeOutText(props.index!))}
      0.6s;
    animation-fill-mode: both;
  }

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    font: normal normal bold 34px/47px var(--font-montserrat);
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopL}px) {
    font: normal normal bold 46px/57px var(--font-montserrat);
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopXL}px) {
    font: normal normal bold 64px/78px var(--font-montserrat);
  }
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
  white-space: normal;
  width: 100%;

  z-index: 1;

  animation: ${(props) =>
      props.isAnimation &&
      (props.isOpen ? fadeInTextMobile() : fadeOutTextMobile())}
    0.6s;
  animation-fill-mode: both;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    animation: ${(props) =>
        props.isAnimation &&
        (props.isOpen ? fadeInText(props.index!) : fadeOutText(props.index!))}
      0.6s;
    animation-fill-mode: both;

    font: normal normal 300 23px/29px var(--font-montserrat);
  }
  @media (min-width: ${(props) => props.theme.sizes.laptopL}px) {
    font: normal normal 300 28px/35px var(--font-montserrat);
  }
  @media (min-width: ${(props) => props.theme.sizes.laptopXL}px) {
    font: normal normal 300 36px/44px var(--font-montserrat);
  }
`;

export const ChildrenInner = styled.div<Props>`
  position: absolute;
  width: 110%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    height: 100%;
    width: 100%;

    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: flex-end;

    button {
      position: absolute;

      left: 72%;
      top: 90%;
      transform: translate(-50%, -50%);
      animation: none !important;
    }
  }

  button {
    animation: ${(props) => (props.isOpen ? fadeOut() : fadeIn())} 0.6s;
    animation-delay: 0.1s;
    animation-fill-mode: both;
  }
`;

export const WrapperModalContent = styled.div``;
export const Description = styled.p<Props>`
  letter-spacing: 0px;
  color: #161616;
  opacity: 1;
  white-space: normal;
  width: 100%;

  font: normal normal 300 19px/23px var(--font-montserrat);
  min-height: 31vh;

  @media only screen and (min-height: ${(props) =>
      props.theme.sizesHeight.heightS}px) and (max-height: ${(props) =>
      props.theme.sizesHeight.heightL}px) {
    font: normal normal 300 17px/21px var(--font-montserrat);
    min-height: 29vh;
  }

  @media (max-height: ${(props) => props.theme.sizesHeight.heightS}px) {
    font: normal normal 300 15px/19px var(--font-montserrat);
    min-height: 27vh;
  }

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: 45%;
    padding: 50px;
    margin-right: 5%;

    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 16px #00000029;

    font: normal normal 300 24px/34px var(--font-montserrat);
    animation: ${(props) => (props.isOpen ? fadeIn() : fadeIn())} 0.6s;
    animation-delay: 0.1s;
    animation-fill-mode: both;
  }

  animation: ${(props) => (props.isOpen ? fadeOut() : fadeIn())} 0.6s;
  animation-delay: 0.1s;
  animation-fill-mode: both;
`;

export const Close = styled.div<Props>`
  position: absolute;
  right: -35px;
  top: -27%;
  width: 35px;
  height: 35px;
  z-index: 2;

  @media only screen and (min-height: ${(props) =>
      props.theme.sizesHeight.heightS}px) and (max-height: ${(props) =>
      props.theme.sizesHeight.heightL}px) {
    top: -27%;
  }

  @media (max-height: ${(props) => props.theme.sizesHeight.heightS}px) {
    top: -25%;
  }

  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 35px;
    width: 2px;
    background-color: ${(props) => props.theme.palette.common.green};
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  animation: ${(props) => (props.isOpen ? fadeIn() : fadeOut())} 0.6s;
  animation-delay: 0.3s;
  animation-fill-mode: both;
`;
