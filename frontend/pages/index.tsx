import type { NextPage } from "next";

import FullPageSlider from "../components/fullPageSlider";
import Navigation from "../components/navigation";
import HomePage from "../containers/homePage";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const Home: NextPage = () => {
  return (
    <div
      style={{ height: "100vh", overflow: "hidden" }}
      className={montserrat.className}
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
