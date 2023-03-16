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
  return (
    <Wrapper>
      <Header>{date}</Header>
      <Inner id="additional-scroll">
        {Array.from({ length: 16 }).map((_, index) => (
          <Item>
            <Hour>{index + 7}:00</Hour>
            <Frame />
            <AddButton />
          </Item>
        ))}
      </Inner>
      <Text>
        <AddButton />
        zapisz się na zajęcia
      </Text>
    </Wrapper>
  );
};

export default ModalContent;
