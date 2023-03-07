import React, { ReactNode } from "react";

import Image from "next/image";

import { WrapperModalContent, ChildrenInner } from "./style";
import { useTheme } from "styled-components";

interface IModalContent {
  children: ReactNode;
}

const ModalContent = ({ children }: IModalContent) => {
  const theme = useTheme();

  return <ChildrenInner>{children}</ChildrenInner>;
};

export default ModalContent;
