import React, { useState } from "react";

import { Wrapper, Line, Header, HeaderWrapper } from "./style";
import Calendar from "../../components/calendar";
import ArrowWrapper from "../../components/arrowWrapper";

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <Wrapper>
      <HeaderWrapper>
        <Line></Line>
        <Header>Harmonogram</Header>
      </HeaderWrapper>

      <Calendar value={currentDate} onChange={setCurrentDate} />

      <ArrowWrapper />
    </Wrapper>
  );
};

export default CalendarPage;
