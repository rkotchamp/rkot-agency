import logo from "../../assets/Images/rkot official-01 1.png";
import { RxHamburgerMenu } from "react-icons/rx";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav_container">
      <img src={logo} alt="rkot creative logo" />
      <nav>
        <ul className="navLinks_container">
          <li>Home</li>
          <li>Our Works</li>
          <li>Our Services</li>
          <li>About Us</li>
        </ul>
        <div className="navButtons">
          <button className="cta_Button">GET IN TOUCH</button>
          <button className="burger_Button">
            <RxHamburgerMenu />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
