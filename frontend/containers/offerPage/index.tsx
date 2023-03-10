import React, { useState } from "react";

import Image from "next/image";

import {
  Card,
  CardWrapper,
  Headline,
  Wrapper,
  Background,
  Text,
  Description,
} from "./style";
import { useTheme } from "styled-components";
import ArrowWrapper from "../../components/arrowWrapper";
import Carousel, { CarouselItem } from "../../components/carousel";
import { useWindowResize } from "../../hooks/useWindowResize";
import { getBreakpoint } from "../../utils/getCurrentBreakPoint";
import MainHeadline from "../../components/headine";
import Modal from "../../components/modal";
import useModal from "../../hooks/useModal";
import ModalContent from "./modalContent";
import Button from "../../components/button";

interface IModalInner {
  currentCard: number;
}

const ModalInner = ({ currentCard }: IModalInner) => {
  const theme = useTheme();

  const data = [
    "Jeśli macie trudności z matematyką, a jednocześnie szukacie nauczyciela, który pozwoli Wam zrozumieć trudne zagadnienia w ciekawy sposób, to dobrze trafiliście! Jesteśmy zespołem pasjonatów matematyki i chcielibyśmy pomóc Wam w opanowaniu tej przedmiotu.",
    "Nasza nauczycielka skutecznie pomoże Wam w odrabianiu prac domowych, przyswojeniu wiedzy oraz rozwiązaniu trudnych zadań. Jej podejście do nauki jest ciekawe, przystępne i opiera się na rozumieniu matematycznych zasad i związków.",
    "Jeśli macie trudności z matematyką, a jednocześnie szukacie nauczyciela, który pozwoli Wam zrozumieć trudne zagadnienia w ciekawy sposób, to dobrze trafiliście! Jesteśmy zespołem pasjonatów matematyki i chcielibyśmy pomóc Wam w opanowaniu tej przedmiotu.",
  ];

  return (
    <ModalContent>
      <Description>{data[currentCard]}</Description>
      <Button
        sizes={{
          widthMobile: 320,
          heightMobile: 72,
          widthDesktop: 450,
          heightDesktop: 100,
        }}
        fontSizes={{
          mobile: "17px/20px",
          laptop: "20px/23px",
          laptopL: "22px/26px",
          laptopXL: "24px/29px",
        }}
        type="button"
        onClick={() => {
          console.log("lodd");
        }}
        color={theme.palette.common.yellow}
      >
        Sprawdz wolne terminy
      </Button>
    </ModalContent>
  );
};

const OfferPage = () => {
  const { isOpen, toggle } = useModal();
  const [currentCard, setCurrentCard] = useState<number>(-1);
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
      <MainHeadline text="Oferta" />
      <Carousel isModal={isOpen && !isLaptop} disable={isLaptop}>
        {data.map((item, index) => (
          <CarouselItem
            key={index}
            disable={isLaptop}
            isModal={isOpen && !isLaptop}
          >
            {index === 0 && isLaptop && (
              <Modal isOpen={isOpen} toggle={toggle}>
                <ModalInner currentCard={currentCard} />
              </Modal>
            )}
            <CardWrapper
              isModal={isOpen && !isLaptop}
              isOpen={isOpen}
              isAnimation={index === currentCard}
            >
              <Card
                isOpen={isOpen}
                isAnimation={index === currentCard}
                index={index}
                isModal={isOpen && !isLaptop}
                onClick={() => {
                  toggle();
                  setCurrentCard(index);
                }}
              >
                <Image
                  alt={item.alt}
                  src={item.src}
                  width={item.width[getBreakpoint(windowSize[0])!]}
                  height={item.height[getBreakpoint(windowSize[0])!]}
                />
              </Card>
              <Headline
                isModal={isOpen && !isLaptop}
                isOpen={isOpen}
                isAnimation={index === currentCard}
                index={index}
                color={item.color}
              >
                {item.headlineText}
              </Headline>
              <Text
                isModal={isOpen && !isLaptop}
                index={index}
                isOpen={isOpen}
                isAnimation={index === currentCard}
              >
                {item.text}
              </Text>
              {isOpen && !isLaptop && index === currentCard && (
                <ModalInner currentCard={currentCard} />
              )}
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
