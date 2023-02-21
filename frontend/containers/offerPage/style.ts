import styled from "styled-components";

interface Props {
  color: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;

  height: 100vh;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Card = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 16px #00000029;
  opacity: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 500px;
  height: 500px;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 140px;

  position: relative;
`;

export const Headline = styled.h1<Props>`
  color: ${(props) => props.color};
  text-align: left;
  margin: 20px 0 0 0;
`;

export const Background = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 40%;
  left: 50%;

  width: 100vw;
  height: 350px;
  background: ${(props) => props.theme.palette.common.green} 0% 0% no-repeat
    padding-box;
  box-shadow: 0px 0px 16px #00000029;
  opacity: 1;
  z-index: -1;
`;

export const Text = styled.p`
  font: normal normal 300 36px/44px var(--font-montserrat);
  letter-spacing: 0px;
  color: ${(props) => props.theme.palette.common.black};
  opacity: 1;
  margin: 0;
`;

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
