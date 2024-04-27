import "./ServicesSection.css";

function ServicesSection() {
  return (
    <div className="service-container">
      <div className="firstPane">
        <div className="service-header">
          <p>Our SERVICES</p>
          <h2>
            We pride ourselves to be customer focused, quality driven design
            agency that can supportall of your design needs
          </h2>
        </div>
        <div className="notes">
          <p>
            Your designs and your online prescence is the key to your business
            door. <span>Services</span>
          </p>
        </div>
      </div>
      <div className="secondPane">
        <div className="firstWeb">
          <p className="headingsIn">#Web development</p>
          <p className="text">
            We pride ourselves to be customer focused, quality driven design
            agency that can supportall of your design needs
          </p>
        </div>
        <div className="firstWeb">
          <p className="headingsIn">#Web development</p>
          <p className="text">
            We pride ourselves to be customer focused, quality driven design
            agency that can supportall of your design needs
          </p>
        </div>
        <div className="firstWeb">
          <p className="headingsIn">#Web development</p>
          <p className="text">
            We pride ourselves to be customer focused, quality driven design
            agency that can supportall of your design needs
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
