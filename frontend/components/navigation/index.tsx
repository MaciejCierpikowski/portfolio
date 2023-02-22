import React from "react";

import { ItemElement, Wrapper } from "./style";
import Image from "next/image";
import { useAppSelector } from "../../hooks/redux";

interface INavigation {}

const Navigation = ({}: INavigation) => {
  const items = [
    {
      name: "Główna",
    },
    {
      name: "Oferta",
    },
    {
      name: "Harmonogram",
    },
    {
      name: "Opinie",
    },
    {
      name: "Kontakt",
    },
  ];

  const scrollDown = useAppSelector((state) => state.general.scrollDown);

  console.log(scrollDown, "scrollDown");
  return (
    <Wrapper isFixed={scrollDown}>
      <Image
        alt="logo"
        src="/assets/logo.svg"
        width={scrollDown ? 150 : 297}
        height={scrollDown ? 50 : 100}
      />
      {items.map((item, index) => (
        <ItemElement
          style={index === 0 && scrollDown ? { marginLeft: "100px" } : {}}
          isFixed={scrollDown}
          key={item.name}
        >
          {item.name}
        </ItemElement>
      ))}
    </Wrapper>
  );
};

export default Navigation;
