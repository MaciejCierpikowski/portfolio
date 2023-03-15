import React from "react";

import { Wrapper } from "./style";

interface IArrow {
  direction: "LEFT" | "RIGHT";
  onClick: () => void;
  className?: string;
}

const ArrowSingle = ({ direction, onClick, className }: IArrow) => {
  return (
    <Wrapper className={className} direction={direction} onClick={onClick}>
      <span></span>
    </Wrapper>
  );
};

export default ArrowSingle;
