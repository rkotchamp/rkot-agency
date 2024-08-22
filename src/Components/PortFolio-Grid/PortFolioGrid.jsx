// import { useContext } from "react";
import PortfolioContext from "../../context/PortfolioContext";
import gridImage from "../../assets/Images/Rectangle .png";
import "./PortFolio-Grid.css";

function PortFolioGrid({ projectName, industry, coverImage, imageAlt }) {
  // const { project, setProject } = useContext(PortfolioContext);
  return (
    <div className="grid-container">
      <div className="titlesAndIndustry">
        <p className="company-name">{projectName}</p>
        <p className="company-industry">{industry}</p>
      </div>
      <img src={coverImage} alt={imageAlt} />
    </div>
  );
}

export default PortFolioGrid;
