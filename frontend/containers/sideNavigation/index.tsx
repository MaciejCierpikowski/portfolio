import React, { Fragment } from "react";

import Image from "next/image";

import { Dots, Element, Wrapper } from "./style";

const SideNavigation = () => {
  const sideNavigationItems = [
    {
      src: "/assets/home-icon.svg",
      width: 30,
      height: 30,
    },
    {
      src: "/assets/calendar.svg",
      width: 30,
      height: 30,
    },
    {
      src: "/assets/contact.svg",
      width: 30,
      height: 30,
    },
    {
      src: "/assets/people.svg",
      width: 30,
      height: 30,
    },
  ];
  return (
    <Wrapper>
      {sideNavigationItems.map((item, index) => (
        <Fragment key={item.src}>
          <Element>
            <Image src={item.src} width={item.width} height={item.height} />
          </Element>
          {index + 1 !== sideNavigationItems.length && <Dots />}
        </Fragment>
      ))}
    </Wrapper>
  );
};

export default SideNavigation;
