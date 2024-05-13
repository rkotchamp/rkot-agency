import logoSec from "../../assets/Images/rkotlogo.png";

import "./Footer.css";

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
          <li>Home</li>
          <li>Our Works</li>
          <li>Our Services</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="contactArea">
        <p className="headerArea">Contact us</p>
        <div className="messageContainer">
          <p className="contactMessage">
            Call us to know how we can transform your online prescence with our
            amazing creativity
          </p>
          <p>Email: rkotcreativesolutions@gmail.com</p>
          <p>+40 756 432 854</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;