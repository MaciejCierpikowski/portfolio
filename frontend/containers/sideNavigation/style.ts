import styled from "styled-components";

export const Element = styled.div`
  cursor: pointer;
  &:hover {
    filter: brightness(0) invert(1);
  }
`;

export const Dots = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.palette.common.black};
  position: relative;

  &:before,
  :after {
    content: "";
    position: absolute;
    top: -7px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.palette.common.black};
  }

  &:after {
    top: 7px;
  }
`;

export const Wrapper = styled.div`
  height: 35vh;
  width: 50px;
  position: fixed;
  top: 50%;
  right: 5vw;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 30px;
  padding: 30px 0;
  background-color: ${(props) => props.theme.palette.common.orange};
  z-index: 1;

  @media screen and (max-width: ${(props) => props.theme.sizes.laptop}) {
    display: none;
  }
`;
