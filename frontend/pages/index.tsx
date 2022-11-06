import type { NextPage } from "next";

import HomePage from "../containers/homePage";
import SideNavigation from "../containers/sideNavigation";

const Home: NextPage = () => {
  return (
    <>
      <SideNavigation />
      <section>
        <HomePage />
      </section>
    </>
  );
};

export default Home;
