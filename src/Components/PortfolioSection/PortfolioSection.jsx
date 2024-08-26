import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PortfolioContext from "../../context/PortfolioContext";
import PortFolioGrid from "../PortFolio-Grid/PortFolioGrid";
import { Link } from "react-router-dom";
import "./PortfolioSection.css";

function PortfolioSection() {
  // Hooks
  const { project, setProject } = useContext(PortfolioContext);
  const [visibleCount, setVisibleCount] = useState(6);
  const [show, setShow] = useState(false);
  const location = useLocation();

  // Functions
  const showMore = () => {
    setVisibleCount(project.length);
    setShow(true);
  };

  const handleShowLess = () => {
    setVisibleCount(6);
    setShow(false);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <p>Our Portfolio</p>
        <h2>From boardroom to browser, we tailor success with design.</h2>
      </div>
      <div className="portfolio-grid">
        {project.slice(0, visibleCount).map((item, index) => {
          return (
            <PortFolioGrid
              key={index}
              projectName={item.fields.projectName}
              industry={item.fields.industry}
              coverImage={item.fields.coverImage.fields.file.url}
              imageAlt={item.fields.coverImage.fields.title}
              sysId={item.sys.id}
            />
          );
        })}
      </div>

      {show ? (
        <button className="port-button" onClick={handleShowLess}>
          Hidden Gems
        </button>
      ) : location.pathname === "/portfolio" ? (
        <button className="port-button" onClick={showMore}>
          Unlock Hidden Gems
        </button>
      ) : (
        <Link to="/portfolio">
          <button className="port-button" onClick={showMore}>
            Unlock Hidden Gems
          </button>
        </Link>
      )}
    </div>
  );
}

export default PortfolioSection;
