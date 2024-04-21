import { useContext } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import writingBoardImage from "../../assets/Images/land3 1.png";
import NavShowContext from "../../context/NavShowContext";

import "./Hero.css";

function Hero() {
  const { hideNav } = useContext(NavShowContext);
  const { showNav } = useContext(NavShowContext);

  return (
    <div className="hero_container">
      {/* Navbar section */}
      {hideNav && <NavBar />}
      {showNav && <BurgerMenu />}

      {/* The hero section */}
      <div className="divisions">
        <div className="section-heroText">
          <div className="textSpace">
            <p>let’s create your success together</p>
            <h1 className="heroText">
              Transform Your Brand with elite Design Solutions
            </h1>
          </div>
          <button className="main-btn">Elevate Your Brand Now</button>
        </div>
        <div className="section-heroPicture">
          <img src={writingBoardImage} alt="vector image of web designer" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
