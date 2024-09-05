import { useContext, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { PiLink } from "react-icons/pi";
import ScrollToContactContext from "../../context/ScrollContactContext";
import CopyPopUp from "../CopyPopUp/CopyPopUp";
import { FaLinkedin } from "react-icons/fa";

import "./Social.css";

function Social({ imageBannerUrl }) {
  // Hooks
  const { scrollToContact } = useContext(ScrollToContactContext);
  const [showPopUp, setShowPopUp] = useState(false);

  const blogUrl = window.location.href;

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    blogUrl
  )}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    blogUrl
  )}&text=Check out this great blog post!&via=YourTwitterHandle`;
  const pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
    blogUrl
  )}&media=${encodeURIComponent(
    imageBannerUrl
  )}&description=Check out this post!`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    blogUrl
  )}`;

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
          <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="socIcons" />
          </a>
          <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer">
            <BsFacebook className="socIcons" />
          </a>
          <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter className="socIcons" />
          </a>
          <a href={pinterestShareUrl} target="_blank" rel="noopener noreferrer">
            <FaPinterest className="socIcons" />
          </a>
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
