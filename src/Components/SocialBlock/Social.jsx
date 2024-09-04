import { useContext, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { PiLink } from "react-icons/pi";
import ScrollToContactContext from "../../context/ScrollContactContext";
import CopyPopUp from "../CopyPopUp/CopyPopUp";
import { FaLinkedin } from "react-icons/fa";
import "./Social.css";

function Social() {
  // Hooks
  const { scrollToContact } = useContext(ScrollToContactContext);
  const [showPopUp, setShowPopUp] = useState(false);

  //  Functions
  const copyToClipboard = async (e) => {
    e.preventDefault();
    const getTheUrl = window.location.href;
    try {
      await navigator.clipboard.writeText(getTheUrl);
      console.log(getTheUrl);
      setShowPopUp(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnmount = () => {
    setShowPopUp(false);
  };

  return (
    <div className="social_blog_container">
      <div className="shareAndSocial">
        <p className="share_text">Enjoyed the read? Share it!</p>
        <div className="socialIcons">
          <FaLinkedin className="socIcons" />
          <BsFacebook className="socIcons" />
          <FaSquareXTwitter className="socIcons" />
          <FaPinterest className="socIcons" />
          <PiLink className="socIcons" onClick={copyToClipboard} />
        </div>
      </div>
      {showPopUp && <CopyPopUp unMount={handleUnmount} />}
      <div className="callToActionSpace">
        <div className="questAndDescription">
          <p className="question">Want a free Consultation?</p>
          <p className="call_description">
            Join over 100+ businesses that have transformed their online
            presence with our expert guidance. Whether you're just starting or
            looking to scale, we're here to help you succeed.
          </p>
        </div>
        <button className="blog_btn" onClick={scrollToContact}>
          Contact Us Now
        </button>
      </div>
    </div>
  );
}

export default Social;
