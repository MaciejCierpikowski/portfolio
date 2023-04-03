import React, { ReactNode } from "react";

import { Close, Wrapper, Background } from "./style";

interface IModal {
  children: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  isOutOfContent?: boolean;
  isClose?: boolean;
}

const Modal = ({
  children,
  isOpen,
  toggle,
  isOutOfContent = true,
  isClose = true,
}: IModal) => {
  return (
    <Wrapper isOpen={isOpen} isOutOfContent={isOutOfContent}>
      {isOutOfContent && <Background />}
      {isClose && <Close onClick={toggle} />}
      {children}
    </Wrapper>
  );
};

export default Modal;
