import React from "react";
import Image from "next/image";

import { Wrapper, Text } from "./style";

interface ILandscapePage {
  display: boolean;
}

const LandscapePage = ({ display }: ILandscapePage) => {
  return (
    <Wrapper display={display}>
      <Image alt="rotate" src="/assets/rotate.svg" width={106} height={106} />
      <Text>Obróć swój telefon</Text>
    </Wrapper>
  );
};

export default LandscapePage;
