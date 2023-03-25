import styled, { css } from "styled-components";

interface Props {
  left?: boolean;
  right?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    flex-direction: row;
  }
`;

export const HeadlineWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  position: relative;
  height: 50%;
  width: 100vw;
  padding: 175px 0 100px 0px;

  @media only screen and (min-height: ${(props) =>
      props.theme.sizesHeight.heightS}px) and (max-height: ${(props) =>
      props.theme.sizesHeight.heightL}px) {
    padding: 175px 0 75px 0px;
    justify-content: space-between;
  }

  @media (max-height: ${(props) => props.theme.sizesHeight.heightS}px) {
    padding: 152px 0 50px 0px;
    justify-content: space-between;
  }

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    align-self: center;
    width: 50vw;
    height: 100%;
    padding: 0 0 10vh 0;
    justify-content: flex-end;
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

  @media (max-width: ${(props) => props.theme.sizes.mobileM}px) {
    padding: 0 4vw;
  }

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    padding: 0 5vw;
  }
`;

export const HeadlineInner = styled.div`
  position: relative;
  height: 14%;
  width: 100%;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    height: 19%;
    margin-top: 0;
  }
`;

export const ImageWrapper = styled.div<Props>`
  position: absolute;
  bottom: 45%;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    bottom: 50%;
  }

  ${({ right }) =>
    right &&
    css`
      @media (max-width: ${(props) => props.theme.sizes.laptop}px) {
        left: 6vw;
      }

      @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
        right: 6vw;
      }
    `}

  ${({ left }) =>
    left &&
    css`
      @media (max-width: ${(props) => props.theme.sizes.laptop}px) {
        right: 6vw;
      }

      @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
        left: 6vw;
      }
    `}
`;

export const FeedbackWrapper = styled.div`
  background: ${(props) => props.theme.palette.common.ping};
  display: flex;
  flex-direction: column;
  justify-content: end;

  height: 50%;
  width: 100vw;

  padding-bottom: 50px;

  order: -1;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: 50vw;
    order: 0;
    justify-content: center;

    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
  }

  & > div {
    @media (max-width: ${(props) => props.theme.sizes.laptop}px) {
      display: flex;
      flex-direction: column;
    }
  }
  div.dots {
    margin-top: 30px;
  }
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
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    top: 45%;
    width: 80%;
  }
`;

export const Description = styled.p`
  font: normal normal 300 12px/15px var(--font-montserrat);
  letter-spacing: 0px;
  color: #161616;
  opacity: 1;

  margin: 2px 0;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    font: normal normal 300 17px/20px var(--font-montserrat);
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopL}px) {
    font: normal normal 300 22px/25px var(--font-montserrat);
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopXL}px) {
    font: normal normal 300 26px/32px var(--font-montserrat);
  }
`;

export const Name = styled.p`
  font: normal normal 300 30px/35px var(--font-montserrat);
  letter-spacing: 0px;
  color: #161616;
  opacity: 1;
  margin: 0;
  text-align: center;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    font: normal normal 300 38px/45px var(--font-montserrat);
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopL}px) {
    font: normal normal 300 46px/55px var(--font-montserrat);
  }

  @media (min-width: ${(props) => props.theme.sizes.laptopXL}px) {
    font: normal normal 300 56px/68px var(--font-montserrat);
  }
`;
