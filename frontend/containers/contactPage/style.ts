import styled from "styled-components";

interface Props {
  color: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    flex-direction: row;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  height: 100%;
  width: 100vw;
  padding: 40px;

  background-color: ${(props) => props.theme.palette.common.orange};

  button {
    align-self: center;
    margin-top: 40px;
  }

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: 60vw;
    padding: 140px;
  }
`;

export const Header = styled.p`
  font: normal normal 300 32px/39px var(--font-montserrat);

  letter-spacing: 0px;
  color: ${(props) => props.theme.palette.common.black};

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    font: normal normal 300 56px/68px var(--font-montserrat);
  }
`;

export const Names = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    flex-direction: row;
  }
`;

export const HeadlineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  order: -1;

  position: relative;
  width: 100%;
  height: 25%;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    order: 0;
    align-self: center;
  }
`;

export const Line = styled.div`
  width: 100%;
  border: 3px solid ${(props) => props.theme.palette.common.orange};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    border: 5px solid ${(props) => props.theme.palette.common.orange};
  }
`;

export const Headline = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 0 10vw;

  text-transform: inherit;

  background-color: ${(props) => props.theme.palette.common.white};

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    padding: 0 5vw;
  }
`;

export const HeadlineInner = styled.div`
  position: relative;
  height: 14%;
  width: 100%;
  margin-top: 20%;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    height: 19%;
    margin-top: 0;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
