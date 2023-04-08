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

interface IModalContent {
  date: string;
}
const ModalContent = ({ date }: IModalContent) => {
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

  return (
    <Wrapper>
      <Header>{date}</Header>
      <Inner id="additional-scroll">
        {Array.from({ length: 12 }).map((_, index) => (
          <Item key={index} onClick={() => scrollToSlide(4, `${index + 8}:00`)}>
            <Hour>{index + 8}:00</Hour>
            <Frame />
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
