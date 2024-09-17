import { RiExternalLinkLine } from "react-icons/ri";
import "./PageNotFound.css";
import { Link } from "react-router-dom";
import SEO from "../../Components/SEO/SEO";

function PageNotFound() {
  return (
    <div className="notFoundContainer">
      {/* <SEO
        title=""
        companyName="Rkot Designs"
        description=""
        type="summary"
        imageCoverUrl=""
        pageUrl={` https://rkotdesign.com/portfolio`}
      /> */}
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/">
        <button className="notFound-btn">
          Visit main page
          <RiExternalLinkLine />
        </button>
      </Link>
    </div>
  );
}

export default PageNotFound;
