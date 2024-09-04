import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./AboutSection.css";

function AboutSection() {
  const location = useLocation();
  const scrollToPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // useEffect(() => {
  //   scrollToPage();
  // }, [location]);
  return (
    <div className="aboutSection__container">
      <div className="about__firstSection">
        <p>Premium design agency</p>
        <h2>Dedicated to making a your business A success.</h2>
        <Link to="/about-us">
          <span onClick={scrollToPage}>More about us</span>
        </Link>
      </div>

      <div className="about__secondSection">
        <p>
          Our team of skilled designers and strategists work passionately to
          deliver innovative and high-quality solutions tailored to your needs.
          With a commitment to excellence, we focus on creating exceptional
          designs that not only meet but exceed your expectations. From crafting
          stunning visuals to building a cohesive brand identity, we are here to
          support you every step of the way.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
