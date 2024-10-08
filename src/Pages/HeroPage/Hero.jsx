import { useContext } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import writingBoardImage from "../../assets/Images/land3 1.png";
import NavShowContext from "../../context/NavShowContext";
import ScrollToContactContext from "../../context/ScrollContactContext";

import "./Hero.css";

function Hero() {
  const { hideNav, showNav } = useContext(NavShowContext);
  const { scrollToContact } = useContext(ScrollToContactContext);

  return (
    <div className="hero_container">
      {/* Navbar section */}
      {hideNav && <NavBar />}

      {/* The hero section */}
      <div className="divisions">
        <div className="section-heroText">
          <div className="textSpace">
            <p>let’s create your success together</p>
            <h1 className="heroText">
              Transform Your Brand with elite Design Solutions
            </h1>
          </div>
          <div className="btnContainer">
            <button className="main-btn" onClick={scrollToContact}>
              Elevate Your Brand Now
            </button>
          </div>
        </div>
        <div className="section-heroPicture">
          <img src={writingBoardImage} alt="vector image of web designer" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
