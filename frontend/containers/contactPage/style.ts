import styled, { css } from "styled-components";

interface Props {
  color?: string;
  leftPosition?: string;
  bottomPosition?: string;
  leftPositionMobile?: string;
  bottomPositionMobile?: string;
  width: number;
  height: number;
  type: "icons" | "post_box";
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

  form {
    height: 75%;
    width: 100vw;

    @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
      height: 100%;
      width: 60vw;
    }
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;

  height: 100%;
  width: 100vw;
  padding: 40px 40px 80px 40px;

  @media (min-width: ${(props) => props.theme.sizes.mobileM}px) {
    padding: 40px 65px 80px 50px;
  }
  @media (max-height: ${(props) => props.theme.sizesHeight.heightS}px) {
    padding: 20px 40px 60px 40px;
  }

  background-color: ${(props) => props.theme.palette.common.orange};

  button {
    align-self: center;
    margin-top: 0px;

    @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
      margin-top: 40px;
      justify-content: center;
    }
    @media (max-height: ${(props) => props.theme.sizesHeight.heightL}px) {
      margin-top: 0px;
    }
  }

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: 60vw;
    padding: 140px;
    height: 100%;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Header = styled.p`
  font: normal normal 300 32px/39px var(--font-montserrat);

  letter-spacing: 0px;
  color: ${(props) => props.theme.palette.common.black};
  padding: 0;
  margin: 0;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    font: normal normal 300 56px/68px var(--font-montserrat);
  }

  @media (max-height: ${(props) => props.theme.sizesHeight.heightL}px) {
    font: normal normal 300 28px/35px var(--font-montserrat);
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
  align-items: end;
  order: -1;

  position: relative;
  width: 100vw;
  height: 25%;
  padding-bottom: 38px;

  @media only screen and (min-height: ${(props) =>
      props.theme.sizesHeight.heightS}px) and (max-height: ${(props) =>
      props.theme.sizesHeight.heightL}px) {
    padding-bottom: 33px;
  }

  @media (max-height: ${(props) => props.theme.sizesHeight.heightS}px) {
    padding-bottom: 27px;
  }

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    order: 0;
    align-self: center;
    width: 40vw;
    padding-bottom: 50px;
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

  padding: 0 5vw;

  text-transform: inherit;

  background-color: ${(props) => props.theme.palette.common.white};

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    padding: 0 4vw;
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
  bottom: ${(props) => props.bottomPositionMobile};
  left: ${(props) => props.leftPositionMobile};

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    bottom: ${(props) => props.bottomPosition};
    left: ${(props) => props.leftPosition};
  }

  img {
    @media only screen and (min-height: ${(props) =>
        props.theme.sizesHeight.heightS}px) and (max-height: ${(props) =>
        props.theme.sizesHeight.heightL}px) {
      width: ${(props) =>
        props.type === "icons" ? props.width - 10 : props.width - 20}px;
      height: ${(props) =>
        props.type === "icons" ? props.height - 10 : props.height - 15}px;
    }

    @media (max-height: ${(props) => props.theme.sizesHeight.heightS}px) {
      width: ${(props) =>
        props.type === "icons" ? props.width - 15 : props.width - 30}px;
      height: ${(props) =>
        props.type === "icons" ? props.height - 15 : props.height - 25}px;
    }
  }
`;
