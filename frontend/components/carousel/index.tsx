import React, { ReactNode, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useWindowResize } from "../../hooks/useWindowResize";
import { getBreakpoint } from "../../utils/getCurrentBreakPoint";
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
  disable: boolean;
}

export const CarouselItem = ({ children, width, disable }: ICarouselItem) => {
  return (
    <WrapperItem disable={disable} style={{ width: width }}>
      {children}
    </WrapperItem>
  );
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
  disable: boolean;
}

const Carousel = ({ children, disable }: ICarousel) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const windowSize = useWindowResize();

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  // useEffect(() => {
  //   if (disable) return;

  //   const interval = setInterval(() => {
  //     if (!paused) {
  //       updateIndex(activeIndex + 1);
  //     }
  //   }, 3000);

  //   return () => {
  //     if (interval) {
  //       clearInterval(interval);
  //     }
  //   };
  // });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  const widthBreakpoints = {
    isLaptopXL: 26,
    isLaptopL: 26,
    isLaptop: 30,
    isMobile: 0,
  };

  return (
    <Wrapper
      {...(!disable && handlers)}
      {...(!disable && { onMouseEnter: () => setPaused(true) })}
      {...(!disable && { onMouseLeave: () => setPaused(false) })}
    >
      {!disable && (
        <ArrowSingleWrapper direction="LEFT">
          <ArrowSingle
            direction="LEFT"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          />
        </ArrowSingleWrapper>
      )}

      <Inner
        disable={disable}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child: any, index) => {
          return React.cloneElement(child, {
            width: disable
              ? widthBreakpoints[getBreakpoint(windowSize[0])!] + "%"
              : "66%",
          });
        })}
      </Inner>
      {!disable && (
        <ArrowSingleWrapper direction="RIGHT">
          <ArrowSingle
            direction="RIGHT"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          />
        </ArrowSingleWrapper>
      )}
      {!disable && <Dots length={3} active={activeIndex} />}
    </Wrapper>
  );
};

export default Carousel;
