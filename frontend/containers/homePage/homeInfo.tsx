import React from "react";

import Image from "next/image";

import {
  Header,
  HeaderWrapper,
  ImageWrapper,
  Line,
  SubHeader,
  WrapperInfo,
} from "./style";
import { useTheme } from "styled-components";

const HomeInfo = () => {
  const theme = useTheme();

  return (
    <WrapperInfo>
      <ImageWrapper
        leftOffset={19}
        leftOffsetMobile={-11}
        topOffset={4}
        width={43}
      >
        <Image alt="logo" src="/assets/home_image_left.svg" fill />
        <Line />
      </ImageWrapper>

      <HeaderWrapper>
        <Header>
          POMAGAM W MATEMATYCE
          <SubHeader>z pasją!</SubHeader>
        </Header>
      </HeaderWrapper>
      <ImageWrapper
        leftOffset={-47}
        leftOffsetMobile={0}
        topOffset={3}
        width={52}
      >
        <Image alt="logo" src="/assets/home_image_right.svg" fill />
        <Line />
      </ImageWrapper>
    </WrapperInfo>
  );
};

export default HomeInfo;
