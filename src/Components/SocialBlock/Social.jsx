import { useContext, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { PiLink } from "react-icons/pi";
import ScrollToContactContext from "../../context/ScrollContactContext";
import "./Social.css";
import CopyPopUp from "../CopyPopUp/CopyPopUp";

function Social() {
  // Hooks
  const { scrollToContact } = useContext(ScrollToContactContext);
  const [showPopUp, setShowPopUp] = useState(false);

  //  Functions
  const copyToClipboard = async () => {
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
        <p className="share_text">Share this article</p>
        <div className="socialIcons">
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
            Lectus at cras elit a morbi lectus nisl. Sem amet quam odio vitae
            habitant blandit. Suspendisse at metus commodo nibh at. Tellus amet
            sem non commodo sit. Dolor sed nisi maecenas ut l
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
