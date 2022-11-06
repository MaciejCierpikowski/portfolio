import React from "react";

import Image from "next/image";

import { Photo, WrapperPhoto } from "./style";

const HomePhoto = () => {
  return (
    <WrapperPhoto>
      <Photo>
        <Image
          src="/assets/home-profile.png"
          layout="fill"
          objectFit="cover"
          objectPosition="top right"
        />
      </Photo>
    </WrapperPhoto>
  );
};

export default HomePhoto;
