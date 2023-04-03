import Image from "next/image";

import { useWindowResize } from "../../../hooks/useWindowResize";
import { getBreakpoint } from "../../../utils/getCurrentBreakPoint";
import { Header, Wrapper } from "./style";

interface IModalContent {}
const ModalContent = ({}: IModalContent) => {
  const windowSize = useWindowResize();
  const data = {
    image: {
      width: {
        isLaptopXL: 183,
        isLaptopL: 183,
        isLaptop: 150,
        isMobileL: 121,
        isMobileM: 121,
      },
      height: {
        isLaptopXL: 130,
        isLaptopL: 130,
        isLaptop: 100,
        isMobileL: 86,
        isMobileM: 86,
      },
    },
  };
  return (
    <Wrapper>
      <Image
        alt="success"
        src="/assets/success.svg"
        width={data.image.width[getBreakpoint(windowSize[0])!]}
        height={data.image.height[getBreakpoint(windowSize[0])!]}
      />
      <Header>Wiadomość została wysłana. Wkrótcę się z Tobą skontakuję.</Header>
    </Wrapper>
  );
};

export default ModalContent;
