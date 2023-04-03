import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
`;

export const Header = styled.p`
  font: normal normal normal 20px/24px var(--font-montserrat);

  letter-spacing: 0px;
  color: ${(props) => props.theme.palette.common.black};
  opacity: 1;

  margin: 20px auto;
  padding: 0 20px;

  width: 100%;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    font: normal normal normal 30px/38px var(--font-montserrat);
    margin: 50px 0;
  }
`;
