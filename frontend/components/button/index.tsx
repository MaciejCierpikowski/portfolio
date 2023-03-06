import React, { ReactNode } from "react";

import { Wrapper } from "./style";

interface IButton {
  children: ReactNode;
  onClick: () => Promise<void> | any;
  type: "button" | "submit" | "reset" | undefined;
  sizes?: {
    widthMobile: number;
    heightMobile: number;
    widthDesktop: number;
    heightDesktop: number;
  };
}

const Button = ({
  children,
  onClick,
  type,
  sizes = {
    widthMobile: 272,
    heightMobile: 66,
    widthDesktop: 500,
    heightDesktop: 120,
  },
}: IButton) => (
  <Wrapper type={type} onClick={onClick} sizes={sizes}>
    {children}
  </Wrapper>
);

export default Button;
