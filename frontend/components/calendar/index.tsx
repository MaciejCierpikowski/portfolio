import Image from "next/image";

import {
  add,
  differenceInDays,
  endOfMonth,
  format,
  setDate,
  startOfMonth,
  sub,
} from "date-fns";
import pl from "date-fns/locale/pl";

import Cell from "./Cell";
import {
  Wrapper,
  Headline,
  WrapperCalendar,
  WrapperGrid,
  Background,
  HeadlineWrapper,
} from "./style";
import ArrowSingle from "../arrowSingle";

interface ICalendar {
  value?: Date;
  onChange: (date: Date) => void;
}

const Calendar = ({ value = new Date(), onChange }: ICalendar) => {
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const numDays = differenceInDays(endDate, startDate) + 1;

  const prefixDays = startDate.getDay() - 1;
  const suffixDays = 7 - endDate.getDay();

  const prevMonth = () => onChange(sub(value, { months: 1 }));
  const nextMonth = () => onChange(add(value, { months: 1 }));

  const handleClickDate = (index: number) => {
    const date = setDate(value, index);
    onChange(date);
  };

  return (
    <Wrapper>
      <ArrowSingle onClick={prevMonth} direction="LEFT" />
      <HeadlineWrapper>
        <Headline>
          {format(value, "LLLL yyyy", {
            locale: pl,
          })}
        </Headline>
        <Image alt="logo" src="/assets/calendar.svg" width={183} height={130} />
      </HeadlineWrapper>

      <WrapperCalendar>
        <WrapperGrid>
          {Array.from({ length: prefixDays === -1 ? 6 : prefixDays }).map(
            (_, index) => (
              <Cell key={index} />
            )
          )}

          {Array.from({ length: numDays }).map((_, index) => {
            const date = index + 1;
            const isCurrentDate = date === value.getDate();

            return (
              <Cell
                key={date}
                isActive={isCurrentDate}
                onClick={() => handleClickDate(date)}
              >
                {date}
              </Cell>
            );
          })}

          {Array.from({ length: suffixDays === 7 ? 0 : suffixDays }).map(
            (_, index) => (
              <Cell key={index} />
            )
          )}
        </WrapperGrid>
      </WrapperCalendar>
      <Background />
      <ArrowSingle onClick={nextMonth} direction="RIGHT" />
    </Wrapper>
  );
};

export default Calendar;
