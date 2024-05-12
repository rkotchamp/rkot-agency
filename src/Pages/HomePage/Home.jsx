import { useContext } from "react";
import Hero from "../HeroPage/Hero";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import PortfolioSection from "../../Components/PortfolioSection/PortfolioSection";
import NavShowContext from "../../context/NavShowContext";
import ServicesSection from "../../Components/ServicesSection/ServicesSection";
import AboutSection from "../../Components/AboutSection/AboutSection";
import Testimony from "../../Components/Testimonials&Contacts/Testimony/Testimony";
import Footer from "../../Components/Footer/Footer";

import "./Home.css";

function Home() {
  const { showNav } = useContext(NavShowContext);

  return (
    <div className="home_container">
      {showNav && <BurgerMenu />}

      <Hero />
      <PortfolioSection />
      <ServicesSection />
      <AboutSection />
      <Testimony />
      <Footer />
    </div>
  );
}

export default Home;
