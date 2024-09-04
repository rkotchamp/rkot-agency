import { useContext } from "react";
import NavShowContext from "../../context/NavShowContext";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import aboutImage from "../../assets/Images/aboutImage.png";
import NavBar from "../../Components/NavBar/NavBar";
import firstImage from "../../assets/Images/firstMember.png";
import secondMember from "../../assets/Images/secondMember.png";
import ServicesSection from "../../Components/ServicesSection/ServicesSection";
import Testimony from "../../Components/Testimonials&Contacts/Testimony/Testimony";
import Footer from "../../Components/Footer/Footer";
import "./About.css";

function About() {
  const { hideNav } = useContext(NavShowContext);

  const { showNav } = useContext(NavShowContext);

  return (
    <div className="about__container">
      {showNav && <BurgerMenu />}
      {hideNav && <NavBar />}
      <div className="styleElements">
        <div className="about__header__image">
          <div className="about__headers">
            <p>Design and marketing agency</p>
            <h2>A solid and committed team that ensures your success</h2>
          </div>
          <div className="about__image__container">
            <img src={aboutImage} alt="What rkot creative solutions is about" />
          </div>
        </div>
      </div>
      <section className="aboutSection">
        <div className="about__text">
          <p>About Us</p>
          <h2>We Are Passionate About Your Success</h2>
        </div>

        <div className="longText">
          <p>
            At RKOT, we are dedicated to helping small and medium-sized
            businesses overcome the challenges of growth in today’s digital
            world. We understand that scaling a business can be difficult,
            especially when it comes to establishing and maintaining a strong
            online presence.
            <br />
            <br /> Our mission is to empower businesses that may not have the
            resources or expertise to fully harness the power of digital
            platforms. We are committed to helping you build a strong brand,
            improve your visibility, and connect with your audience in
            meaningful ways. <br />
            <br />
            We believe that every business, no matter its size, deserves the
            opportunity to thrive online. That's why we focus on creating
            tailored solutions that meet your unique needs, allowing you to
            focus on what you do best—running your business. Our team is
            passionate about your success, and we’re here to support you every
            step of the way.
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
                src={firstImage}
                alt="James Jones web developer at Rkot creatives"
              />
            </div>
            <p className="membersName">James Jones</p>
            <p>Web Developer</p>
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
