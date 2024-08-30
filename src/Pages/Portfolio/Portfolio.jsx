import { useContext, useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import NavShowContext from "../../context/NavShowContext";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import PortfolioSection from "../../Components/PortfolioSection/PortfolioSection";
import ServicesSection from "../../Components/ServicesSection/ServicesSection";
import Testimony from "../../Components/Testimonials&Contacts/Testimony/Testimony";
import Footer from "../../Components/Footer/Footer";
// import PortfolioContext from "../../context/PortfolioContext";
import "./Portfolio.css";

function Portfolio() {
  const { showNav } = useContext(NavShowContext);
  // const { project } = useContext(PortfolioContext);
  // const [filteredProjects, setFilteredProjects] = useState(project);
  const [allActiveClick, setAllActiveClick] = useState(true);
  const [webActiveClick, setWebActiveClick] = useState(false);
  const [logoActiveClick, setLogoActiveClick] = useState(false);
  const [brandActiveClick, setBrandActiveClick] = useState(false);

  const handleWeb = () => {
    setWebActiveClick(true);
    setLogoActiveClick(false);
    setBrandActiveClick(false);
    setAllActiveClick(false);
  };
  const handleAll = () => {
    setAllActiveClick(true);
    setWebActiveClick(false);
    setLogoActiveClick(false);
    setBrandActiveClick(false);
  };
  const handleLogo = () => {
    setLogoActiveClick(true);
    setAllActiveClick(false);
    setWebActiveClick(false);
    setBrandActiveClick(false);
  };
  const handleBrand = () => {
    setBrandActiveClick(true);
    setLogoActiveClick(false);
    setAllActiveClick(false);
    setWebActiveClick(false);
  };

  return (
    <div className="portfolioContainer">
      {showNav && <BurgerMenu />}
      <NavBar />
      {/* <div className="infoSpace">
        <p>Our Portfolio</p>
        <h2>People dress to impress. we design for business success </h2>
      </div> */}
      <div className="indicators">
        <p
          className={allActiveClick ? "indicateText activate" : "indicateText"}
          onClick={handleAll}
        >
          All
        </p>
        <p
          className={logoActiveClick ? "indicateText activate" : "indicateText"}
          onClick={handleLogo}
        >
          Logo
        </p>
        <p
          className={
            brandActiveClick ? "indicateText activate" : "indicateText"
          }
          onClick={handleBrand}
        >
          Brand Identity
        </p>
        <p
          className={webActiveClick ? "indicateText activate" : "indicateText"}
          onClick={handleWeb}
        >
          Web Design/Development
        </p>
      </div>

      <PortfolioSection
        all={allActiveClick}
        web={webActiveClick}
        brand={brandActiveClick}
        logo={logoActiveClick}
      />
      <ServicesSection />
      <Testimony />
      <Footer />
    </div>
  );
}

export default Portfolio;
