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

const Feedback = () => {
  const windowSize = useWindowResize();
  const theme = useTheme();
  const isLaptop = windowSize[0] >= theme.sizes.laptop;

  const data = {
    icons: {
      width: { isLaptopXL: 162, isLaptopL: 150, isLaptop: 110, isMobile: 81 },
      height: { isLaptopXL: 300, isLaptopL: 250, isLaptop: 200, isMobile: 150 },
    },
    box: {
      width: { isLaptopXL: 163, isLaptopL: 150, isLaptop: 110, isMobile: 81 },
      height: { isLaptopXL: 300, isLaptopL: 250, isLaptop: 200, isMobile: 150 },
    },
    opinion: {
      width: { isLaptopXL: 585, isLaptopL: 450, isLaptop: 320, isMobile: 245 },
      height: { isLaptopXL: 390, isLaptopL: 300, isLaptop: 250, isMobile: 163 },
    },
  };

  const feedbacks = [
    {
      name: "Kacper",
      opinion:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
    },
    {
      name: "Kacper",
      opinion:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
    },
    {
      name: "Kacper",
      opinion:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
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
            widthMobile: 150,
          }}
          fontSizes={{
            mobile: "36px/44px",
            laptop: "36px/44px",
            laptopL: "36px/44px",
            laptopXL: "36px/44px",
          }}
          onClick={() => {
            console.log("ddd");
          }}
          color={theme.palette.common.ping}
        >
          SPRAWDŹ TERMINY
        </Button>
      </HeadlineWrapper>
      <FeedbackWrapper>
        <Carousel disable={false}>
          {feedbacks.map((item, index) => (
            <CarouselItem key={index} disable={isLaptop}>
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
    </Wrapper>
  );
};

export default Feedback;
