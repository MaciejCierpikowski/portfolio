import React, { ReactNode } from "react";

import { Close, Wrapper, Background } from "./style";

interface IModal {
  children: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  isOutOfContent?: boolean;
}

const Modal = ({ children, isOpen, toggle, isOutOfContent = true }: IModal) => {
  return (
    <Wrapper isOpen={isOpen} isOutOfContent={isOutOfContent}>
      {isOutOfContent && <Background />}
      <Close onClick={toggle} />
      {children}
    </Wrapper>
  );
};

export default Modal;
