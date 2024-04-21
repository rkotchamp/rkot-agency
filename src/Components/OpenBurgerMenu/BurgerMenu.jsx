import { IoIosClose } from "react-icons/io";
import logo from "../../assets/Images/rkot logo.png";
import { useContext } from "react";
import NavShowContext from "../../context/NavShowContext";
import "./BurgerMenu.css";

function BurgerMenu() {
  const { showNav, setShowNav } = useContext(NavShowContext);
  const { hideNav, setHideNav } = useContext(NavShowContext);

  const hideNavClick = () => {
    setShowNav(false);
    setHideNav(true);
  };

  return (
    <div className="burger_menu_container">
      <div className="inline_nav">
        <img src={logo} alt="" />
        <div className="inline_navButtons">
          <button className="inline_cta_Button">GET IN TOUCH</button>
          <button className="close_burger_Button" onClick={hideNavClick}>
            <IoIosClose />
          </button>
        </div>
      </div>
      <div className="first__division">
        <div className="about_topic">
          <p>#WE ARE RKOT</p>
          <p className="menu__topic">
            LETS CREATE YOUR ONLINE SUCCESS TOGETHER
          </p>
        </div>
        <div className="contactPane">
          <p>+40756432854</p>
          <p>rkotcreativesolutions@gmail.com</p>
        </div>
      </div>
      <div className="second__division">
        <ul>
          <li>HOME</li>
          <li>OUR WORKS</li>
          <li>OUR SERVICES</li>
          <li>ABOUT US</li>
          <li>GET IN TOUCH</li>
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;
