import NavBar from "../../Components/NavBar/NavBar";
import agencyImage from "../../assets/Images/serveimage.png";
import createIcon from "../../assets/Images/createPNG.png";
import marketing from "../../assets/Images/marketingPng.png";
import maintenance from "../../assets/Images/maintenancePng.png";
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

            <div className="icons__space">
              <div className="create agencyIcons">
                <img src={createIcon} alt="creating your online presence" />
                <h4>Create your prescence</h4>
                <p>
                  We excel at converting your ideas into a successful web
                  design, logos and brand.
                </p>
              </div>
              <div className="marketing agencyIcons">
                <img src={marketing} alt="Marketing and SEO strategy" />
                <h4>Marketing & SEO Strategy</h4>
                <p>
                  We dont just create we also help your business reach more
                  clients
                </p>
              </div>
              <div className="maintenace agencyIcons">
                <img src={maintenance} alt="site maintenance and updates" />
                <h4>Maintenance & Updates</h4>
                <p>We assist in maintaining and keep your sites up to date.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
