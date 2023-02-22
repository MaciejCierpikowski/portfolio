import styled from "styled-components";

interface Props {
  direction: "LEFT" | "RIGHT";
}

export const Wrapper = styled.div<Props>`
  transform: rotate(${(p) => (p.direction === "RIGHT" ? "-90deg" : "90deg")});
  cursor: pointer;

  width: 100px;
  height: 100px;
  margin: 0 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    display: block;
    width: 1.5vw;
    height: 1.5vw;
    border-bottom: 6px solid ${(props) => props.theme.palette.common.black};
    border-right: 6px solid ${(props) => props.theme.palette.common.black};
    transform: rotate(45deg);
    margin: -2px;
  }
`;
