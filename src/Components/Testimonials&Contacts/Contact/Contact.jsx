import { useState } from "react";
import prevBtn from "../../../assets/Images/prev.png";
import nextBtn from "../../../assets/Images/next.png";
import { services } from "../../../serviceData.json";
import "./Contact.css";

const contactDetails = [
  "Personal Information",
  "Service requested",
  "Project details",
];

function Contact() {
  const [activeTab, setActiveTab] = useState(0);

  const handleNextCarousel = () => {
    setActiveTab((prev) =>
      prev < contactDetails.length - 1 ? prev + 1 : contactDetails.length - 1
    );
  };

  const handlePreviousCarousel = () => {
    setActiveTab((prev) => (prev > 0 ? prev - 1 : 0));
  };

  console.log(activeTab);
  return (
    <div className="contact_container">
      {/* Carousel space */}
      <div className="indicator_container">
        {contactDetails.map((item, i) => {
          return (
            <div
              className={activeTab === i ? "detailsNameAndNumber" : "hideTab"}
              key={i}
            >
              <p className="count">
                {i + 1}/ {contactDetails.length}
              </p>
              <p className="item">{item}</p>
            </div>
          );
        })}
        <div className="indicator">
          {contactDetails.map((_, index) => {
            return (
              <>
                <button
                  className={activeTab === index ? "circle" : "noCircle"}
                  key={index}
                ></button>
                <button
                  className={
                    contactDetails.length - 1 === index
                      ? "hideTab"
                      : "straight_line"
                  }
                ></button>
              </>
            );
          })}
        </div>
      </div>
      {/* user form space */}
      <div className="formSpace">
        {activeTab === 0 && (
          <form action="" className="form">
            <input type="text" className="input" placeholder="FISRT NAME" />
            <input type="text" className="input" placeholder="LAST NAME" />
            <input type="text" className="input" placeholder="COMPANY NAME" />
            <input type="text" className="input" placeholder="PHONE NUMBER" />
            <input type="email" className="input" placeholder="EMAIL" />
            <input
              type="text"
              className="input"
              placeholder="YOUR BUDGET RANGE"
            />
          </form>
        )}

        {/* services */}
        {activeTab === 1 && (
          <div className="contactService">
            <h2>what do you need help with?</h2>
            <div className="chooseService">
              {services.map((service, indx) => {
                return (
                  <div className="serviceContainer" key={indx}>
                    <img src={service.icon} alt={service.serviceName} />
                    <p>{service.serviceName}</p>
                  </div>
                );
              })}
            </div>
            <textarea placeholder="Any More Description?"></textarea>
          </div>
        )}
        {activeTab === 2 && (
          <div className="projectDetails">
            <h2>Lets talk about your needs</h2>
            <div className="tellMore textSpace">
              <label htmlFor="">Please tell us more about your project</label>
              <textarea name="needs"></textarea>
            </div>
            <div className="deadLine textSpace">
              <label htmlFor="">
                When would you like your project to start?
              </label>
              <textarea name="deadline" className="deadLineText"></textarea>
            </div>
          </div>
        )}
      </div>
      <div className="positionBtn">
        <div className="btns">
          <button className="prevBtn" onClick={handlePreviousCarousel}>
            <img src={prevBtn} alt="previous icon" />
          </button>
          <button className="nextBtn" onClick={handleNextCarousel}>
            NEXT
            <img src={nextBtn} alt="Next button icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
