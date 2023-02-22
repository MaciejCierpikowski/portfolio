import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useWindowResize } from "../../hooks/useWindowResize";
import { setActiveSlide, toggleScrollDown } from "../../store/generalState";
import animatedScrollTo from "../../utils/animated-scroll-to";

import { Wrapper } from "./style";

interface IArrow {
  direction: "UP" | "DOWN";
}

const Arrow = ({ direction }: IArrow) => {
  const scrollDown = useAppSelector((state) => state.general.scrollDown);
  const activeSlide = useAppSelector((state) => state.general.activeSlide);

  const dispatch = useAppDispatch();

  const windowSize = useWindowResize();

  const scrollToSlide = (index: number) => {
    if (index === 0) {
      dispatch(toggleScrollDown());
    } else {
      !scrollDown && dispatch(toggleScrollDown());
    }
    dispatch(setActiveSlide(index));
    animatedScrollTo(index * windowSize[1], () => {});
  };

  return (
    <Wrapper
      direction={direction}
      onClick={() =>
        scrollToSlide(direction === "UP" ? activeSlide - 1 : activeSlide + 1)
      }
    >
      <span></span>
      <span></span>
      <span></span>
    </Wrapper>
  );
};

export default Arrow;
