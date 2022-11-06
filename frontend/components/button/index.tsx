import React, { ReactNode } from "react";

import { Wrapper } from "./style";

interface IButton {
  children: ReactNode;
}

const Button = ({ children }: IButton) => <Wrapper>{children}</Wrapper>;

export default Button;
