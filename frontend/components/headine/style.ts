import styled from "styled-components";

export const Line = styled.div`
  width: 100%;
  border: 3px solid ${(props) => props.theme.palette.common.green};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    border: 5px solid ${(props) => props.theme.palette.common.green};
  }
`;

export const Header = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 0 5vw;

  text-transform: inherit;

  background-color: ${(props) => props.theme.palette.common.white};

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    padding: 0 5vw;
  }
`;

export const HeaderWrapper = styled.div`
  position: relative;
  margin-top: 11.7vh;
  height: 14%;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    margin-top: 9vh;
    height: 19%;
  }
`;
