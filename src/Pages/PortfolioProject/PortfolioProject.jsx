import { useContext, useState } from "react";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import NavBar from "../../Components/NavBar/NavBar";
import NavShowContext from "../../context/NavShowContext";
import { RiArrowDownSFill } from "react-icons/ri";
import { RiArrowUpSFill } from "react-icons/ri";
import PortfolioContext from "../../context/PortfolioContext";
import { useParams } from "react-router-dom";
// import { BiSolidUpArrow } from "react-icons/bi";
import "./PortfolioProject.css";

function PortfolioProject() {
  const { showNav } = useContext(NavShowContext);
  const { project, setProject } = useContext(PortfolioContext);
  const { id } = useParams();
  const [clientToggle, setClientToggle] = useState(true);
  const [solutionToggle, setSolutionToggle] = useState(false);
  const [resultToggle, setResultToggle] = useState(false);

  const handleClientToggle = () => {
    setClientToggle((prev) => !prev);
  };
  const handleSolutionToggle = () => {
    setSolutionToggle((prev) => !prev);
  };
  const handleResultToggle = () => {
    setResultToggle((prev) => !prev);
  };

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
              {currentProject[0]?.fields?.typeOfProject[0]}
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
            <h3>{currentProject[0]?.fields?.coreValues}</h3>
          </div>
          <div className="projectSummary">
            <p>{currentProject[0]?.fields?.projecSummary}</p>
            <button className="viewWebsite-btn">View Site</button>
          </div>
        </div>

        {/* Render grid of image asset from api */}
        <div className="renderImageAssetContainer">
          {currentProject[0]?.fields?.projectImages?.map((item) => {
            return (
              <img
                src={item?.fields?.file.url}
                alt={item?.fields?.file?.fileName}
                className="imageAssetRender"
                key={item?.sys?.id}
              />
            );
          })}
        </div>
        {/* problem,solution and  result*/}
        <div className="problem_solution_result_container">
          {/* Clients */}
          <div className="ourClients optionStyle" onClick={handleClientToggle}>
            <div
              className={
                clientToggle === true
                  ? "iconAndHeader activeToggle "
                  : "iconAndHeader"
              }
            >
              <h3>Our Clients</h3>
              {clientToggle === false && (
                <RiArrowDownSFill className="iconDown iconStyle" />
              )}
              {clientToggle === true && (
                <RiArrowUpSFill className="iconUp iconStyle" />
              )}
            </div>
            {clientToggle && <p>{currentProject[0]?.fields?.clientNeeds}</p>}
          </div>
          {/* Solution */}
          <div
            className="ourSolution optionStyle"
            onClick={handleSolutionToggle}
          >
            <div
              className={
                solutionToggle === true
                  ? "iconAndHeader activeToggle "
                  : "iconAndHeader"
              }
            >
              <h3>Our Solution</h3>
              {solutionToggle === false && (
                <RiArrowDownSFill className="iconDown iconStyle" />
              )}

              {solutionToggle === true && (
                <RiArrowUpSFill className="iconUp iconStyle" />
              )}
            </div>

            {solutionToggle && (
              <p>
                {clientToggle && (
                  <p>{currentProject[0]?.fields?.ourSolution}</p>
                )}
              </p>
            )}
          </div>
          {/* Results */}
          <div className="ourResult optionStyle" onClick={handleResultToggle}>
            <div
              className={
                resultToggle === true
                  ? "iconAndHeader activeToggle "
                  : "iconAndHeader"
              }
            >
              <h3>The Result</h3>
              {resultToggle === false && (
                <RiArrowDownSFill className="iconDown iconStyle" />
              )}
              {resultToggle === true && (
                <RiArrowUpSFill className="iconUp iconStyle" />
              )}
            </div>
            {resultToggle && (
              <p>
                {clientToggle && <p>{currentProject[0]?.fields?.theResult}</p>}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioProject;
