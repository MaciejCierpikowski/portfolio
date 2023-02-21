import type { NextPage } from "next";

import FullPageSlider from "../components/fullPageSlider";
import HomePage from "../containers/homePage";

const Home: NextPage = () => {
  return (
    <FullPageSlider initialSlide={0}>
      <section>
        <HomePage />
      </section>
      <section>
        <HomePage />
      </section>
    </FullPageSlider>
  );
};

export default Home;
