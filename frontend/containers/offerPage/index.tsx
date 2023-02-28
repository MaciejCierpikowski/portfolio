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

const OfferPage = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <HeaderWrapper>
        <Line></Line>
        <Header>Oferta</Header>
      </HeaderWrapper>

      <Carousel>
        <CarouselItem>
          <CardWrapper>
            <Card>
              <Image
                alt="image_pomogę"
                src="/assets/image_pomogę.png"
                // fill
                // width={400}
                // height={320}
                width={220}
                height={180}
              />
            </Card>
            <Headline color={theme.palette.common.green}>Pomogę</Headline>
            <Text>w odrabianiu prac domowych</Text>
          </CardWrapper>
        </CarouselItem>
        <CarouselItem>
          <CardWrapper>
            <Card>
              <Image
                alt="image_przygotuję"
                src="/assets/image_przygotuję.svg"
                // fill
                // width={400}
                // height={331}
                width={220}
                height={180}
              />
            </Card>
            <Headline color={theme.palette.common.orange}>Przygotuję</Headline>
            <Text>do egzaminu 8 klasisty</Text>
          </CardWrapper>
        </CarouselItem>
        <CarouselItem>
          <CardWrapper>
            <Card>
              <Image
                alt="image_nauczę"
                src="/assets/image_nauczę.svg"
                // fill
                // width={301}
                // height={359}
                width={220}
                height={180}
              />
            </Card>
            <Headline color={theme.palette.common.red}>Nauczę</Headline>
            <Text>materiału do prac klasowych</Text>
          </CardWrapper>
        </CarouselItem>
      </Carousel>

      <Background />
      <ArrowWrapper />
    </Wrapper>
  );
};

export default OfferPage;
