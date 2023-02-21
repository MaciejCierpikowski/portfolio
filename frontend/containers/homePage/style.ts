import styled from "styled-components";

interface Props {
  topOffset: number;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 44.4444444vh;
  margin-top: 18.5185185vh;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 205px;
`;

export const Header = styled.h1``;

export const SubHeader = styled.h2`
  font: normal normal 300 56px/68px var(--font-montserrat);
  letter-spacing: 0px;
  color: ${(props) => props.theme.palette.common.black};
  opacity: 1;
  align-self: end;
  margin: 5px 0;
`;

export const ImageWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  img {
    position: relative;
    top: ${(p) => p.topOffset}px;
  }
`;

export const Line = styled.div`
  background: #ff9b30 0% 0% no-repeat padding-box;
  height: 10px;
  width: 400px;
`;

export const BottomRectangle = styled.div`
  background: #ff9b30 0% 0% no-repeat padding-box;
  height: 37.037037vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
