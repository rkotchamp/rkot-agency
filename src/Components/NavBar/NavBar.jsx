import { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Images/rkot official-01 1.png";
import { RxHamburgerMenu } from "react-icons/rx";
import BurgerMenu from "../OpenBurgerMenu/BurgerMenu";
import NavShowContext from "../../context/NavShowContext";

import "./NavBar.css";

function NavBar() {
  const { setShowNav } = useContext(NavShowContext);
  const { setHideNav } = useContext(NavShowContext);

  const [selectedNav, setSelectedNav] = useState("");
  const location = useLocation();

  const showNavClick = () => {
    setShowNav((prev) => true);
    setHideNav((prev) => false);
  };

  useEffect(() => {
    setSelectedNav(location.pathname);
  }, [location]);

  console.log(selectedNav);
  return (
    <div className="nav_container">
      <img src={logo} alt="rkot creative solutions logo" />
      <nav>
        <ul className="navLinks_container">
          <Link to="/" className={selectedNav === "/" ? "active" : ""}>
            <li>Home</li>
          </Link>
          <Link
            to="/portfolio"
            className={selectedNav === "/portfolio" ? "active" : ""}
          >
            <li>Our Works</li>
          </Link>
          <Link
            to="/services"
            className={selectedNav === "/services" ? "active" : ""}
          >
            <li>Our Services</li>
          </Link>
          <Link
            to="/about-us"
            className={selectedNav === "/about-us" ? "active" : ""}
          >
            <li>About Us</li>
          </Link>
        </ul>
        <div className="navButtons">
          <button className="cta_Button">GET IN TOUCH</button>
          <button className="burger_Button" onClick={showNavClick}>
            <RxHamburgerMenu />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
