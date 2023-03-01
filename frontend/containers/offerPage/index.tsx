import React from "react";

import Image from "next/image";

import {
  Card,
  CardWrapper,
  Headline,
  Wrapper,
  Background,
  Text,
  Line,
  Header,
  HeaderWrapper,
} from "./style";
import { useTheme } from "styled-components";
import ArrowWrapper from "../../components/arrowWrapper";
import Carousel, { CarouselItem } from "../../components/carousel";
import { useWindowResize } from "../../hooks/useWindowResize";
import { getBreakpoint } from "../../utils/getCurrentBreakPoint";

const OfferPage = () => {
  const theme = useTheme();
  const windowSize = useWindowResize();

  const isLaptop = windowSize[0] >= theme.sizes.laptop;

  const data = [
    {
      alt: "image_pomogę",
      src: "/assets/image_pomogę.png",
      width: { isLaptopXL: 400, isLaptopL: 320, isLaptop: 290, isMobile: 220 },
      height: { isLaptopXL: 320, isLaptopL: 250, isLaptop: 250, isMobile: 180 },
      color: theme.palette.common.green,
      headlineText: "Pomogę",
      text: "w odrabianiu prac domowych",
    },
    {
      alt: "image_przygotuję",
      src: "/assets/image_przygotuję.svg",
      width: { isLaptopXL: 400, isLaptopL: 320, isLaptop: 290, isMobile: 220 },
      height: { isLaptopXL: 331, isLaptopL: 255, isLaptop: 255, isMobile: 180 },
      color: theme.palette.common.orange,
      headlineText: "Przygotuję",
      text: "do egzaminu 8 klasisty",
    },
    {
      alt: "image_nauczę",
      src: "/assets/image_nauczę.svg",
      width: { isLaptopXL: 301, isLaptopL: 260, isLaptop: 260, isMobile: 220 },
      height: { isLaptopXL: 359, isLaptopL: 270, isLaptop: 270, isMobile: 180 },
      color: theme.palette.common.red,
      headlineText: "Nauczę",
      text: "materiału do prac klasowych",
    },
  ];

  return (
    <Wrapper>
      <HeaderWrapper>
        <Line></Line>
        <Header>Oferta</Header>
      </HeaderWrapper>

      <Carousel disable={isLaptop}>
        {data.map((item) => (
          <CarouselItem disable={isLaptop}>
            <CardWrapper>
              <Card>
                <Image
                  alt={item.alt}
                  src={item.src}
                  width={item.width[getBreakpoint(windowSize[0])!]}
                  height={item.height[getBreakpoint(windowSize[0])!]}
                />
              </Card>
              <Headline color={item.color}>{item.headlineText}</Headline>
              <Text>{item.text}</Text>
            </CardWrapper>
          </CarouselItem>
        ))}
      </Carousel>

      <Background />
      <ArrowWrapper />
    </Wrapper>
  );
};

export default OfferPage;
