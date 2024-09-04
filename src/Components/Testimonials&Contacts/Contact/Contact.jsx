import { useState, useContext, useRef, useCallback } from "react";
import prevBtn from "../../../assets/Images/prev.png";
import nextBtn from "../../../assets/Images/next.png";
import { Services } from "../../../serviceData.json";
import ScrollToContactContext from "../../../context/ScrollContactContext";
import Loader from "../../Loaders/Loader";
import dotenv from "dotenv";

import axios from "axios";

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
    FirstName: "",
    Surname: "",
    CompanyName: "",
    PhoneNumber: "",
    Email: "",
    Budget: "",
    Country: "",
    Services: [],
    ProjectDescription: "",
    AboutProject: "",
    KickDate: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorHandler, setErrorHandler] = useState(" ");
  const [isSelected, setIsSelected] = useState();

  // Form onChange
  const handleFormChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      if (activeTab === 0) {
        if (
          name === "FirstName" ||
          name === "Surname" ||
          name === "CompanyName" ||
          name === "Email" ||
          name === "PhoneNumber" ||
          name === "Country"
        ) {
          setErrorHandler("");
        }
      }
    },
    [setFormData, activeTab]
  );

  const handleSelectedService = (e) => {
    e.stopPropagation();
    const { name, value, checked } = e.target;
    console.log("Checkbox Event:", { name, value, checked });
    setFormData((prevData) => {
      const updatedServices = checked
        ? [
            ...prevData.Services.filter(
              (service) => typeof service === "string"
            ),
            value,
          ]
        : prevData.Services.filter((service) => service !== value);
      console.log("Updated Services:", updatedServices);
      return { ...prevData, [name]: updatedServices };
    });
    if (formData.Services.length === 0 && checked) {
      setErrorHandler("");
    }
  };

  const handleContainerClick = (serviceName) => {
    setFormData((prevData) => {
      const isSelected = formData.Services.includes(serviceName);
      const updatedServices = isSelected
        ? prevData.Services.filter((service) => service !== serviceName)
        : [...prevData.Services, serviceName];
      if (updatedServices.length > 0) {
        setErrorHandler("");
      }
      return { ...prevData, Services: updatedServices };
    });
  };

  // Next Carousel
  const handleNextCarousel = useCallback(() => {
    setActiveTab((prev) => {
      if (prev === 0) {
        if (formData.FirstName === "") {
          setErrorHandler(
            "Oh, don’t be a stranger! We need your first name, please."
          );
          return prev;
        } else if (formData.Surname === "") {
          setErrorHandler(
            "Who’s the mysterious stranger? We need your last name to proceed."
          );
          return prev;
        } else if (formData.CompanyName === "") {
          setErrorHandler(
            "Every hero has a guild! Reveal your company name to continue."
          );
          return prev;
        } else if (formData.Email === "") {
          setErrorHandler(
            "Don’t leave us in the dark! Tell us your email to keep the magic flowing."
          );
          return prev;
        } else if (formData.PhoneNumber === "") {
          setErrorHandler(
            "A phone number is essential! We need to contact you—what's your number?"
          );
          return prev;
        } else if (formData.Country === "") {
          setErrorHandler(
            "Every wizard needs a home base! What country do you hail from?"
          );
          return prev;
        }

        setErrorHandler("");
      } else if (prev === 1) {
        if (formData.Services.length === 0) {
          setErrorHandler(
            "No services selected? We need to know what you seek help with!"
          );
          return prev;
        }
        setErrorHandler("");
      }

      return prev < contactDetails.length - 1
        ? prev + 1
        : contactDetails.length - 1;
    });
  }, [formData, setActiveTab, setErrorHandler]);

  // Previous Carousel
  const handlePreviousCarousel = useCallback(() => {
    setActiveTab((prev) => (prev > 0 ? prev - 1 : 0));
  }, [setActiveTab]);

  // Submit Data
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const data = new FormData();
    data.append("FirstName", formData.FirstName);
    data.append("Surname", formData.Surname);
    data.append("CompanyName", formData.CompanyName);
    data.append("Email", formData.Email);
    data.append("PhoneNumber", formData.PhoneNumber);
    data.append("Budget", formData.Budget);
    data.append("Country", formData.Country);
    data.append("Services", formData.Services.join(", "));
    data.append("ProjectDescription", formData.ProjectDescription);
    data.append("AboutProject", formData.AboutProject);
    data.append("KickDate", formData.KickDate);

    const Sheet_Url = import.meta.env.VITE_GOOGLE_KEY;
    try {
      const response = await fetch(Sheet_Url, {
        method: "POST",
        body: data,
        mode: "cors",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      setFormData({
        FirstName: "",
        Surname: "",
        CompanyName: "",
        Email: "",
        PhoneNumber: "",
        Budget: "",
        Country: "",
        Services: [],
        ProjectDescription: "",
        AboutProject: "",
        KickDate: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      setIsSubmitted(false);
      setActiveTab(0);
    }
  };

  return (
    <div className="contact_container" ref={contactRef}>
      {isSubmitted && (
        <div className="loader-overlay">
          <Loader />
        </div>
      )}
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
            <div className="form">
              <input
                type="text"
                className="input"
                placeholder="FIRST NAME"
                name="FirstName"
                value={formData.FirstName}
                onChange={handleFormChange}
              />
              <input
                type="text"
                className="input"
                placeholder="LAST NAME"
                name="Surname"
                value={formData.Surname}
                onChange={handleFormChange}
              />
              <input
                type="text"
                className="input"
                placeholder="COMPANY NAME"
                name="CompanyName"
                value={formData.CompanyName}
                onChange={handleFormChange}
              />
              <input
                type="text"
                className="input"
                placeholder="COUNTRY"
                name="Country"
                value={formData.Country}
                onChange={handleFormChange}
              />
              <input
                type="text"
                className="input"
                placeholder="PHONE NUMBER"
                name="PhoneNumber"
                value={formData.PhoneNumber}
                onChange={handleFormChange}
              />
              <input
                type="email"
                className="input"
                placeholder="EMAIL"
                name="Email"
                value={formData.Email}
                onChange={handleFormChange}
              />
              <input
                type="text"
                className="input"
                placeholder="YOUR BUDGET RANGE"
                name="Budget"
                value={formData.Budget}
                onChange={handleFormChange}
              />
            </div>
          )}

          {/* services */}
          {activeTab === 1 && (
            <div className="contactService">
              <h2>Which areas of your project need expert attention?</h2>
              <div className="chooseService">
                {Services.map((service, indx) => {
                  return (
                    <div
                      className={
                        formData.Services.includes(service.ServiceName)
                          ? "serviceContainer activeSelect"
                          : "serviceContainer"
                      }
                      key={indx}
                      onClick={() => handleContainerClick(service.ServiceName)}
                    >
                      <img src={service.icon} alt={service.ServiceName} />
                      <p
                        className={
                          formData.Services.includes(service.ServiceName)
                            ? "activeSelectText"
                            : "serveText"
                        }
                      >
                        {service.ServiceName}
                      </p>
                      <input
                        type="checkbox"
                        name="Services"
                        value={service.ServiceName}
                        checked={isSelected}
                        onChange={handleSelectedService}
                      />
                    </div>
                  );
                })}
              </div>
              <textarea
                placeholder="Anything we should know to assist you better?"
                value={formData.ProjectDescription}
                name="ProjectDescription"
                onChange={handleFormChange}
              ></textarea>
            </div>
          )}
          {activeTab === 2 && (
            <div className="projectDetails">
              <h2>Lets talk about your needs</h2>
              <div className="tellMore textSpace">
                <label htmlFor="">
                  What specific challenges are you facing with your current
                  website or design?
                </label>
                <textarea
                  name="AboutProject"
                  value={formData.AboutProject}
                  onChange={handleFormChange}
                ></textarea>
              </div>
              <div className="deadLine textSpace">
                <label htmlFor="">
                  What’s the most critical goal you hope to achieve with this
                  project?
                </label>
                <textarea
                  name="KickDate"
                  className="deadLineText"
                  value={formData.KickDate}
                  onChange={handleFormChange}
                ></textarea>
              </div>
            </div>
          )}
        </div>
      </form>
      <div className="positionBtn">
        <div className="btns">
          <button
            className="prevBtn"
            onClick={handlePreviousCarousel}
            type="button"
          >
            <img src={prevBtn} alt="previous icon" />
          </button>
          {activeTab === contactDetails.length - 1 ? (
            <button
              className="nextBtn"
              onClick={handleFormSubmit}
              type="submit"
            >
              SUBMIT
              {/* <img src={nextBtn} alt="Next button icon" /> */}
            </button>
          ) : (
            <button
              className="nextBtn"
              onClick={handleNextCarousel}
              type="button"
            >
              NEXT
              <img src={nextBtn} alt="Next button icon" />
            </button>
          )}
        </div>
      </div>
      {errorHandler && (
        <div className="errorHandler">
          <p>{errorHandler}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
