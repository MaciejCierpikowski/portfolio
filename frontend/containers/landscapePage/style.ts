import styled from "styled-components";

interface Props {
  display: boolean;
}

export const Wrapper = styled.div<Props>`
  display: ${({ display }) => (display ? "flex" : "none")};
  
  position: fixed;
  top: 0;
  z-index: 999;

  height: 100vh;
  width: 100vw;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.palette.common.white};
`;
export const Text = styled.p`
  font: normal normal 300 19px/23px var(--font-montserrat);

  letter-spacing: 0px;
  color: ${(props) => props.theme.palette.common.black};
  opacity: 1;
  margin: 0;
`;
