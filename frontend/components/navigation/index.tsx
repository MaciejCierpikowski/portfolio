import React from "react";

import { ItemElement, Wrapper } from "./style";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useWindowResize } from "../../hooks/useWindowResize";
import animatedScrollTo from "../../utils/animated-scroll-to";
import { setActiveSlide, toggleScrollDown } from "../../store/generalState";
import { menuItems } from "../../utils/menu";
import { getBreakpoint } from "../../utils/getCurrentBreakPoint";

interface INavigation {}

const Navigation = ({}: INavigation) => {
  const scrollDown = useAppSelector((state) => state.general.scrollDown);
  const dispatch = useAppDispatch();

  const windowSize = useWindowResize();

  const scrollToSlide = (index: number) => {
    if (index === 0) {
      dispatch(toggleScrollDown(false));
    } else {
      !scrollDown && dispatch(toggleScrollDown(true));
    }
    dispatch(setActiveSlide(index));
    animatedScrollTo(index * windowSize[1], () => {});
  };

  const data = {
    logo: {
      width: {
        isLaptopXL: scrollDown ? 150 : 297,
        isLaptopL: scrollDown ? 130 : 267,
        isLaptop: scrollDown ? 110 : 247,
        isMobileL: scrollDown ? 90 : 227,
        isMobileM: scrollDown ? 90 : 227,
      },
      height: {
        isLaptopXL: scrollDown ? 50 : 100,
        isLaptopL: scrollDown ? 40 : 80,
        isLaptop: scrollDown ? 30 : 60,
        isMobileL: scrollDown ? 20 : 40,
        isMobileM: scrollDown ? 20 : 40,
      },
    },
  };

  return (
    <Wrapper isFixed={scrollDown}>
      <Image
        alt="logo"
        src="/assets/logo.svg"
        width={data.logo.width[getBreakpoint(windowSize[0])!]}
        height={data.logo.height[getBreakpoint(windowSize[0])!]}
      />
      {menuItems.map((item, index) => (
        <ItemElement
          style={index === 0 && scrollDown ? { marginLeft: "100px" } : {}}
          isFixed={scrollDown}
          key={item.name}
          onClick={() => scrollToSlide(index)}
        >
          {item.name}
        </ItemElement>
      ))}
    </Wrapper>
  );
};

export default Navigation;
