import styled from "styled-components";

interface Props {
  isFixed: boolean;
}

export const Wrapper = styled.ul<Props>`
  position: fixed;
  width: 100%;
  z-index: 1;

  display: flex;
  align-items: center;
  list-style: none;
  height: ${(props) => (props.isFixed ? 9.26 : 18.5185185)}vh;

  padding-left: 140px;
  margin: 0;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 16px #00000029;
`;

export const ItemElement = styled.li<Props>`
  color: ${(props) => props.theme.palette.common.green};
  font: ${(props) =>
    props.isFixed
      ? "normal normal bold 25px/30px var(--font-montserrat)"
      : "normal normal bold 36px/44px var(--font-montserrat)"};
  letter-spacing: 0px;
  padding: 0 ${(props) => (props.isFixed ? 50 : 25)}px;

  cursor: pointer;
`;
