import styled from "styled-components";

export const Wrapper = styled.ul`
  position: fixed;
  width: 100%;
  z-index: 1;

  display: flex;
  align-items: center;
  list-style: none;
  height: 18.5185185vh;
  padding-left: 140px;
  margin: 0;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 16px #00000029;
`;

export const ItemElement = styled.li`
  color: ${(props) => props.theme.palette.common.green};
  font: normal normal bold 36px/44px var(--font-montserrat);
  letter-spacing: 0px;
  padding: 0 25px;

  cursor: pointer;
`;
