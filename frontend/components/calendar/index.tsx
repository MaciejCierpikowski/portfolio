import Image from "next/image";

import {
  add,
  differenceInDays,
  endOfMonth,
  format,
  setDate,
  startOfMonth,
  sub,
  getMonth,
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
  Legend,
  CellText,
  LegendInner,
  Line,
} from "./style";
import ArrowSingle from "../arrowSingle";
import { getBreakpoint } from "../../utils/getCurrentBreakPoint";
import { useWindowResize } from "../../hooks/useWindowResize";
import useModal from "../../hooks/useModal";
import Modal from "../modal";
import ModalContent from "./ModalContent";
import { useTheme } from "styled-components";
import { useEffect, useState } from "react";
import { getRandomNumbers } from "../../utils/getRandomNumber";

interface ICalendar {
  value?: Date;
  onChange: (date: Date) => void;
}

const Calendar = ({ value = new Date(), onChange }: ICalendar) => {
  const { isOpen, toggle } = useModal();
  const [fakeDatesState, setFakeDatesState] = useState<{
    [x: number]: number[];
  }>();

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

    toggle();
  };

  const data = {
    image: {
      width: {
        isLaptopXL: 183,
        isLaptopL: 183,
        isLaptop: 150,
        isMobileL: 121,
        isMobileM: 101,
      },
      height: {
        isLaptopXL: 130,
        isLaptopL: 130,
        isLaptop: 100,
        isMobileL: 86,
        isMobileM: 66,
      },
    },
  };
  const windowSize = useWindowResize();
  const theme = useTheme();

  useEffect(() => {
    const fakeDates = localStorage.getItem("matematyka-z-pasja-partlyBusy");
    if (fakeDates) {
      const fakeDatesParsed = JSON.parse(fakeDates);

      if (
        Object.keys(fakeDatesParsed)
          .map((k: string) => Number(k) === getMonth(value))
          .includes(true)
      ) {
        setFakeDatesState(fakeDatesParsed);
        return;
      } else {
        const partlyBusy = {
          [getMonth(value)]: Array.from({ length: 12 }).map(() =>
            getRandomNumbers(1, numDays)
          ),
        };

        localStorage.setItem(
          "matematyka-z-pasja-partlyBusy",
          JSON.stringify({ ...partlyBusy, ...fakeDatesParsed })
        );

        setFakeDatesState({ ...partlyBusy, ...fakeDatesParsed });

        return;
      }
    }

    const partlyBusy: { [x: number]: number[] } = {
      [getMonth(value)]: Array.from({ length: 12 }).map(() =>
        getRandomNumbers(1, numDays)
      ),
    };

    setFakeDatesState(partlyBusy);

    localStorage.setItem(
      "matematyka-z-pasja-partlyBusy",
      JSON.stringify(partlyBusy)
    );
  }, [value]);

  return (
    <Wrapper>
      <ArrowSingle
        className="arrow-left"
        onClick={prevMonth}
        direction="LEFT"
      />
      <HeadlineWrapper>
        <Headline>
          {format(value, "LLLL yyyy", {
            locale: pl,
          })}
        </Headline>
        <Image
          alt="logo"
          src="/assets/calendar.svg"
          width={data.image.width[getBreakpoint(windowSize[0])!]}
          height={data.image.height[getBreakpoint(windowSize[0])!]}
        />
      </HeadlineWrapper>

      <WrapperCalendar>
        <Modal
          closeColor={theme.palette.common.black}
          isOpen={isOpen}
          toggle={toggle}
          isOutOfContent={false}
        >
          <ModalContent date={value} fakeDatesState={fakeDatesState} />
        </Modal>
        {fakeDatesState && (
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
                fakeDatesState![Number(getMonth(value))] && (
                  <Cell
                    key={date}
                    isActive={isCurrentDate}
                    onClick={() => handleClickDate(date)}
                    border={
                      !!fakeDatesState![Number(getMonth(value))].find(
                        (fakeDate) => fakeDate === index
                      )
                    }
                    fill={
                      date % (14 + Math.round(12 - getMonth(value) / 2)) === 0
                    }
                  >
                    {date}
                  </Cell>
                )
              );
            })}

            {Array.from({ length: suffixDays === 7 ? 0 : suffixDays }).map(
              (_, index) => (
                <Cell key={index} />
              )
            )}
            <Line />
          </WrapperGrid>
        )}
        <Legend>
          <LegendInner>
            <Cell inLegend>
              {windowSize[0] <= theme.sizes.mobileM ? 7 : 27}
            </Cell>
            <CellText>wolne</CellText>
          </LegendInner>
          <LegendInner>
            <Cell inLegend border>
              {windowSize[0] <= theme.sizes.mobileM ? 7 : 27}
            </Cell>
            <CellText>częściowo zajęte</CellText>
          </LegendInner>
          <LegendInner>
            <Cell inLegend fill>
              {windowSize[0] <= theme.sizes.mobileM ? 7 : 27}
            </Cell>
            <CellText>zajęte</CellText>
          </LegendInner>
        </Legend>
      </WrapperCalendar>
      <Background />
      <ArrowSingle
        className="arrow-right"
        onClick={nextMonth}
        direction="RIGHT"
      />
    </Wrapper>
  );
};

export default Calendar;
