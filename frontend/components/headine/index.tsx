import React from "react";

import { HeaderWrapper, Line, Header } from "./style";

interface IMainHeadline {
  text: string;
}

const MainHeadline = ({ text }: IMainHeadline) => (
  <HeaderWrapper>
    <Line></Line>
    <Header>{text}</Header>
  </HeaderWrapper>
);

export default MainHeadline;
