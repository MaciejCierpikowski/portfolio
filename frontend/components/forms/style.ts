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
  height: 29px;
  width: 100%;
  color: ${(props) => props.theme.palette.common.white};
  font: normal normal 300 24px/29px var(--font-montserrat);
  padding: 20px 0;
  margin: 20px 0;

  &::placeholder {
    color: ${(props) => props.theme.palette.common.white};
    font: normal normal 300 24px/29px var(--font-montserrat);
  }

  &:focus {
    outline: none;
  }
  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: ${(props) => props.width}%;
  }
`;

export const TextAreaElement = styled.textarea<Props>`
  background-color: ${(props) => props.theme.palette.common.orange};
  border-bottom: ${(props) => props.theme.palette.common.black} solid 3px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  height: 70px;
  width: 100%;
  color: ${(props) => props.theme.palette.common.white};
  font: normal normal 300 24px/29px var(--font-montserrat);
  margin: 20px 0;

  &::placeholder {
    color: ${(props) => props.theme.palette.common.white};
    font: normal normal 300 24px/29px var(--font-montserrat);
  }

  &:focus {
    outline: none;
  }

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: ${(props) => props.width}%;
  }
`;
