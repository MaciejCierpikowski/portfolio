import styled from "styled-components";

export const Wrapper = styled.button`
  background-color: ${(props) => props.theme.palette.common.orange};
  border-radius: 20px;
  border: none;
  padding: 15px 15px;
  cursor: pointer;
  outline: inherit;
  width: fit-content;
  color: ${(props) => props.theme.palette.common.white};
  font-size: 1rem;
  margin: 10px 0;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.palette.common.gray};
  -webkit-text-fill-color: ${(props) => props.theme.palette.common.white};
  letter-spacing: 1px;
`;
