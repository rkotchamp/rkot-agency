import logoSec from "../../assets/Images/rkotlogo.png";

import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer__container">
      <div className="imagesAndHeader">
        <img src={logoSec} alt="rkot Web design agency logo" />
        <p>
          Call us to know how we can transform your online prescence with our
          amazing creativity
        </p>
      </div>
      <div className="navContainer">
        <p>Navigation</p>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/portfolio">
            <li>Our Works</li>
          </Link>
          <Link to="/services">
            <li>Our Services</li>
          </Link>
          <Link to="/about-us">
            <li>About Us</li>
          </Link>
        </ul>
      </div>
      <div className="contactArea">
        <p className="headerArea">Contact us</p>
        <div className="messageContainer">
          <p className="contactMessage">
            Call us to know how we can transform your online prescence with our
            amazing creativity
          </p>
          <p>
            <a href="mailto:project@rkotdesigns.com">
              Email: project@rkotdesigns.com
            </a>
          </p>
          <p>
            <a href="tel:+40 756 432 854">+40 756 432 854</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
