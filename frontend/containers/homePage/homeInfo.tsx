import React from "react";

import Button from "../../components/button";

import {
  Header,
  SubHeader,
  WrapperInfo,
  Text,
  Headline,
  Inline,
  SubHeaderWrapper,
} from "./style";

const HomeInfo = () => {
  return (
    <WrapperInfo>
      <Header>Cześć!</Header>
      <SubHeaderWrapper>
        <SubHeader>Jestem</SubHeader>
        <Inline>Julita</Inline>
      </SubHeaderWrapper>
      <Headline>Położna / Korepetytorka</Headline>
      <Text>
        Prowadzę korepetycje z matematyki dla klas 4-8. Przygotowuję do egzaminu
        8-klasisty. Studiowałam Położnictwo na Uniwersytecie Medycznym w Łodzi.
        Matematyką zajmuję się hobbystycznie.
      </Text>
      <Button
        onClick={() => {
          console.log("test2");
        }}
      >
        Przyjdź na korki
      </Button>
    </WrapperInfo>
  );
};

export default HomeInfo;
