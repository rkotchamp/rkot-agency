import { Link } from "react-router-dom";
import "./PortFolio-Grid.css";

function PortFolioGrid({ projectName, industry, coverImage, imageAlt, sysId }) {
  return (
    <>
      <Link to={`/portfolio/${sysId}`}>
        <div className="grid-container">
          <div className="titlesAndIndustry">
            <p className="company-name">{projectName}</p>
            <p className="company-industry">{industry}</p>
          </div>
          <img src={coverImage} alt={imageAlt} />
        </div>
      </Link>
    </>
  );
}

export default PortFolioGrid;
