import React, { ReactNode } from "react";

import { Close, Wrapper } from "./style";

interface IModal {
  children: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

const Modal = ({ children, isOpen, toggle }: IModal) => {

  return (
    <Wrapper isOpen={isOpen}>
      <Close onClick={toggle} />
      {children}
    </Wrapper>
  );
};

export default Modal;
