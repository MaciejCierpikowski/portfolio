import React from "react";

import { ItemElement, Wrapper } from "./style";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useWindowResize } from "../../hooks/useWindowResize";
import animatedScrollTo from "../../utils/animated-scroll-to";
import { setActiveSlide, toggleScrollDown } from "../../store/generalState";

interface INavigation {}

const Navigation = ({}: INavigation) => {
  const items = [
    {
      name: "Główna",
    },
    {
      name: "Oferta",
    },
    {
      name: "Harmonogram",
    },
    {
      name: "Opinie",
    },
    {
      name: "Kontakt",
    },
  ];

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

  return (
    <Wrapper isFixed={scrollDown}>
      <Image
        alt="logo"
        src="/assets/logo.svg"
        width={scrollDown ? 150 : 297}
        height={scrollDown ? 50 : 100}
      />
      {items.map((item, index) => (
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
