import React from "react";

import { Wrapper } from "./style";

interface IArrow {
  direction: "LEFT" | "RIGHT";
  onClick: () => void;
}

const ArrowSingle = ({ direction, onClick }: IArrow) => {
  return (
    <Wrapper direction={direction} onClick={onClick}>
      <span></span>
    </Wrapper>
  );
};

export default ArrowSingle;
