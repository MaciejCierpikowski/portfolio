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
  Content,
} from "./style";

interface ICarouselItem {
  children: ReactNode;
  width?: number;
  disable: boolean;
  margin?: string;
}

export const CarouselItem = ({
  children,
  width,
  disable,
  margin,
}: ICarouselItem) => {
  return (
    <WrapperItem margin={margin} disable={disable} style={{ width: width }}>
      {children}
    </WrapperItem>
  );
};

interface IDots {
  length: number;
  active: number;
  color?: string;
}

export const Dots = ({ length, active, color }: IDots) => {
  return (
    <WrapperDots className="dots">
      {Array.from({ length: length }).map((_, index) => (
        <DotItem key={index} active={active === index} color={color} />
      ))}
    </WrapperDots>
  );
};

interface ICarousel {
  children: ReactNode;
  disable: boolean;
  isModal?: boolean;
  color?: string;
  initActiveIndex?: number;
  width?: number;
  movePerecentProp?: number;
}

const Carousel = ({
  children,
  disable,
  isModal,
  color,
  initActiveIndex = 0,
  width,
  movePerecentProp,
}: ICarousel) => {
  const [activeIndex, setActiveIndex] = useState(initActiveIndex);
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

  useEffect(() => {
    if (disable) return;

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

  const widthBreakpoints = {
    isLaptopXL: 26,
    isLaptopL: 26,
    isLaptop: 30,
    isMobileL: 0,
    isMobileM: 0,
  };
  console.log(movePerecentProp, "movePerecentProp");
  const movePerecent =
    movePerecentProp || (Number(width) ? Number(width) : 100);
  console.log(movePerecent, "movePerecent");

  return (
    <Wrapper
      {...(!disable && handlers)}
      {...(!disable && { onMouseEnter: () => setPaused(true) })}
      {...(!disable && { onMouseLeave: () => setPaused(false) })}
    >
      <Content>
        {!disable && !isModal && (
          <ArrowSingleWrapper direction="LEFT" className="left">
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
          className="inner"
          style={{ transform: `translateX(-${activeIndex * movePerecent}%)` }}
        >
          {React.Children.map(children, (child: any, index) => {
            return React.cloneElement(child, {
              width: disable
                ? widthBreakpoints[getBreakpoint(windowSize[0])!] + "%"
                : width
                ? width + "%"
                : "66%",
            });
          })}
        </Inner>
        {!disable && !isModal && (
          <ArrowSingleWrapper direction="RIGHT" className="right">
            <ArrowSingle
              direction="RIGHT"
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
            />
          </ArrowSingleWrapper>
        )}
      </Content>

      {!disable && <Dots color={color} length={3} active={activeIndex} />}
    </Wrapper>
  );
};

export default Carousel;
