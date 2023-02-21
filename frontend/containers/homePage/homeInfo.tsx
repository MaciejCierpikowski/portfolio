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

const HomeInfo = () => {
  return (
    <WrapperInfo>
      <ImageWrapper topOffset={3}>
        <Image
          alt="logo"
          src="/assets/home_image_left.svg"
          width={178}
          height={200}
        />
        <Line />
      </ImageWrapper>

      <HeaderWrapper>
        <Header>POMAGAM W MATEMATYCE</Header>
        <SubHeader>z pasją!</SubHeader>
      </HeaderWrapper>
      <ImageWrapper topOffset={15}>
        <Image
          alt="logo"
          src="/assets/home_image_right.svg"
          width={195}
          height={200}
        />
        <Line />
      </ImageWrapper>
    </WrapperInfo>
  );
};

export default HomeInfo;
