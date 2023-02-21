import React from "react";
import Arrow from "../../components/arrow";
import Button from "../../components/button";

import HomeInfo from "./homeInfo";

import { BottomRectangle, Wrapper } from "./style";

const HomePage = () => {
  return (
    <Wrapper>
      <HomeInfo />
      <BottomRectangle>
        <Button onClick={() => console.log("test")}>Sprawdź!</Button>
        <Arrow direction="DOWN" />
      </BottomRectangle>
    </Wrapper>
  );
};

export default HomePage;
