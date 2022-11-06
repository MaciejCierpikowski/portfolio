import React from "react";

import HomeInfo from "./homeInfo";
import HomePhoto from "./homePhoto";

import { Wrapper } from "./style";

const HomePage = () => {
  return (
    <Wrapper>
      <HomeInfo />
      <HomePhoto />
    </Wrapper>
  );
};

export default HomePage;
