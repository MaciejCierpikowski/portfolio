import styled, { css } from "styled-components";

interface Props {
  direction?: "LEFT" | "RIGHT";
  active?: boolean;
  disable?: boolean;
  color?: string;
  margin?: string;
}

export const WrapperItem = styled.div<Props>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  margin: 0 ${({ disable, margin }) => (disable ? "1.8%" : margin ?? "17%")};
`;

export const Wrapper = styled.div`
  overflow-x: clip;
  position: relative;
  height: 56%;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    height: 60%;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 75%;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    height: 100%;
  }
`;

export const Inner = styled.div<Props>`
  white-space: nowrap;
  transition: transform 0.3s;
  height: 100%;

  ${({ disable }) =>
    disable &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    height: 100%;
  }
`;

export const ArrowSingleWrapper = styled.div<Props>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  z-index: 2;

  ${({ direction }) =>
    direction === "LEFT" &&
    css`
      left: 18px;
    `}
  ${({ direction }) =>
    direction === "RIGHT" &&
    css`
      right: 18px;
    `}
`;

export const WrapperDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 70px;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    margin-top: 30px;
  }
`;

export const DotItem = styled.div<Props>`
  width: 58px;
  height: 17px;
  margin: 0 5px;

  background: ${({ active, theme, color }) =>
      active ? theme.palette.common.white : color ?? theme.palette.common.green}
    0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 16px #00000029;
  border: 1px solid #161616;
  border-radius: 15px;
  opacity: 1;
`;
