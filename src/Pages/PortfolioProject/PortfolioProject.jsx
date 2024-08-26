import { useContext } from "react";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import NavBar from "../../Components/NavBar/NavBar";
import NavShowContext from "../../context/NavShowContext";
import image from "../../assets/Images/2-02.png";
import Banner from "../../assets/Images/Banner.png";
import PortfolioContext from "../../context/PortfolioContext";
import { useParams } from "react-router-dom";
import "./PortfolioProject.css";

function PortfolioProject() {
  const { showNav } = useContext(NavShowContext);
  const { project, setProject } = useContext(PortfolioContext);
  const { id } = useParams();
  // console.log(project);
  const currentProject = project.filter((item) => item.sys.id === id);
  console.log(currentProject[0]);
  return (
    <div className="projectContainer">
      {showNav && <BurgerMenu />}
      <NavBar />
      <div className="maintainContent">
        <div className="coverImageContainer">
          <img
            src={currentProject[0]?.fields?.coverImage?.fields?.file?.url}
            alt={currentProject[0]?.fields?.coverImage?.fields?.file?.fileName}
            className="imageCover"
          />
        </div>
        {/* Project details section */}
        <div className="apiProjectDetails">
          <div className="details">
            <p className="projectHeader">Project Name :</p>
            <p className="projectTitle">
              {currentProject[0]?.fields?.projectName}
            </p>
          </div>
          <div className="details">
            <p className="projectHeader">Project Type:</p>
            <p className="projectTitle">
              {/* {currentProject[0]?.fields?.typeOfProject[0]} */}
            </p>
          </div>
          <div className="details">
            <p className="projectHeader">Industry:</p>
            <p className="projectTitle">
              {" "}
              {currentProject[0]?.fields?.industry}
            </p>
          </div>
          <div className="details">
            <p className="projectHeader">Deliverable:</p>
            <p className="projectTitle">
              {currentProject[0]?.fields?.deliverables}
            </p>
          </div>
        </div>
        {/* End of project details section */}

        {/*Core Values and summary session */}
        <div className="coreValuesAndSummary">
          <div className="coreValue">
            <p> {currentProject[0]?.fields?.projectName}</p>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium
            </h3>
          </div>
          <div className="projectSummary">
            <p>{currentProject[0]?.fields?.projecSummary}</p>
            <button className="viewWebsite-btn">View Site</button>
          </div>
        </div>

        {/* Render grid of image asset from api */}
        <div className="renderImageAssetContainer">
          {currentProject[0]?.fields?.projectImages?.map((item, i) => {
            return (
              <img
                src={item?.fields?.file.url}
                alt={item?.fields?.file?.fileName}
                className="imageAssetRender"
                key={item?.sys?.id}
              />
            );
          })}
          {/* <img src={image} alt="" className="imageAssetRender" />
          <img src={Banner} alt="" className="imageAssetRender" />
          <img src={image} alt="" className="imageAssetRender" />
          <img src={Banner} alt="" className="imageAssetRender" />
          <img src={image} alt="" className="imageAssetRender" />
          <img src={Banner} alt="" className="imageAssetRender" /> */}
        </div>
      </div>
    </div>
  );
}

export default PortfolioProject;
