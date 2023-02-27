import styled, { keyframes } from "styled-components";

interface Props {
  isNavOpen?: any;
  index?: number;
}

const fadeIn = (index: number) =>
  keyframes`
    0% {
        transform: translateY(${index * 0.8 * -100}vh);
    }
    100% {
      transform: translateY(0);
    }

`;

const fadeOut = (index: number) =>
  keyframes`
    100% {
        transform: translateY(${index * 0.8 * -100}vh);
    }
    0% {
      transform: translateY(0);
    }
`;

const fadeInLogo = () =>
  keyframes`
    100% {
      transform: scale(2) translate(-25%, 50px);
      left: 50%;
    }
    0% {
      transform: scale(1) translate(0, 0);
    }
`;

const fadeOutLogo = () =>
  keyframes`
    100% {
      transform: scale(1) translate(0, 0); 
    }
    0% {
      transform: scale(2) translate(-25%, 50px);
      left: 50%;
    }
`;

export const Wrapper = styled.div<Props>`
  position: fixed;
  height: 11.1vh;
  width: 100%;
  z-index: 3;

  background: transparent 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 16px #00000029;

  img {
    position: absolute;
    top: 3vh;
    left: 60px;
    animation: ${(props) =>
        props.isNavOpen !== undefined &&
        (props.isNavOpen ? fadeInLogo() : fadeOutLogo())}
      0.6s;
    animation-fill-mode: forwards;
  }
`;

export const BlackBackground = styled.div<Props>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.palette.common.black};
  max-height: ${(props) => (props.isNavOpen ? "100vh" : "0")};
  transition: max-height 0.4s ease-out;
  z-index: 1;
`;

export const MenuWrapper = styled.ul<Props>`
  position: fixed;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  list-style: none;

  padding: 0 60px;
  margin: 0;
  background: transparent 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 16px #00000029;
  opacity: ${(props) => (props.isNavOpen ? 1 : 0)};
  transition: opacity 0.4s ease-out;

  padding-top: 100px;
`;

export const ItemElement = styled.li<Props>`
  color: ${(props) => props.theme.palette.common.white};
  padding: 15px;
  font: normal normal 300 32px/39px var(--font-montserrat);

  animation: ${(props) =>
      props.isNavOpen ? fadeIn(props.index!) : fadeOut(props.index!)}
    0.6s;
  animation-fill-mode: forwards;
  letter-spacing: 0px;
  cursor: pointer;
`;

export const Hamburger = styled.div<Props>`
  position: absolute;
  top: 4vh;
  right: 54px;
  display: block;
  height: 20px;
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 2;

  span {
    display: block;
    height: 3px;
    width: 100%;
    border-radius: 10px;
    background: ${(props) => props.theme.palette.common.green};
  }

  span:first-child {
    transition: transform 0.2s ease-in-out;
    transform: scaleY(${(props) => (!props.isNavOpen ? "1" : "0")});
  }

  span:nth-child(2) {
    transition: transform 0.2s ease-in-out;
    transform: rotate(${(props) => (!props.isNavOpen ? "0deg" : "45deg")});
    transform-origin: 10% 150%;
  }

  span:nth-child(3) {
    transform-origin: 50% 100%;
    transition: transform 0.2s ease-in-out;
    transform: rotate(${(props) => (!props.isNavOpen ? "0deg" : "-45deg")});
  }
`;
