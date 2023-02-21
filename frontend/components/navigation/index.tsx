import React from "react";

import { ItemElement, Wrapper } from "./style";
import Image from "next/image";

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

  return (
    <Wrapper>
      <Image alt="logo" src="/assets/logo.svg" width={297} height={100} />
      {items.map((item) => (
        <ItemElement key={item.name}>{item.name}</ItemElement>
      ))}
    </Wrapper>
  );
};

export default Navigation;
