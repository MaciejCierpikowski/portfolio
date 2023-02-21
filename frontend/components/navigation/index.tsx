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

  console.log(scrollDown, 'scrollDown');
  return (
    <Wrapper >
      <Image alt="logo" src="/assets/logo.svg" width={scrollDown ? 100 : 297} height={scrollDown ? 500 : 100} />
      {items.map((item) => (
        <ItemElement key={item.name}>{item.name}</ItemElement>
      ))}
    </Wrapper>
  );
};

export default Navigation;
