import type { NextPage } from "next";

import FullPageSlider from "../components/fullPageSlider";
import Navigation from "../components/navigation";
import HomePage from "../containers/homePage";
import localFont from "@next/font/local";

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
    <div
      style={{ height: "100vh", overflow: "hidden" }}
      className={montserratLocal.variable}
    >
      <Navigation />
      <FullPageSlider initialSlide={0}>
        <section>
          <HomePage />
        </section>
      </FullPageSlider>
    </div>
  );
};

export default Home;
