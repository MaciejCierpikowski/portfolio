import React from "react";

import HomeInfo from "./homeInfo";

import { BottomRectangle, Wrapper } from "./style";

const HomePage = () => {
  return (
    <Wrapper>
      <HomeInfo />
      <BottomRectangle> </BottomRectangle>
    </Wrapper>
  );
};

export default HomePage;
