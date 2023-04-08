import styled, { css } from "styled-components";

interface Props {
  small?: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  text-align: center;
`;

export const Inner = styled.div`
  width: 100%;
  height: 67%;

  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    height: 70%;
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;

  font: normal normal 300 17px/20px var(--font-montserrat);
  letter-spacing: 0px;
  color: ${(props) => props.theme.palette.common.black};

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    padding: 10px 0;
  }
`;

export const Header = styled.p`
  font: normal normal bold 20px/24px var(--font-montserrat);

  letter-spacing: 0px;
  color: ${(props) => props.theme.palette.common.orange};
  text-transform: uppercase;
  opacity: 1;

  margin: 20px auto;
  width: 72%;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    font: normal normal bold 36px/44px var(--font-montserrat);
    margin: 50px 0;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;

  margin: 40px auto;

  &:first-child {
    margin: 0 auto 40px auto;
  }

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: 70%;
  }
`;

export const Hour = styled.span`
  font: normal normal 300 20px/24px var(--font-montserrat);

  letter-spacing: 0px;
  color: ${(props) => props.theme.palette.common.black};

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    font: normal normal 300 36px/44px var(--font-montserrat);
  }
`;

export const Frame = styled.div`
  height: 30px;
  width: 65%;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #00000029;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    height: 70px;
    width: 80%;
  }
`;

export const AddButton = styled.div<Props>`
  position: relative;
  width: 25px;
  height: 25px;

  cursor: pointer;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    width: 45px;
    height: 45px;
  }

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: " ";

    height: 25px;
    width: 4px;
    background-color: ${(props) => props.theme.palette.common.orange};

    @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
      height: 45px;
      width: 6px;
    }
  }
  &:before {
    transform: rotate(90deg);
  }
  &:after {
    transform: rotate(0deg);
  }

  ${({ small }) =>
    small &&
    css`
      width: 15px;
      height: 15px;
      margin-right: 10px;

      @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
        width: 25px;
        height: 25px;
      }

      &:before,
      &:after {
        left: 10px;

        height: 15px;
        width: 2px;

        @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
          height: 25px;
          width: 4px;
        }
      }
    `}
`;
