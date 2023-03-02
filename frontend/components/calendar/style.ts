import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    flex-direction: row;
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
  width: 80%;
  padding: 0;

  background: ${(props) => props.theme.palette.common.white} 0% 0% no-repeat
    padding-box;
  opacity: 1;
  order: -1;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: 70%;
    padding: 50px 125px;
    order: 0;
    box-shadow: 0px 0px 16px #00000029;
  }
`;

export const WrapperGrid = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  display: grid;
`;

export const CellItem = styled.div`
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  height: 2.5rem;
  display: flex;
  font: normal normal bold 20px/24px var(--font-montserrat);
  letter-spacing: 0px;
  color: ${(props) => props.theme.palette.common.black};
  width: 40px;
  height: 50px;
  background: ${(props) => props.theme.palette.common.white} 0% 0% no-repeat
    padding-box;
  box-shadow: 0px 3px 5px #00000029;
  opacity: 1;
  margin: 3px;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: 122px;
    height: 90px;
    font: normal normal 300 50px/61px var(--font-montserrat);
    margin: 15px;
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
  }
`;

export const Headline = styled.h1`
  letter-spacing: 0px;
  color: ${(props) => props.theme.palette.common.black};
  opacity: 1;
  text-transform: capitalize;
  width: min-content;
`;
