import PortFolioGrid from "../PortFolio-Grid/PortFolioGrid";
import "./PortfolioSection.css";

function PortfolioSection() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <p>Our Portfolio</p>
        <h2>People dress to impress. we design for business success </h2>
      </div>
      <div className="portfolio-grid">
        <PortFolioGrid />
        <PortFolioGrid />
        <PortFolioGrid />
        <PortFolioGrid />
        <PortFolioGrid />
        <PortFolioGrid />
      </div>
    </div>
  );
}

export default PortfolioSection;
