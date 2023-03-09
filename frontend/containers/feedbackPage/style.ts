import styled from "styled-components";

interface Props {
  left?: boolean;
  right?: boolean;
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

export const HeadlineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: flex-end;
  order: -1;
  flex-direction: column;

  position: relative;
  width: 50vw;
  height: 100%;
  padding-bottom: 10vh;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    order: 0;
    align-self: center;
  }
`;

export const Line = styled.div`
  width: 100%;
  border: 3px solid ${(props) => props.theme.palette.common.ping};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    border: 5px solid ${(props) => props.theme.palette.common.ping};
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

export const ImageWrapper = styled.div<Props>`
  position: absolute;
  top: -19.6vh;

  ${({ right }) =>
    right &&
    `
      right: 6vw;
  `}

  ${({ left }) =>
    left &&
    `
      left: 9vw;
  `}
`;

export const FeedbackWrapper = styled.div`
  background: ${(props) => props.theme.palette.common.ping};
  display: flex;
  flex-direction: column;

  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 50vw;
`;

export const CardWrapper = styled.div`
  white-space: normal;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DescriptionWrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
`;

export const Description = styled.p`
  font: normal normal 300 26px/32px var(--font-montserrat);
  letter-spacing: 0px;
  color: #161616;
  opacity: 1;
`;

export const Name = styled.p`
  font: normal normal 300 56px/68px var(--font-montserrat);
  letter-spacing: 0px;
  color: #161616;
  opacity: 1;
  margin: 0;
  text-align: center;
`;
