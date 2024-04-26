import { useContext } from "react";
import Hero from "../HeroPage/Hero";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import PortfolioSection from "../../Components/PortfolioSection/PortfolioSection";
import NavShowContext from "../../context/NavShowContext";

import "./Home.css";

function Home() {
  const { showNav } = useContext(NavShowContext);

  return (
    <div className="home_container">
      {showNav && <BurgerMenu />}

      <Hero />
      <PortfolioSection />
    </div>
  );
}

export default Home;
