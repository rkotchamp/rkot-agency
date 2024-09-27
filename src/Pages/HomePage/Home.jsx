import { useContext } from "react";
import Hero from "../HeroPage/Hero";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import PortfolioSection from "../../Components/PortfolioSection/PortfolioSection";
import NavShowContext from "../../context/NavShowContext";
import ServicesSection from "../../Components/ServicesSection/ServicesSection";
import AboutSection from "../../Components/AboutSection/AboutSection";
import Testimony from "../../Components/Testimonials&Contacts/Testimony/Testimony";
import Footer from "../../Components/Footer/Footer";
import SEO from "../../Components/SEO/SEO";

import "./Home.css";

function Home() {
  const { showNav } = useContext(NavShowContext);

  return (
    <div className="home_container">
      <SEO
        title="Rkot Designs | innovative Web and Brand Identity Agency"
        companyName="Rkot Designs"
        description="A leading web and brand identity agency specializing in innovative design and development solutions to elevate your online presence."
        type="summary"
        imageCoverUrl="/favicon.ico"
        pageUrl="https://www.rkotdesigns.com/"
        canLink="https://www.rkotdesigns.com/"
      />
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
