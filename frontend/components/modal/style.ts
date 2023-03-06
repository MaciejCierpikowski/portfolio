import styled, { keyframes } from "styled-components";

interface Props {
  isOpen: boolean;
}

const fadeIn = () =>
  keyframes`
    0% {
        transform: translateX(-200vw);
    }
    100% {
      transform: translateX(-50%);
    }

`;

const fadeOut = () =>
  keyframes`
    100% {
      transform: translateX(-200vw);
    }
    0% {
      transform: translateX(-50%);
    }
`;

export const Wrapper = styled.div<Props>`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 16px #00000029;
  opacity: 1;
  width: 86%;
  position: absolute;
  height: 110%;
  top: -40px;
  left: 50%;

  animation: ${(props) => (props.isOpen ? fadeIn() : fadeOut())} 1s;
  animation-fill-mode: both;
`;

export const Close = styled.div`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  z-index: 2;

  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: #333;
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
  top: -115px;
  left: -8vw;
  width: 101vw;
  height: 10vh;
`;
