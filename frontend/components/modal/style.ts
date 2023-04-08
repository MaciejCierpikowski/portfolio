import styled, { css, keyframes } from "styled-components";

interface Props {
  isOpen?: boolean;
  isOutOfContent?: boolean;
  closeColor?: string;
}

const fadeInOutOfContent = () =>
  keyframes`
    0% {
        transform: translateX(-200vw);
    }
    100% {
      transform: translateX(-50%);
    }

`;

const fadeOutOutOfContent = () =>
  keyframes`
    100% {
      transform: translateX(-200vw);
    }
    0% {
      transform: translateX(-50%);
    }
`;

const fadeIn = () =>
  keyframes`
    0% {
        opacity: 0;
    }
    100% {
      opacity: 1;
    }

`;

const fadeOut = () =>
  keyframes`
    100% {
      opacity: 0;
    }
    0% {
      opacity: 1;
    }
`;

export const Wrapper = styled.div<Props>`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 16px #00000029;
  opacity: 1;
  position: absolute;

  ${({ isOutOfContent, isOpen }) =>
    isOutOfContent
      ? css`
          width: 86%;
          height: 110%;
          top: -40px;
          left: 50%;

          animation: ${isOpen ? fadeInOutOfContent() : fadeOutOutOfContent()}
            0.6s;
          animation-fill-mode: both;
        `
      : css`
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: ${isOpen ? "initial" : "none"};

          animation: ${isOpen ? fadeIn() : fadeOut()} 0.6s;
          animation-fill-mode: both;
        `}
`;

export const Close = styled.div<Props>`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 25px;
  height: 25px;
  z-index: 2;

  cursor: pointer;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: 35px;
    height: 35px;
  }

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 25px;
    width: 2px;
    background-color: ${(props) =>
      props.closeColor ? props.closeColor : props.theme.palette.common.green};

    @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
      height: 35px;
    }
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const Background = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  position: absolute;
  top: -150px;
  height: 147px;
  left: -8vw;
  width: 101vw;
`;
