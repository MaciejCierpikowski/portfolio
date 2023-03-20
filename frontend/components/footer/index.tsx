import React from "react";
import Image from "next/image";

import {
  Wrapper,
  SocialMedia,
  SocialItem,
  Menu,
  SocialIcons,
  Privacy,
  Line,
  Text,
  Item,
} from "./style";
import { useWindowResize } from "../../hooks/useWindowResize";
import { getBreakpoint } from "../../utils/getCurrentBreakPoint";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setActiveSlide, toggleScrollDown } from "../../store/generalState";
import animatedScrollTo from "../../utils/animated-scroll-to";

const Footer = () => {
  const data = {
    image: {
      width: {
        isLaptopXL: 594,
        isLaptopL: 400,
        isLaptop: 250,
        isMobileL: 150,
        isMobileM: 150,
      },
      height: {
        isLaptopXL: 200,
        isLaptopL: 150,
        isLaptop: 100,
        isMobileL: 50,
        isMobileM: 50,
      },
    },
    icon: {
      width: {
        isLaptopXL: 32,
        isLaptopL: 24,
        isLaptop: 17,
        isMobileL: 13,
        isMobileM: 13,
      },
      height: {
        isLaptopXL: 32,
        isLaptopL: 24,
        isLaptop: 17,
        isMobileL: 13,
        isMobileM: 13,
      },
    },
  };
  const windowSize = useWindowResize();
  const scrollDown = useAppSelector((state) => state.general.scrollDown);
  const dispatch = useAppDispatch();

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
    <Wrapper>
      <SocialMedia>
        <SocialIcons>
          <SocialItem href="tel:533267344">
            <Image
              alt="phone"
              src="/assets/phone.svg"
              width={data.icon.width[getBreakpoint(windowSize[0])!]}
              height={data.icon.height[getBreakpoint(windowSize[0])!]}
            />
          </SocialItem>
          <SocialItem>
            <Image
              alt="instagram"
              src="/assets/instagram.svg"
              width={data.icon.width[getBreakpoint(windowSize[0])!]}
              height={data.icon.height[getBreakpoint(windowSize[0])!]}
            />
          </SocialItem>
          <SocialItem href="mailto:julita.klocek@interia.pl">
            <Image
              alt="mail"
              src="/assets/mail.svg"
              width={data.icon.width[getBreakpoint(windowSize[0])!]}
              height={data.icon.height[getBreakpoint(windowSize[0])!]}
            />
          </SocialItem>
        </SocialIcons>
        <Privacy>
          <Line />
          <Text>2023 ® Matematyka z pasja</Text>
        </Privacy>
      </SocialMedia>
      <Image
        alt="logo"
        src="/assets/logo.svg"
        width={data.image.width[getBreakpoint(windowSize[0])!]}
        height={data.image.height[getBreakpoint(windowSize[0])!]}
      />
      <Menu>
        <Item onClick={() => scrollToSlide(0)}>Główna</Item>
        <Item onClick={() => scrollToSlide(1)}>Oferta</Item>
        <Item onClick={() => scrollToSlide(2)}>Harmonogram</Item>
        <Item onClick={() => scrollToSlide(3)}>Opinie</Item>
        <Item onClick={() => scrollToSlide(4)}>Kontakt</Item>
      </Menu>
    </Wrapper>
  );
};

export default Footer;
