import React, { ReactNode } from "react";

import Image from "next/image";

import { WrapperModalContent, ChildrenInner } from "./style";
import { useTheme } from "styled-components";

interface IModalContent {
  isOpen?: boolean;
  children: ReactNode;
}

const ModalContent = ({ isOpen, children }: IModalContent) => {
  const theme = useTheme();

  return <ChildrenInner isOpen={isOpen}>{children}</ChildrenInner>;
};

export default ModalContent;
