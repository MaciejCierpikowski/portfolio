import React, { ReactNode } from "react";

import { Wrapper } from "./style";

interface IButton {
  children: ReactNode;
  onClick: () => Promise<void> | any;
}

const Button = ({ children, onClick }: IButton) => (
  <Wrapper onClick={onClick}>{children}</Wrapper>
);

export default Button;
