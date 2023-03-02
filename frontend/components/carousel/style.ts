import styled from "styled-components";

interface Props {
  direction?: "LEFT" | "RIGHT";
  active?: boolean;
  disable?: boolean;
}

export const WrapperItem = styled.div<Props>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  margin: 0 ${({ disable }) => (disable ? "1.8%" : "17%")};
`;

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  height: 56%;

  @media (min-width: ${(props) => props.theme.sizes.laptop}px) {
    height: 60%;
  }
`;

export const Inner = styled.div<Props>`
  white-space: nowrap;
  transition: transform 0.3s;
  height: 80%;

  ${({ disable }) =>
    disable &&
    `
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
  transform: translateY(-215%);

  ${({ direction }) =>
    direction === "LEFT" &&
    `
    left: 18px;
  `}
  ${({ direction }) =>
    direction === "RIGHT" &&
    `
    right: 18px;
  `}
`;

export const WrapperDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
`;

export const DotItem = styled.div<Props>`
  width: 58px;
  height: 17px;
  margin: 0 5px;

  background: ${({ active, theme }) =>
      active ? theme.palette.common.white : theme.palette.common.green}
    0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 16px #00000029;
  border: 1px solid #161616;
  border-radius: 15px;
  opacity: 1;
`;
