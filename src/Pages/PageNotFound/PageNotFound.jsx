import { RiExternalLinkLine } from "react-icons/ri";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="notFoundContainer">
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
