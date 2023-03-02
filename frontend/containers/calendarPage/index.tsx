import React, { useState } from "react";

import { Wrapper } from "./style";
import Calendar from "../../components/calendar";
import ArrowWrapper from "../../components/arrowWrapper";
import MainHeadline from "../../components/headine";

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <Wrapper>
      <MainHeadline text="Harmonogram" />

      <Calendar value={currentDate} onChange={setCurrentDate} />

      <ArrowWrapper />
    </Wrapper>
  );
};

export default CalendarPage;
