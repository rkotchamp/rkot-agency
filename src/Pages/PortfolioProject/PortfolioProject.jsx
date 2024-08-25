import { useContext } from "react";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import NavBar from "../../Components/NavBar/NavBar";
import NavShowContext from "../../context/NavShowContext";
import image from "../../assets/Images/2-02.png";
import Banner from "../../assets/Images/Banner.png";
import "./PortfolioProject.css";

function PortfolioProject() {
  const { showNav } = useContext(NavShowContext);

  return (
    <div className="projectContainer">
      {showNav && <BurgerMenu />}
      <NavBar />
      <div className="maintainContent">
        <div className="coverImageContainer">
          <img src={image} alt="" className="imageCover" />
        </div>
        {/* Project details section */}
        <div className="apiProjectDetails">
          <div className="details">
            <p className="projectHeader">Project Name :</p>
            <p className="projectTitle">FloJoe</p>
          </div>
          <div className="details">
            <p className="projectHeader">Project Type:</p>
            <p className="projectTitle">Web development</p>
          </div>
          <div className="details">
            <p className="projectHeader">Industry:</p>
            <p className="projectTitle">Artificial Intelligence(AI)</p>
          </div>
          <div className="details">
            <p className="projectHeader">Deliverable:</p>
            <p className="projectTitle">1 month</p>
          </div>
        </div>
        {/* End of project details section */}

        {/*Core Values and summary session */}
        <div className="coreValuesAndSummary">
          <div className="coreValue">
            <p>FloJoe</p>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium
            </h3>
          </div>
          <div className="projectSummary">
            <p>
              eos expedita possimus doloribus libero consequuntur eum earum rem
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus temporibus sapiente libero accusamus reprehenderit
              iste minima nisi distinctio, voluptates quis, iusto sed porro?
              magni quasi. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Recusandae dolores maiores fuga vero, laborum cumque
              voluptatibus ducimus sit? Corrupti debitis omnis dolores fugiat
              eveniet totam, at iusto placeat recusandae, ex nostrum asperiores
              sed? Fuga?
            </p>
            <button className="viewWebsite-btn">View Site</button>
          </div>
        </div>

        {/* Render grid of image asset from api */}
        <div className="renderImageAssetContainer">
          <img src={image} alt="" className="imageAssetRender" />
          <img src={Banner} alt="" className="imageAssetRender" />
          <img src={image} alt="" className="imageAssetRender" />
          <img src={Banner} alt="" className="imageAssetRender" />
          <img src={image} alt="" className="imageAssetRender" />
          <img src={Banner} alt="" className="imageAssetRender" />
        </div>
      </div>
    </div>
  );
}

export default PortfolioProject;
