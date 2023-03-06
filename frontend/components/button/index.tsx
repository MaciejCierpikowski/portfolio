import React, { ReactNode } from "react";

import { Wrapper } from "./style";

interface IButton {
  children: ReactNode;
  onClick: () => Promise<void> | any;
  type: "button" | "submit" | "reset" | undefined;
  color?: string;
  sizes?: {
    widthMobile: number;
    heightMobile: number;
    widthDesktop: number;
    heightDesktop: number;
  };
  fontSizes?: {
    mobile: string;
    laptop: string;
    laptopL: string;
    laptopXL: string;
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
  fontSizes = {
    mobile: "19px/23px",
    laptop: "24px/30px",
    laptopL: "30px/37px",
    laptopXL: "36px/44px",
  },
  color = "#ffffff",
}: IButton) => (
  <Wrapper
    color={color}
    type={type}
    onClick={onClick}
    sizes={sizes}
    fontSizes={fontSizes}
  >
    {children}
  </Wrapper>
);

export default Button;
