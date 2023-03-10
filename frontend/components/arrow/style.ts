import styled, { keyframes } from "styled-components";

interface Props {
  direction: "UP" | "DOWN";
}

const animate = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }

`;

export const Wrapper = styled.div<Props>`
  transform: rotate(${(p) => (p.direction === "DOWN" ? "0deg" : "180deg")})
    translate(${(p) => (p.direction === "DOWN" ? "0, 0" : "0, -15px")});
  cursor: pointer;

  width: 100px;
  height: 100px;
  margin: 0px 40px 0 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    margin: 40px 40px 0 40px;
  }

  span {
    display: block;
    width: 15px;
    height: 15px;
    border-bottom: 2.5px solid ${(props) => props.theme.palette.common.black};
    border-right: 2.5px solid ${(props) => props.theme.palette.common.black};
    transform: rotate(45deg);
    margin: -2px;
    animation: ${animate} 2s infinite;
  }
  span:first-child {
    animation-delay: -0.4s;
  }

  span:nth-child(2) {
    animation-delay: -0.2s;
  }

  span:nth-child(3) {
    animation-delay: 0s;
  }
`;
