import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  width: 100vw;
  height: 350px;
  background: ${(props) => props.theme.palette.common.yellow} 0% 0% no-repeat
    padding-box;
  box-shadow: 0px 0px 16px #00000029;
  opacity: 1;
  z-index: -1;
`;

export const WrapperCalendar = styled.div`
  width: 1226px;
  padding: 50px 125px;

  background: ${(props) => props.theme.palette.common.white} 0% 0% no-repeat
    padding-box;
  box-shadow: 0px 0px 16px #00000029;
  opacity: 1;
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
  font: normal normal 300 50px/61px var(--font-montserrat);

  letter-spacing: 0px;
  color: ${(props) => props.theme.palette.common.black};
  width: 122px;
  height: 90px;
  background: ${(props) => props.theme.palette.common.white} 0% 0% no-repeat
    padding-box;
  box-shadow: 0px 3px 5px #00000029;
  opacity: 1;
  margin: 15px;
`;

export const HeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  margin: 0 100px 0 0;

  img {
    align-self: end;
    margin-top: -25px;
  }
`;

export const Headline = styled.div`
  font: normal normal bold 56px/68px var(--font-montserrat);
  letter-spacing: 0px;
  color: ${(props) => props.theme.palette.common.black};
  opacity: 1;
  text-transform: capitalize;
  width: min-content;
`;
