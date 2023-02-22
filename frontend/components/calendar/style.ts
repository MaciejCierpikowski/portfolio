import styled from "styled-components";

export const Wrapper = styled.div`
  border-left-width: 1px;

  border-top-width: 1px;

  width: 400px;
`;

export const WrapperGrid = styled.div`
  text-align: center;

  justify-content: center;

  align-items: center;

  grid-template-columns: repeat(7, minmax(0, 1fr));

  display: grid;
`;

export const CellItem = styled.div`
  border-right-width: 1px;

  border-bottom-width: 1px;

  justify-content: center;

  align-items: center;

  user-select: none;

  cursor: pointer;

  height: 2.5rem;

  display: flex;
`;
