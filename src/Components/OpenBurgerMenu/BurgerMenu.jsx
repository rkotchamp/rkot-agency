import { useEffect, useContext } from "react";
import { IoIosClose } from "react-icons/io";
import logo from "../../assets/Images/rkotlogo.png";
import { useNavigate } from "react-router-dom";
import NavShowContext from "../../context/NavShowContext";
import { Link } from "react-router-dom";
import ScrollToContactContext from "../../context/ScrollContactContext";

import "./BurgerMenu.css";

function BurgerMenu() {
  const { showNav, setShowNav, setHideNav } = useContext(NavShowContext);
  const { scrollToContact } = useContext(ScrollToContactContext);

  // const { hideNav, setHideNav } = useContext(NavShowContext);

  // const navigate = useNavigate();

  // const handleUseNav = (path) => {
  //   return () => navigate(path);
  // };

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
    <div className={`burger_menu_container ${showNav ? "hidden" : ""}`}>
      <div className="inline_nav">
        <img src={logo} alt="rkot agency logo" />
        <div className="inline_navButtons">
          <button
            className="inline_cta_Button"
            onClick={() => {
              scrollToContact();
              hideNavClick();
            }}
          >
            GET IN TOUCH
          </button>
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
          <p>
            <a href="tel:+40756432854">+40756432854</a>
          </p>
          <p>
            <a href="mailto:project@rkotdesigns.com" onClick={hideNavClick}>
              project@rkotdesigns.com
            </a>
          </p>
        </div>
      </div>
      <div className="second__division">
        <ul>
          <Link to="/" onClick={hideNavClick}>
            <li>HOME</li>
          </Link>
          <Link to="/portfolio" onClick={hideNavClick}>
            <li>OUR WORKS</li>
          </Link>
          <Link to="/services" onClick={hideNavClick}>
            <li>OUR SERVICES</li>
          </Link>
          <Link to="/about-us" onClick={hideNavClick}>
            <li>ABOUT US</li>
          </Link>
          <Link to="/blogs" onClick={hideNavClick}>
            <li>BLOG</li>
          </Link>
          <li
            onClick={() => {
              hideNavClick();
              scrollToContact();
            }}
          >
            GET IN TOUCH
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;
