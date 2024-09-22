import { useContext } from "react";
import NavShowContext from "../../context/NavShowContext";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import aboutImage from "../../assets/Images/aboutImage.png";
import NavBar from "../../Components/NavBar/NavBar";
import reuben from "../../assets/Images/reuben-min.jpg";
import secondMember from "../../assets/Images/secondMember.png";
import ServicesSection from "../../Components/ServicesSection/ServicesSection";
import Testimony from "../../Components/Testimonials&Contacts/Testimony/Testimony";
import Footer from "../../Components/Footer/Footer";
import SEO from "../../Components/SEO/SEO";
import "./About.css";

function About() {
  const { hideNav } = useContext(NavShowContext);

  const { showNav } = useContext(NavShowContext);

  return (
    <div className="about__container">
      <SEO
        title="Rkot | Web Design & Brand Identity for Small & Medium Businesses"
        companyName="Rkot Designs"
        description="RKOT is a leading web design and brand identity agency helping small and medium businesses thrive. We provide web design services, logo design, and tailored branding identity services"
        type="summary"
        imageCoverUrl={aboutImage}
        pageUrl="https://rkotdesign.com/about-us"
      />
      {showNav && <BurgerMenu />}
      {hideNav && <NavBar />}
      <div className="styleElements">
        <div className="about__header__image">
          <div className="about__headers">
            <p>Design and marketing agency</p>
            <h2>
              A COMMITTED WEB DESIGN AND BRAND IDENTITY AGENCY DEDICATED TO YOUR
              SUCCESS
            </h2>
          </div>
          <div className="about__image__container">
            <img src={aboutImage} alt="What rkot creative solutions is about" />
          </div>
        </div>
      </div>
      <section className="aboutSection">
        <div className="about__text">
          <p>About Us</p>
          <h2>We Help Small and Medium Businesses Succeed Online</h2>
        </div>

        <div className="longText">
          <p>
            At RKOT, we are dedicated to helping small and medium-sized
            businesses overcome the challenges of growth in today’s digital
            world. As a leading web design agency, we specialize in brand
            identity design services and logo design, ensuring that your online
            presence reflects your core values.We know that scaling a business
            can be difficult, especially when it comes to creating an impactful
            and cohesive brand identity.
            <br />
            <br /> Our mission is to empower businesses to fully harness the
            power of digital platforms with tailored web design services that
            improve visibility, build brand trust, and connect with your
            audience. <br />
            <br />
            Whether you need web page designers near you or branding identity
            services, our team delivers expert solutions so you can focus on
            what you do best—running your business.
          </p>
        </div>
      </section>
      <section className="theTeam">
        <div className="head">
          <h2>Meet The Team</h2>
        </div>
        <div className="membersAndDetails">
          <div className="first__member memberContainer">
            <div className="memberImageContainer">
              <img
                src={reuben}
                alt="Reuben Omaano-Tetteh web developer at Rkot designs"
              />
            </div>
            <p className="membersName">Reuben Tetteh</p>
            <p>Web Developer/Designer</p>
          </div>
          <div className="second__member memberContainer">
            <div className="memberImageContainer">
              <img src={secondMember} alt="" />
            </div>
            <p className="membersName">Andrew Carri</p>
            <p>digital Marketer</p>
          </div>
        </div>
      </section>
      <ServicesSection />
      <Testimony />
      <Footer />
    </div>
  );
}

export default About;
