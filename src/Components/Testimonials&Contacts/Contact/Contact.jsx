import { useState, useContext, useRef } from "react";
import prevBtn from "../../../assets/Images/prev.png";
import nextBtn from "../../../assets/Images/next.png";
import { services } from "../../../serviceData.json";
import ScrollToContactContext from "../../../context/ScrollContactContext";
import "./Contact.css";

const contactDetails = [
  "Personal Information",
  "Service requested",
  "Project details",
];

function Contact() {
  const [activeTab, setActiveTab] = useState(0);
  const { contactRef } = useContext(ScrollToContactContext);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    phoneNumber: "",
    email: "",
    budget: "",
    country: "",
    services: [],
    projectDescription: "",
    aboutProject: "",
    kickDate: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectedService = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const services = checked
        ? [...prevData.services, value]
        : prevData.services.filter((service) => service !== value);
      return { ...prevData, services };
    });
  };

  const handleNextCarousel = () => {
    setActiveTab((prev) =>
      prev < contactDetails.length - 1 ? prev + 1 : contactDetails.length - 1
    );
  };

  const handlePreviousCarousel = () => {
    setActiveTab((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleFormSubmit = (e) => {
    // e, preventDefault();
    e.preventDefault();
    if (formRef.current) {
      const finalFormData = new FormData(formRef.current);
      console.log(Object.fromEntries(finalFormData.entries()));
    } else {
      console.error("Form reference is null");
    }
  };

  // checked={formData.services.includes(service.serviceName)}
  return (
    <div className="contact_container" ref={contactRef}>
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
      <form ref={formRef} onSubmit={handleFormSubmit}>
        <div className="formSpace">
          {activeTab === 0 && (
            <form className="form">
              <input
                type="text"
                className="input"
                placeholder="FISRT NAME"
                name="firstName"
                value={formData.firstName}
                onChange={handleFormChange}
              />
              <input
                type="text"
                className="input"
                placeholder="LAST NAME"
                name="lastName"
                value={formData.lastName}
                onChange={handleFormChange}
              />
              <input
                type="text"
                className="input"
                placeholder="COMPANY NAME"
                name="companyName"
                value={formData.companyName}
                onChange={handleFormChange}
              />
              <input
                type="text"
                className="input"
                placeholder="COUNTRY"
                name="country"
                value={formData.country}
                onChange={handleFormChange}
              />
              <input
                type="text"
                className="input"
                placeholder="PHONE NUMBER"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleFormChange}
              />
              <input
                type="email"
                className="input"
                placeholder="EMAIL"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
              />
              <input
                type="text"
                className="input"
                placeholder="YOUR BUDGET RANGE"
                name="budget"
                value={formData.budget}
                onChange={handleFormChange}
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
                      <input
                        type="checkbox"
                        name={service.serviceName}
                        value={service.serviceName}
                        checked={formData.services.includes(
                          service.serviceName
                        )}
                        onChange={handleSelectedService}
                      />
                    </div>
                  );
                })}
              </div>
              <textarea
                placeholder="Any More Description?"
                value={formData.projectDescription}
                name="projectDescription"
                onChange={handleFormChange}
              ></textarea>
            </div>
          )}
          {activeTab === 2 && (
            <div className="projectDetails">
              <h2>Lets talk about your needs</h2>
              <div className="tellMore textSpace">
                <label htmlFor="">Please tell us more about your project</label>
                <textarea
                  name="aboutProject"
                  value={formData.aboutProject}
                  onChange={handleFormChange}
                ></textarea>
              </div>
              <div className="deadLine textSpace">
                <label htmlFor="">
                  When would you like your project to start?
                </label>
                <textarea
                  name="kickDate"
                  className="deadLineText"
                  value={formData.kickDate}
                  onChange={handleFormChange}
                ></textarea>
              </div>
            </div>
          )}
        </div>
        <div className="positionBtn">
          <div className="btns">
            <button className="prevBtn" onClick={handlePreviousCarousel}>
              <img src={prevBtn} alt="previous icon" />
            </button>
            {activeTab === contactDetails.length - 1 ? (
              <button className="nextBtn" onClick={handleFormSubmit}>
                SUBMIT
                <img src={nextBtn} alt="Next button icon" />
              </button>
            ) : (
              <button className="nextBtn" onClick={handleNextCarousel}>
                NEXT
                <img src={nextBtn} alt="Next button icon" />
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
