import PortFolioGrid from "../PortFolio-Grid/PortFolioGrid";
import "./PortfolioSection.css";

function PortfolioSection() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <p>Our Portfolio</p>
        <h2>From boardroom to browser, we tailor success with design.</h2>
      </div>
      <div className="portfolio-grid">
        <PortFolioGrid />
        <PortFolioGrid />
        <PortFolioGrid />
        <PortFolioGrid />
        <PortFolioGrid />
        <PortFolioGrid />
      </div>
      <button className="port-button">Unlock Hidden Gems</button>
    </div>
  );
}

export default PortfolioSection;
