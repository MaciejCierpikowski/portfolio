import styled from "styled-components";

interface Props {
  direction: "LEFT" | "RIGHT";
}

export const Wrapper = styled.div<Props>`
  transform: rotate(${(p) => (p.direction === "RIGHT" ? "-90deg" : "90deg")});
  cursor: pointer;

  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: 100px;
    height: 100px;
  }

  span {
    display: block;
    width: 20px;
    height: 20px;
    border-bottom: 6px solid ${(props) => props.theme.palette.common.black};
    border-right: 6px solid ${(props) => props.theme.palette.common.black};
    transform: rotate(45deg);
    margin: -2px;

    @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
      width: 1.5vw;
      height: 1.5vw;
    }
  }
`;
