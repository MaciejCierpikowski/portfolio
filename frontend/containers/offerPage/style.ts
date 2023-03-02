import styled from "styled-components";

interface Props {
  color: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;

  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;


  height: 100%;
    width: 100%;
    padding-top: 20px;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    height: 66%;
  }
`;

export const Card = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 16px #00000029;
  opacity: 1;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 70%;
`;

export const Headline = styled.h1<Props>`
  color: ${(props) => props.color};
  text-align: left;
  margin: 15px 0 0 0;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    margin: 20px 0 0 0;
  }
`;

export const Background = styled.div`
  position: absolute;
  bottom: 0;

  width: 100vw;
  height: 29%;
  background: ${(props) => props.theme.palette.common.green} 0% 0% no-repeat
    padding-box;
  box-shadow: 0px 0px 16px #00000029;
  opacity: 1;
  z-index: -1;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    transform: translate(-50%, -50%);

    top: 51%;
    left: 50%;
    bottom: inherit;

    height: 350px;
  }
`;

export const Text = styled.p`
  font: normal normal 300 19px/23px var(--font-montserrat);

  letter-spacing: 0px;
  color: ${(props) => props.theme.palette.common.black};
  opacity: 1;
  margin: 0;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    font: normal normal 300 23px/29px var(--font-montserrat);
  }
  @media (min-width: ${(props) => props.theme.sizes.laptopL}px) {
    font: normal normal 300 28px/35px var(--font-montserrat);
  }
  @media (min-width: ${(props) => props.theme.sizes.laptopXL}px) {
    font: normal normal 300 36px/44px var(--font-montserrat);
  }
`;

export const Line = styled.div`
  width: 100%;
  border: 3px solid ${(props) => props.theme.palette.common.green};

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    border: 5px solid ${(props) => props.theme.palette.common.green};
  }
`;

export const Header = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 180px;
  height: 40px;

  text-transform: inherit;

  background-color: ${(props) => props.theme.palette.common.white};

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: 350px;
    height: 78px;
    margin-top: 15px;
  }
`;

export const HeaderWrapper = styled.div`
  position: relative;
  padding: 50px 0 65px 0;
  margin-top: 11.7vh;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    padding: 100px 0 65px 0;
    margin-top: 9vh;
  }
`;
