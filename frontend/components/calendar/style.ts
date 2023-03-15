import styled from "styled-components";

interface Props {
  inLegend?: boolean;
  fill?: boolean;
  border?: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  padding-bottom: 120px;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    flex-direction: row;
    justify-content: center;

    padding-bottom: 0%;
  }

  @media (max-width: ${(props) => props.theme.sizes.laptop}px) {
    div.arrow-left {
      position: absolute;
      left: 6%;
      bottom: 140px;
    }

    div.arrow-right {
      position: absolute;
      right: 6%;
      bottom: 140px;
    }
  }
`;

export const Background = styled.div`
  position: absolute;
  bottom: 0;

  width: 100vw;
  height: 29vh;

  background: ${(props) => props.theme.palette.common.yellow} 0% 0% no-repeat
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

export const WrapperCalendar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 80%;
  padding: 0;

  background: ${(props) => props.theme.palette.common.white} 0% 0% no-repeat
    padding-box;
  opacity: 1;
  order: -1;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: 70%;
    height: 90%;

    padding: 50px 125px;
    order: 0;
    box-shadow: 0px 0px 16px #00000029;
    align-self: flex-start;
  }
`;

export const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  justify-content: center;
  align-items: center;

  position: relative;
  text-align: center;
`;

export const Line = styled.div`
  width: 6px;
  height: 96%;
  position: absolute;
  right: 29%;

  top: 15px;
  background: ${(props) => props.theme.palette.common.orange} 0% 0% no-repeat
    padding-box;
`;

export const CellItem = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;
  cursor: pointer;
  font: normal normal bold 20px/24px var(--font-montserrat);
  letter-spacing: 0px;

  color: ${(props) => props.theme.palette.common.black};
  background: ${(props) => props.theme.palette.common.white} 0% 0% no-repeat
    padding-box;
  box-shadow: 0px 3px 5px #00000029;
  opacity: 1;

  margin: 3px;
  width: 40px;
  height: 50px;

  ${({ border, theme }) =>
    border &&
    `
      border: 3px solid  ${theme.palette.common.orange};
  `}

  ${({ fill, theme }) =>
    fill &&
    `
     background: ${theme.palette.common.orange} 0% 0% no-repeat padding-box;
  `}

  ${({ inLegend }) =>
    inLegend &&
    `
      width: 32px;
      height: 40px;
      font: normal normal bold 20px/24px var(--font-montserrat);
  `}

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: 60px;
    height: 52px;
    margin: 8px;

    font: normal normal 300 30px/38px var(--font-montserrat);

    ${({ inLegend }) =>
      inLegend &&
      `
        width: 51px;
        height: 35px;
        font: normal normal 300 25px/30px var(--font-montserrat);
    `}
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopL}px) {
    width: 90px;
    height: 80px;
    margin: 10px;

    font: normal normal 300 40px/50px var(--font-montserrat);

    ${({ inLegend }) =>
      inLegend &&
      `
        width: 51px;
        height: 35px;
        font: normal normal 300 25px/30px var(--font-montserrat);
    `}
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopXL}px) {
    width: 122px;
    height: 90px;
    margin: 15px;

    font: normal normal 300 50px/61px var(--font-montserrat);

    ${({ inLegend }) =>
      inLegend &&
      `
        width: 61px;
        height: 45px;
        font: normal normal 300 25px/30px var(--font-montserrat);
    `}
  }
`;

export const Legend = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  padding-top: 20px;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    padding-top: 0px;
  }
`;

export const LegendInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    margin: 0 40px;
  }
`;

export const CellText = styled.div`
  font: normal normal 300 17px/20px var(--font-montserrat);
  letter-spacing: 0px;
  color: ${(props) => props.theme.palette.common.black};

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    font: normal normal 300 25px/30px var(--font-montserrat);
  }
`;

export const HeadlineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    align-self: end;
    margin-top: -25px;
    flex-direction: column;
  }

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: 300px;
    margin: 0 100px 0 0;
    flex-direction: column;
  }
`;

export const Headline = styled.h1`
  letter-spacing: 0px;
  color: ${(props) => props.theme.palette.common.black};
  opacity: 1;
  text-transform: capitalize;
  width: min-content;
`;
