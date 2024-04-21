import { useContext } from "react";
import logo from "../../assets/Images/rkot official-01 1.png";
import { RxHamburgerMenu } from "react-icons/rx";
import BurgerMenu from "../OpenBurgerMenu/BurgerMenu";
import NavShowContext from "../../context/NavShowContext";
import "./NavBar.css";

function NavBar() {
  const { setShowNav } = useContext(NavShowContext);
  const { setHideNav } = useContext(NavShowContext);

  const showNavClick = () => {
    setShowNav((prev) => true);
    setHideNav((prev) => false);
  };

  return (
    <div className="nav_container">
      <img src={logo} alt="rkot creative solutions logo" />
      <nav>
        <ul className="navLinks_container">
          <li>Home</li>
          <li>Our Works</li>
          <li>Our Services</li>
          <li>About Us</li>
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
