import NavBar from "../../Components/NavBar/NavBar";
import agencyImage from "../../assets/Images/serveimage.png";
import "./Service.css";

function Service() {
  return (
    <div className="service__container">
      <NavBar />
      <div className="styleContainer">
        <div className="service__headers">
          <div className="headersPane">
            <p>
              we have the skills and experience to deliver high quality works
            </p>
            <h2>Our Digital services to help you transform your business</h2>
          </div>

          <div className="service_image_and_icons">
            <div className="image_container">
              <img src={agencyImage} alt="Web development agency Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
