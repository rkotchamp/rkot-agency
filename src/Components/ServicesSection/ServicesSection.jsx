import { Link } from "react-router-dom";
import "./ServicesSection.css";

function ServicesSection() {
  return (
    <div className="service-container">
      <div className="firstPane">
        <div className="service-header">
          <p>Our SERVICES</p>
          <h2>
            We pride ourselves to be customer focused, quality driven design
            agency that can support all of your design needs
          </h2>
        </div>
        <div className="notes">
          <p>
            Your designs and your online prescence is the key to your business
            door.
            <Link to="/services">
              <span>Services</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="secondPane">
        <div className="firstWeb">
          <p className="headingsIn">#Web development</p>
          <p className="text">
            We pride ourselves on being a customer-focused, quality-driven
            design agency that can support all of your web development needs.
          </p>
        </div>
        <div className="firstWeb">
          <p className="headingsIn">#Logo Design</p>
          <p className="text">
            We pride ourselves on being a customer-focused, quality-driven
            design agency that can fulfill all of your logo design needs.
          </p>
        </div>
        <div className="firstWeb">
          <p className="headingsIn">#Brand Identity</p>
          <p className="text">
            We pride ourselves on being a customer-focused, quality-driven
            design agency that can meet all of your brand identity needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
