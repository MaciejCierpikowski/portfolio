import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;

  height: 100vh;
  position: relative;
`;

export const Line = styled.div`
  width: 100%;
  border: 10px solid ${(props) => props.theme.palette.common.green};
`;

export const Header = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 350px;
  height: 78px;

  text-transform: inherit;

  background-color: ${(props) => props.theme.palette.common.white};
`;

export const HeaderWrapper = styled.div`
  position: relative;
  padding: 100px 0;
  margin-top: 9.26vh;
`;
