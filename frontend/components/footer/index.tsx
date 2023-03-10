import React from "react";
import Image from "next/image";

import {
  Wrapper,
  SocialMedia,
  SocialItem,
  Menu,
  SocialIcons,
  Privacy,
  Line,
  Text,
  Item,
} from "./style";
import { useWindowResize } from "../../hooks/useWindowResize";
import { getBreakpoint } from "../../utils/getCurrentBreakPoint";

const Footer = () => {
  const data = {
    image: {
      width: {
        isLaptopXL: 594,
        isLaptopL: 400,
        isLaptop: 250,
        isMobileL: 150,
        isMobileM: 150,
      },
      height: {
        isLaptopXL: 200,
        isLaptopL: 150,
        isLaptop: 100,
        isMobileL: 50,
        isMobileM: 50,
      },
    },
    icon: {
      width: {
        isLaptopXL: 32,
        isLaptopL: 24,
        isLaptop: 17,
        isMobileL: 13,
        isMobileM: 13,
      },
      height: {
        isLaptopXL: 32,
        isLaptopL: 24,
        isLaptop: 17,
        isMobileL: 13,
        isMobileM: 13,
      },
    },
  };
  const windowSize = useWindowResize();

  return (
    <Wrapper>
      <SocialMedia>
        <SocialIcons>
          <SocialItem>
            <Image
              alt="instagram"
              src="/assets/phone.svg"
              width={data.icon.width[getBreakpoint(windowSize[0])!]}
              height={data.icon.height[getBreakpoint(windowSize[0])!]}
            />
          </SocialItem>
          <SocialItem>
            <Image
              alt="instagram"
              src="/assets/instagram.svg"
              width={data.icon.width[getBreakpoint(windowSize[0])!]}
              height={data.icon.height[getBreakpoint(windowSize[0])!]}
            />
          </SocialItem>
          <SocialItem>
            <Image
              alt="instagram"
              src="/assets/mail.svg"
              width={data.icon.width[getBreakpoint(windowSize[0])!]}
              height={data.icon.height[getBreakpoint(windowSize[0])!]}
            />
          </SocialItem>
        </SocialIcons>
        <Privacy>
          <Line />
          <Text>2023 ® Matematyka z pasja</Text>
        </Privacy>
      </SocialMedia>
      <Image
        alt="logo"
        src="/assets/logo.svg"
        width={data.image.width[getBreakpoint(windowSize[0])!]}
        height={data.image.height[getBreakpoint(windowSize[0])!]}
      />
      <Menu>
        <Item>Główna</Item>
        <Item>Oferta</Item>
        <Item>Harmonogram</Item>
        <Item>Opinie</Item>
        <Item>Kontakt</Item>
      </Menu>
    </Wrapper>
  );
};

export default Footer;
