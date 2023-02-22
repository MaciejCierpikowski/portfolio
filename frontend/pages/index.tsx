import type { NextPage } from "next";

import FullPageSlider from "../components/fullPageSlider";
import Navigation from "../components/navigation";
import HomePage from "../containers/homePage";
import localFont from "@next/font/local";
import OfferPage from "../containers/offerPage";
import CalendarPage from "../containers/calendarPage";

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
  return (
    <div className={montserratLocal.variable}>
      <Navigation />
      <FullPageSlider initialSlide={0}>
        <section>
          <HomePage />
        </section>
        <section>
          <OfferPage />
        </section>
        <section>
          <CalendarPage />
        </section>
      </FullPageSlider>
    </div>
  );
};

export default Home;
