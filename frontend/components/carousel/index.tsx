import React, { ReactNode, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import ArrowSingle from "../arrowSingle";

import {
  ArrowSingleWrapper,
  DotItem,
  Inner,
  Wrapper,
  WrapperDots,
  WrapperItem,
} from "./style";

interface ICarouselItem {
  children: ReactNode;
  width?: number;
}

export const CarouselItem = ({ children, width }: ICarouselItem) => {
  return <WrapperItem style={{ width: width }}>{children}</WrapperItem>;
};

interface IDots {
  length: number;
  active: number;
}

export const Dots = ({ length, active }: IDots) => {
  return (
    <WrapperDots>
      {Array.from({ length: length }).map((_, index) => (
        <DotItem key={index} active={active === index} />
      ))}
    </WrapperDots>
  );
};

interface ICarousel {
  children: ReactNode;
}

const Carousel = ({ children }: ICarousel) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <Wrapper
      {...handlers}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <ArrowSingleWrapper direction="LEFT">
        <ArrowSingle
          direction="LEFT"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        />
      </ArrowSingleWrapper>

      <Inner style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child: any, index) => {
          return React.cloneElement(child, { width: "66%" });
        })}
      </Inner>
      <ArrowSingleWrapper direction="RIGHT">
        <ArrowSingle
          direction="RIGHT"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        />
      </ArrowSingleWrapper>

      <Dots length={3} active={activeIndex} />
    </Wrapper>
  );
};

export default Carousel;
