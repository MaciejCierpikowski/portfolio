import { useTheme } from "styled-components";

export const getBreakpoint = (width: number) => {
  const theme = useTheme();

  if (width < theme.sizes.mobileL) {
    return "isMobileM";
  } else if (width >= theme.sizes.mobileL && width < theme.sizes.laptop) {
    return "isMobileL";
  } else if (width >= theme.sizes.laptop && width < theme.sizes.laptopL) {
    return "isLaptop";
  } else if (width >= theme.sizes.laptopL && width < theme.sizes.laptopXL) {
    return "isLaptopL";
  } else if (width >= theme.sizes.laptopXL) {
    return "isLaptopXL";
  }
};
