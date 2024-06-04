import { useContext } from "react";
import NavShowContext from "../../context/NavShowContext";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import aboutImage from "../../assets/Images/aboutImage.png";
import NavBar from "../../Components/NavBar/NavBar";
import firstImage from "../../assets/Images/firstMember.png";
import secondMember from "../../assets/Images/secondMember.png";
import ServicesSection from "../../Components/ServicesSection/ServicesSection";
import Testimony from "../../Components/Testimonials&Contacts/Testimony/Testimony";

import "./About.css";
import Footer from "../../Components/Footer/Footer";

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
          <h2>we are passionate about your success</h2>
        </div>

        <div className="longText">
          <p>
            Lorem ipsum dolor sit amet consectetur. Turpis feugiat dolor
            molestie bibendum ac malesuada. Metus metus mi amet ultrices nulla
            est nulla. Duis mauris et vitae libero integer ipsum. Nascetur
            iaculis in et viverra. Egestas rutrum tincidunt nisi nunc laoreet
            dictumst orci. Vel congue arcu ac bibendum posuere in nullam amet
            habitasse. Arcu aliquet ut iaculis pretium consectetur magna in
            quis. At magna consectetur quam nisi a. Felis sed et pellentesque
            tortor urna ut. Sed faucibus blandit mi blandit gravida orci varius
            porta. Mauris mauris in amet pretium. Pellentesque mattis accumsan
            pretium et purus. Sit vulputate ullamcorper vulputate viverra a
            rutrum aliquam. Nunc id convallis luctus gravida tristique. Habitant
            sit id risus sodales suspendisse condimentum dictum tincidunt.
            Phasellus viverra massa est aliquet nec et lobortis sit facilisis.
            Facilisis at sed natoque in. Massa{" "}
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
