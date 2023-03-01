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

  margin: 0 ${({ disable }) => (disable ? "1.8%" : "17%")};
`;

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

export const Inner = styled.div<Props>`
  white-space: nowrap;
  transition: transform 0.3s;

  ${({ disable }) =>
    disable &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const ArrowSingleWrapper = styled.div<Props>`
  position: absolute;
  top: 50%;
  transform: translateY(-100%);

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

  margin-top: 50px;
`;

export const DotItem = styled.div<Props>`
  width: 58px;
  height: 17px;
  margin: 0 5px;

  background: ${({ active }) => (active ? "black" : "white")} 0% 0% no-repeat
    padding-box;
  box-shadow: 0px 0px 16px #00000029;
  border: 1px solid #161616;
  border-radius: 15px;
  opacity: 1;
`;