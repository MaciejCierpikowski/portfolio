import React from "react";

import Image from "next/image";

import Arrow from "../../components/arrow";

import {
  Card,
  Cards,
  CardWrapper,
  Headline,
  Wrapper,
  Background,
  Text,
  ArrowWrapper,
  Line,
  Header,
  HeaderWrapper,
} from "./style";
import { useTheme } from "styled-components";

const OfferPage = () => {
  const theme = useTheme();

  console.log(theme, "theme");
  return (
    <Wrapper>
      <HeaderWrapper>
        <Line></Line>
        <Header>Oferta</Header>
      </HeaderWrapper>

      <Cards>
        <CardWrapper>
          <Card>
            <Image
              alt="image_pomogę"
              src="/assets/image_pomogę.png"
              width={400}
              height={320}
            />
          </Card>
          <Headline color={theme.palette.common.green}>Pomogę</Headline>
          <Text>w odrabianiu prac domowych</Text>
        </CardWrapper>
        <CardWrapper>
          <Card>
            <Image
              alt="image_przygotuję"
              src="/assets/image_przygotuję.svg"
              width={400}
              height={331}
            />
          </Card>
          <Headline color={theme.palette.common.orange}>Przygotuję</Headline>
          <Text>do egzaminu 8 klasisty</Text>
        </CardWrapper>
        <CardWrapper>
          <Card>
            <Image
              alt="image_nauczę"
              src="/assets/image_nauczę.svg"
              width={301}
              height={359}
            />
          </Card>
          <Headline color={theme.palette.common.red}>Nauczę</Headline>
          <Text>materiału do prac klasowych</Text>
        </CardWrapper>
        <Background />
      </Cards>
      <ArrowWrapper>
        <Arrow direction="DOWN" />
        <Arrow direction="UP" />
      </ArrowWrapper>
    </Wrapper>
  );
};

export default OfferPage;
