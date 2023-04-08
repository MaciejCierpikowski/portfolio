import {
  add,
  differenceInDays,
  endOfMonth,
  format,
  setDate,
  startOfMonth,
  sub,
  getMonth,
  getDaysInMonth,
  getDay,
} from "date-fns";
import pl from "date-fns/locale/pl";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useWindowResize } from "../../../hooks/useWindowResize";
import {
  setActiveSlide,
  setSelectedDate,
  toggleScrollDown,
} from "../../../store/generalState";
import animatedScrollTo from "../../../utils/animated-scroll-to";
import {
  Header,
  Wrapper,
  Item,
  Hour,
  Frame,
  AddButton,
  Inner,
  Text,
} from "./style";
import { useEffect } from "react";
import { getRandomNumbers } from "../../../utils/getRandomNumber";

interface IModalContent {
  date: Date;
  fakeDatesState?: any;
}
const ModalContent = ({ date, fakeDatesState }: IModalContent) => {
  const windowSize = useWindowResize();

  const scrollDown = useAppSelector((state) => state.general.scrollDown);
  const dispatch = useAppDispatch();

  const scrollToSlide = (index: number, currentTime: string) => {
    if (index === 0) {
      dispatch(toggleScrollDown(false));
    } else {
      !scrollDown && dispatch(toggleScrollDown(true));
    }
    dispatch(setActiveSlide(index));
    dispatch(setSelectedDate(date + " " + currentTime));

    animatedScrollTo(index * windowSize[1], () => {});
  };

  const names = [
    "Janek",
    "Kasia",
    "Wiola",
    "Franek",
    "Stasio",
    "Zosia",
    "Wojtuś",
    "Jagoda",
  ];

  return (
    <Wrapper>
      <Header>
        {format(date, "d MMMM (EEEE)", {
          locale: pl,
        })}
      </Header>
      <Inner id="additional-scroll">
        {Array.from({ length: 12 }).map((_, index) => (
          <Item key={index} onClick={() => scrollToSlide(4, `${index + 8}:00`)}>
            <Hour>{index + 8}:00</Hour>
            <Frame>
              {index + 8 === 17 &&
                fakeDatesState &&
                !!fakeDatesState![Number(getMonth(date))]?.find(
                  (fakeDate: any) => fakeDate === Number(format(date, "d")) - 1
                ) &&
                names[getRandomNumbers(0, names.length)]}
            </Frame>
            <AddButton />
          </Item>
        ))}
      </Inner>
      <Text>
        <AddButton small />
        zapisz się na zajęcia
      </Text>
    </Wrapper>
  );
};

export default ModalContent;
