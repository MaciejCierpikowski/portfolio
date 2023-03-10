import React from "react";
import Image from "next/image";

import {
  Wrapper,
  HeadlineWrapper,
  Headline,
  Line,
  ImageWrapper,
  HeadlineInner,
  FeedbackWrapper,
  CardWrapper,
  DescriptionWrapper,
  Description,
  Name,
} from "./style";
import Button from "../../components/button";
import { useWindowResize } from "../../hooks/useWindowResize";
import { getBreakpoint } from "../../utils/getCurrentBreakPoint";
import { useTheme } from "styled-components";
import Carousel, { CarouselItem } from "../../components/carousel";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setActiveSlide, toggleScrollDown } from "../../store/generalState";
import animatedScrollTo from "../../utils/animated-scroll-to";
import ArrowWrapper from "../../components/arrowWrapper";

const Feedback = () => {
  const windowSize = useWindowResize();
  const theme = useTheme();
  const isLaptop = windowSize[0] >= theme.sizes.laptop;

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

  const data = {
    icons: {
      width: {
        isLaptopXL: 162,
        isLaptopL: 150,
        isLaptop: 110,
        isMobileL: 81,
        isMobileM: 81,
      },
      height: {
        isLaptopXL: 300,
        isLaptopL: 250,
        isLaptop: 200,
        isMobileL: 150,
        isMobileM: 150,
      },
    },
    box: {
      width: {
        isLaptopXL: 163,
        isLaptopL: 150,
        isLaptop: 110,
        isMobileL: 81,
        isMobileM: 81,
      },
      height: {
        isLaptopXL: 300,
        isLaptopL: 250,
        isLaptop: 200,
        isMobileL: 150,
        isMobileM: 150,
      },
    },
    opinion: {
      width: {
        isLaptopXL: 585,
        isLaptopL: 450,
        isLaptop: 320,
        isMobileL: 245,
        isMobileM: 245,
      },
      height: {
        isLaptopXL: 390,
        isLaptopL: 300,
        isLaptop: 250,
        isMobileL: 163,
        isMobileM: 163,
      },
    },
  };

  const feedbacks = [
    {
      name: "Kacper",
      opinion:
        "Zdecydowanie polecam Panią. Zajęcia są dobrze przygotowane i przeprowadzane w sposób zrozumiały dla uczniów. Dzięki Pani pomocy zdałem egzamin na wysokim poziomie.",
    },
    {
      name: "Kasia",
      opinion:
        "Jestem bardzo zadowolona z korepetycji prowadzonych przez Panią. Dzięki niej moje oceny znacznie się poprawiły. Polecam z całego serca!",
    },
    {
      name: "Zosia",
      opinion:
        "Z Panią każde zadanie staje się łatwe! Polecam jej usługi każdemu uczniowi. Dzięki jej pomocy moje wyniki w nauce znacznie się poprawiły.",
    },
  ];

  return (
    <Wrapper>
      <HeadlineWrapper>
        <HeadlineInner>
          <ImageWrapper left>
            <Image
              alt="feedback"
              src="/assets/feedback_left.svg"
              width={data.icons.width[getBreakpoint(windowSize[0])!]}
              height={data.icons.height[getBreakpoint(windowSize[0])!]}
            />
          </ImageWrapper>
          <ImageWrapper right>
            <Image
              alt="feedback"
              src="/assets/feedback_right.svg"
              width={data.box.width[getBreakpoint(windowSize[0])!]}
              height={data.box.height[getBreakpoint(windowSize[0])!]}
            />
          </ImageWrapper>
          <Line />
          <Headline>Opinie</Headline>
        </HeadlineInner>
        <Button
          type="button"
          sizes={{
            heightDesktop: 100,
            widthDesktop: 500,
            heightMobile: 50,
            widthMobile: 250,
          }}
          fontSizes={{
            mobile: "18px/22px",
            laptop: "24px/28px",
            laptopL: "30px/36px",
            laptopXL: "36px/44px",
          }}
          onClick={() => scrollToSlide(2)}
          color={theme.palette.common.ping}
        >
          SPRAWDŹ TERMINY
        </Button>
      </HeadlineWrapper>
      <FeedbackWrapper>
        <Carousel
          initActiveIndex={1}
          disable={false}
          color={theme.palette.common.ping}
          width={isLaptop ? 70 : 100}
        >
          {feedbacks.map((item, index) => (
            <CarouselItem key={index} disable={isLaptop} margin="0%">
              <CardWrapper>
                <DescriptionWrapper>
                  <Name>{item.name}</Name>
                  <Description>{item.opinion}</Description>
                </DescriptionWrapper>

                <Image
                  alt="feedback"
                  src="/assets/feedback_opinion.svg"
                  width={data.opinion.width[getBreakpoint(windowSize[0])!]}
                  height={data.opinion.height[getBreakpoint(windowSize[0])!]}
                />
              </CardWrapper>
            </CarouselItem>
          ))}
        </Carousel>
      </FeedbackWrapper>
      <ArrowWrapper />
    </Wrapper>
  );
};

export default Feedback;
