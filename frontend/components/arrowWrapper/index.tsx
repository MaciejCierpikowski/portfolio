import React from "react";

import Arrow from "../arrow";
import { Wrapper } from "./style";

const ArrowWrapper = () => {
  return (
    <Wrapper>
      <Arrow direction="DOWN" />
      <Arrow direction="UP" />
    </Wrapper>
  );
};

export default ArrowWrapper;
