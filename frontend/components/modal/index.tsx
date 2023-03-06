import React, { ReactNode } from "react";

import { Close, Wrapper, Background } from "./style";

interface IModal {
  children: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

const Modal = ({ children, isOpen, toggle }: IModal) => {
  return (
    <Wrapper isOpen={isOpen}>
      <Background />
      <Close onClick={toggle} />
      {children}
    </Wrapper>
  );
};

export default Modal;
