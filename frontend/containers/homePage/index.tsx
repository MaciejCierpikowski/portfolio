import React from "react";
import Arrow from "../../components/arrow";
import Button from "../../components/button";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useWindowResize } from "../../hooks/useWindowResize";
import { setActiveSlide, toggleScrollDown } from "../../store/generalState";
import animatedScrollTo from "../../utils/animated-scroll-to";

import HomeInfo from "./homeInfo";

import { BottomRectangle, Wrapper } from "./style";

const HomePage = () => {
  const scrollDown = useAppSelector((state) => state.general.scrollDown);

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
    <Wrapper>
      <HomeInfo />
      <BottomRectangle>
        <Button onClick={() => scrollToSlide(1)}>Sprawdź!</Button>
        <Arrow direction="DOWN" />
      </BottomRectangle>
    </Wrapper>
  );
};

export default HomePage;
