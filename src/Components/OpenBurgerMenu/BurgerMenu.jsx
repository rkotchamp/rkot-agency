import { useEffect, useContext } from "react";
import { IoIosClose } from "react-icons/io";
import logo from "../../assets/Images/rkotlogo.png";
import { useNavigate } from "react-router-dom";
import NavShowContext from "../../context/NavShowContext";
import "./BurgerMenu.css";
import { DiStylus } from "react-icons/di";

function BurgerMenu() {
  const { showNav, setShowNav } = useContext(NavShowContext);
  const { hideNav, setHideNav } = useContext(NavShowContext);

  const navigate = useNavigate();

  const handleUseNav = (path) => {
    return () => navigate(path);
  };

  useEffect(() => {
    // Using this condition to
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showNav]);

  const hideNavClick = () => {
    setShowNav(false);
    setHideNav(true);
  };

  return (
    <div className="burger_menu_container">
      <div className="inline_nav">
        <img src={logo} alt="rkot agency logo" />
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
          <li onClick={handleUseNav("/")}>HOME</li>
          <li onClick={handleUseNav("/portfolio")}>OUR WORKS</li>
          <li>OUR SERVICES</li>
          <li>ABOUT US</li>
          <li>GET IN TOUCH</li>
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;
