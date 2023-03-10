import React, { useState } from "react";

import {
  Hamburger,
  ItemElement,
  Wrapper,
  BlackBackground,
  MenuWrapper,
} from "./style";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useWindowResize } from "../../hooks/useWindowResize";
import animatedScrollTo from "../../utils/animated-scroll-to";
import { setActiveSlide, toggleScrollDown } from "../../store/generalState";
import { menuItems } from "../../utils/menu";

interface INavigation {}

const NavigationMobile = ({}: INavigation) => {
  const scrollDown = useAppSelector((state) => state.general.scrollDown);
  const dispatch = useAppDispatch();
  const [isNavOpen, setIsNavOpen] = useState<any>(undefined);

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

  const handleHamburger = () => {
    isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true);
  };

  return (
    <>
      <Wrapper isNavOpen={isNavOpen}>
        <Image alt="logo" src="/assets/logo.svg" width={120} height={40} />
        <Hamburger isNavOpen={isNavOpen} onClick={handleHamburger}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
      </Wrapper>
      <MenuWrapper isNavOpen={isNavOpen}>
        {menuItems.map((item, index) => (
          <ItemElement
            key={item.name}
            onClick={() => {
              scrollToSlide(index);
              handleHamburger();
            }}
            isNavOpen={isNavOpen}
            index={index + 1}
          >
            {item.name}
          </ItemElement>
        ))}
      </MenuWrapper>
      <BlackBackground isNavOpen={isNavOpen} />
    </>
  );
};

export default NavigationMobile;
