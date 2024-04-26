import gridImage from "../../assets/Images/Rectangle .png";
import "./PortFolio-Grid.css";

function PortFolioGrid() {
  return (
    <div className="grid-container">
      <div className="titlesAndIndustry">
        <p>Moffit</p>
        <p>SaaS</p>
      </div>
      <img src={gridImage} alt="" />
    </div>
  );
}

export default PortFolioGrid;
