import React from "react";

import { Wrapper } from "./style";

interface IArrow {
  direction: "UP" | "DOWN";
}

const Arrow = ({ direction }: IArrow) => (
  <Wrapper direction={direction}>
    <span></span>
    <span></span>
    <span></span>
  </Wrapper>
);

export default Arrow;
