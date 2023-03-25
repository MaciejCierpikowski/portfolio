import styled from "styled-components";

interface Props {
  width?: number;
}

export const InputElement = styled.input<Props>`
  background-color: ${(props) => props.theme.palette.common.orange};
  border-bottom: ${(props) => props.theme.palette.common.black} solid 3px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  height: 24px;
  width: 100%;
  color: ${(props) => props.theme.palette.common.white};
  font: normal normal 300 16px/20px var(--font-montserrat);

  padding: 15px 0;
  margin: 15px 0;

  &::placeholder {
    color: ${(props) => props.theme.palette.common.white};
    font: normal normal 300 16px/20px var(--font-montserrat);
    @media (min-width: ${(props) => props.theme.sizes.mobileL}px) {
      font: normal normal 300 20px/24px var(--font-montserrat);
    }
    @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
      width: ${(props) => props.width}%;
      font: normal normal 300 24px/29px var(--font-montserrat);
    }
  }

  &:focus {
    outline: none;
  }

  @media (min-width: ${(props) => props.theme.sizes.mobileL}px) {
    font: normal normal 300 20px/24px var(--font-montserrat);
  }

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: ${(props) => props.width}%;
    height: 29px;
    padding: 20px 0;
    margin: 20px 0;

    font: normal normal 300 24px/29px var(--font-montserrat);
  }

  @media only screen and (min-height: ${(props) =>
      props.theme.sizesHeight.heightS}px) and (max-height: ${(props) =>
      props.theme.sizesHeight.heightL}px) {
    margin: 8px 0;
  }

  @media (max-height: ${(props) => props.theme.sizesHeight.heightS}px) {
    margin: 5px 0;
    padding: 12px 0;
  }
`;

export const TextAreaElement = styled.textarea<Props>`
  background-color: ${(props) => props.theme.palette.common.orange};
  border-bottom: ${(props) => props.theme.palette.common.black} solid 3px;
  border-top: 0;
  border-left: 0;
  border-right: 0;

  height: 50px;
  width: 100%;
  margin: 20px 0;

  resize: none;

  color: ${(props) => props.theme.palette.common.white};
  font: normal normal 300 16px/20px var(--font-montserrat);

  &::placeholder {
    color: ${(props) => props.theme.palette.common.white};
    font: normal normal 300 16px/20px var(--font-montserrat);

    @media (min-width: ${(props) => props.theme.sizes.mobileL}px) {
      font: normal normal 300 20px/24px var(--font-montserrat);
    }

    @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
      font: normal normal 300 24px/29px var(--font-montserrat);
    }
  }

  &:focus {
    outline: none;
  }

  @media (min-width: ${(props) => props.theme.sizes.mobileL}px) {
    font: normal normal 300 20px/24px var(--font-montserrat);
  }

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: ${(props) => props.width}%;
    height: 70px;

    font: normal normal 300 24px/29px var(--font-montserrat);
  }

  @media only screen and (min-height: ${(props) =>
      props.theme.sizesHeight.heightS}px) and (max-height: ${(props) =>
      props.theme.sizesHeight.heightL}px) {
    margin: 8px 0;
    height: 35px;
  }

  @media (max-height: ${(props) => props.theme.sizesHeight.heightS}px) {
    margin: 5px 0;
    padding: 0px 0;
    height: 30px;
  }
`;

export const ErrorWrapper = styled.p`
  position: absolute;
  bottom: -20px;
  font-family: var(--font-montserrat);
  font-weight: 300;
  color: darkred;
  white-space: nowrap;
  @media (max-height: ${(props) => props.theme.sizesHeight.heightL}px) {
    right: 0;
    bottom: 0;
  }
`;
