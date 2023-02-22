import React, { useState } from "react";

import Image from "next/image";

import Arrow from "../../components/arrow";

import {
  Card,
  Cards,
  CardWrapper,
  Headline,
  Wrapper,
  Background,
  Text,
  ArrowWrapper,
  Line,
  Header,
  HeaderWrapper,
} from "./style";
import { useTheme } from "styled-components";
import Calendar from "../../components/calendar";

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleSetToday = () => setCurrentDate(new Date());

  return (
    <Wrapper>
      <HeaderWrapper>
        <Line></Line>
        <Header>Harmonogram</Header>
      </HeaderWrapper>

      <Calendar value={currentDate} onChange={setCurrentDate} />
    </Wrapper>
  );
};

export default CalendarPage;
