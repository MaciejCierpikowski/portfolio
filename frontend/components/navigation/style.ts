import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  height: 200px;
  padding-left: 140px;
  margin: 0;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 16px #00000029;
`;
export const ItemElement = styled.li`
  color: ${(props) => props.theme.palette.common.green};
  font: normal normal bold 36px/44px Montserrat;
  letter-spacing: 0px;
  padding: 0 25px;
`;
