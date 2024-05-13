import { useContext } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import NavShowContext from "../../context/NavShowContext";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import PortfolioSection from "../../Components/PortfolioSection/PortfolioSection";
import "./Portfolio.css";
import ServicesSection from "../../Components/ServicesSection/ServicesSection";
import Testimony from "../../Components/Testimonials&Contacts/Testimony/Testimony";
import Footer from "../../Components/Footer/Footer";

function Portfolio() {
  const { showNav } = useContext(NavShowContext);

  return (
    <div className="portfolioContainer">
      {showNav && <BurgerMenu />}
      <NavBar />

      {/* <div className="infoSpace">
        <p>Our Portfolio</p>
        <h2>People dress to impress. we design for business success </h2>
      </div> */}

      <div className="indicators">
        <p>All</p>
        <p>Logo</p>
        <p>Brand Identity</p>
        <p>Web Design/Development</p>
      </div>
      <PortfolioSection />
      <ServicesSection />
      <Testimony />
      <Footer />
    </div>
  );
}

export default Portfolio;
