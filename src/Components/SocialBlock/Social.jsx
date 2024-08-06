import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { PiLink } from "react-icons/pi";
import "./Social.css";

function Social() {
  return (
    <div className="social_blog_container">
      <div className="shareAndSocial">
        <p className="share_text">Share this article</p>
        <div className="socialIcons">
          <BsFacebook className="socIcons" />
          <FaSquareXTwitter className="socIcons" />
          <FaPinterest className="socIcons" />
          <PiLink className="socIcons" />
        </div>
      </div>

      <div className="callToActionSpace">
        <div className="questAndDescription">
          <p className="question">Want a free Consultation?</p>
          <p className="call_description">
            Lectus at cras elit a morbi lectus nisl. Sem amet quam odio vitae
            habitant blandit. Suspendisse at metus commodo nibh at. Tellus amet
            sem non commodo sit. Dolor sed nisi maecenas ut l
          </p>
        </div>
        <button className="blog_btn">Contact Us Now </button>
      </div>
    </div>
  );
}

export default Social;
