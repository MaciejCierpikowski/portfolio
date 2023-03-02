import type { NextPage } from "next";

import FullPageSlider from "../components/fullPageSlider";
import Navigation from "../components/navigation";
import HomePage from "../containers/homePage";
import localFont from "@next/font/local";
import OfferPage from "../containers/offerPage";
import CalendarPage from "../containers/calendarPage";
import { useTheme } from "styled-components";
import NavigationMobile from "../components/navigationMobile";
import { useWindowResize } from "../hooks/useWindowResize";
import { useLandscape } from "../hooks/useLandscape";
import LandscapePage from "../containers/landscapePage";

const montserratLocal = localFont({
  variable: "--font-montserrat",
  src: [
    {
      path: "./fonts/Montserrat-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat-Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
});

const Home: NextPage = () => {
  const theme = useTheme();
  const windowSize = useWindowResize();
  const orientation = useLandscape();

  return (
    <div className={montserratLocal.variable}>
      {windowSize[0] > theme.sizes.laptop ? (
        <Navigation />
      ) : (
        <NavigationMobile />
      )}

      <FullPageSlider>
        <section>
          <HomePage />
        </section>
        <section>
          <OfferPage />
        </section>
        <section>
          <CalendarPage />
        </section>
        {/* <LandscapePage display={orientation === "landscape"} /> */}
      </FullPageSlider>
    </div>
  );
};

export default Home;
