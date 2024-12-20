import { useContext, useEffect } from "react";
import NavShowContext from "../../context/NavShowContext";
import NavBar from "../../Components/NavBar/NavBar";
import agencyImage from "../../assets/Images/serveimage.png";
import createIcon from "../../assets/Images/createPNG.png";
import marketing from "../../assets/Images/market.png";
import maintenance from "../../assets/Images/maintenancePng.png";
import serviceImageSec from "../../assets/Images/serviceVector.png";
import PortfolioSection from "../../Components/PortfolioSection/PortfolioSection";
import Testimony from "../../Components/Testimonials&Contacts/Testimony/Testimony";
import Footer from "../../Components/Footer/Footer";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import SEO from "../../Components/SEO/SEO";
import "./Service.css";

function Service() {
  const { hideNav } = useContext(NavShowContext);

  const { showNav } = useContext(NavShowContext);

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

  return (
    <div className="service__container">
      <SEO
        title="Logo, Web Design & SEO for Small Businesses| Rkot Designs"
        companyName="Rkot Designs"
        description="Offering expert logo design, brand identity, web design, SEO, and marketing services for small businesses. Transform your brand and grow with our tailored digital solutions."
        type="summary"
        imageCoverUrl={agencyImage}
        pageUrl="https://www.rkotdesigns.com/services"
        canLink="https://www.rkotdesigns.com/services"
      />
      {showNav && <BurgerMenu />}
      {hideNav && <NavBar />}
      <div className="styleContainer">
        <div className="service__headers">
          <div className="headersPane">
            <p>
              we have the skills and experience to deliver high quality works
            </p>
            <h1>
              Logo Design, Web Design, SEO & Branding for Small Businesses
            </h1>
          </div>

          <div className="service_image_and_icons">
            <div className="image_container">
              <img src={agencyImage} alt="Web development agency Image" />
            </div>

            <div className="icons__space">
              <div className="create agencyIcons">
                <img src={createIcon} alt="creating your online presence" />
                <h4>Create your prescence</h4>
                <p>
                  We excel at converting your ideas into a successful web
                  design, logos and brand.
                </p>
              </div>
              <div className="marketing agencyIcons">
                <img src={marketing} alt="Marketing and SEO strategy" />
                <h4>Marketing & SEO Strategy</h4>
                <p>
                  We dont just create we also help your business reach more
                  clients
                </p>
              </div>
              <div className="maintenace agencyIcons">
                <img src={maintenance} alt="site maintenance and updates" />
                <h4>Maintenance & Updates</h4>
                <p>We assist in maintaining and keep your sites up to date.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="secondServiceSection">
        <div className="second__service__image__container">
          <img
            src={serviceImageSec}
            alt="Graphic design design and web development vector image"
          />
        </div>

        <div className="serviceTextSpace ">
          <div className="web style__Text__Content__Services">
            <p className="styleHeaders">web design / development</p>
            <p>
              Elevate your online presence with our customer-focused,
              quality-driven web development services. We create responsive,
              user-friendly websites tailored to your needs, ensuring a seamless
              and engaging experience for your audience.
            </p>
          </div>
          <div className="logo_identity style__Text__Content__Services">
            <p className="styleHeaders">Logo & brand identity</p>
            <p>
              Build a strong, cohesive brand identity with our expert design
              services. We focus on creating a unified visual and emotional
              experience, from logos to color schemes, that resonates with your
              audience and enhances your brand’s presence.
            </p>
          </div>
        </div>
      </div>
      <PortfolioSection />
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

export default Service;
