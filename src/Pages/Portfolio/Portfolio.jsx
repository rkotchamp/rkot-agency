import { useContext, useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import NavShowContext from "../../context/NavShowContext";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import PortfolioSection from "../../Components/PortfolioSection/PortfolioSection";
import ServicesSection from "../../Components/ServicesSection/ServicesSection";
import Testimony from "../../Components/Testimonials&Contacts/Testimony/Testimony";
import Footer from "../../Components/Footer/Footer";
// import PortfolioContext from "../../context/PortfolioContext";
import SEO from "../../Components/SEO/SEO";
import "./Portfolio.css";

function Portfolio() {
  const { showNav } = useContext(NavShowContext);
  // const { project } = useContext(PortfolioContext);
  // const [filteredProjects, setFilteredProjects] = useState(project);
  const [allActiveClick, setAllActiveClick] = useState(true);
  const [webActiveClick, setWebActiveClick] = useState(false);
  const [logoActiveClick, setLogoActiveClick] = useState(false);
  const [brandActiveClick, setBrandActiveClick] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.async = true;
    script.dataset.resourcesUrl =
      "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
    document.body.appendChild(script);

    // Cleanup the script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
      <SEO
        title="Branding & Web Design Portfolio | Tailored Design Solutions"
        companyName="Rkot Designs"
        description="Explore our portfolio of branding, logo design, and web design projects. We deliver tailored design solutions for small businesses, enhancing brand identity and online success."
        type="summary"
        imageCoverUrl=""
        pageUrl="https://www.rkotdesigns.com/portfolio"
        canLink="https://www.rkotdesigns.com/portfolio"
      />
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
      <div>
        <chat-widget
          location-id={import.meta.env.WIDGET_LOCATION_ID}
        ></chat-widget>
      </div>
    </div>
  );
}

export default Portfolio;
