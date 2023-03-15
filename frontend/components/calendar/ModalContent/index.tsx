import { Header, Wrapper, Item, Hour, Frame, AddButton } from "./style";

interface IModalContent {
  date: string;
}
const ModalContent = ({ date }: IModalContent) => {
  return (
    <Wrapper>
      <Header>{date}</Header>
      {Array.from({ length: 16 }).map((_, index) => (
        <Item>
          <Hour>{index + 7}:00</Hour>
          <Frame />
          <AddButton />
        </Item>
      ))}
    </Wrapper>
  );
};

export default ModalContent;
