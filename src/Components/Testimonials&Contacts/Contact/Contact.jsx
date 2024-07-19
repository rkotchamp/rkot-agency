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

  // Checked Services
  const handleSelectedService = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => {
      const updatedServices = checked
        ? [...prevData.Services, value]
        : prevData.Services.filter((service) => service !== value);
      return { ...prevData, [name]: updatedServices };
    });
  };

  // Next Carousel
  // const handleNextCarousel = useCallback(() => {
  //   setActiveTab((prev) => {
  //     if (prev === 0) {
  //       if (formData.FirstName === "") {
  //         setErrorHandler("Oh you Hurry Potter tell us your first name");
  //       } else if (formData.Surname === "") {
  //         setErrorHandler("Oh you Hurry Potter tell us your Last name");
  //       } else if (formData.CompanyName === "") {
  //         setErrorHandler("Please fill in your company");
  //       } else if (formData.Email) {
  //         setErrorHandler("Please fill in your Email");
  //       } else if (formData.PhoneNumber) {
  //         setErrorHandler("Please fill in your Phone number");
  //       } else if (formData.Country) {
  //         setErrorHandler("Please fill in your Country");
  //       }
  //       prev + 1;
  //     } else {
  //     }
  //     // prev < contactDetails.length - 1 ? prev + 1 : contactDetails.length - 1
  //   });
  // }, [setActiveTab]);
  const handleNextCarousel = useCallback(() => {
    setActiveTab((prev) => {
      if (prev === 0) {
        if (formData.FirstName === "") {
          setErrorHandler("Oh you Hurry Potter tell us your first name");
          return prev;
        } else if (formData.Surname === "") {
          setErrorHandler("Oh you Hurry Potter tell us your Last name");
          return prev;
        } else if (formData.CompanyName === "") {
          setErrorHandler("Please fill in your company");
          return prev;
        } else if (formData.Email === "") {
          setErrorHandler("Please fill in your Email");
          return prev;
        } else if (formData.PhoneNumber === "") {
          setErrorHandler("Please fill in your Phone number");
          return prev;
        } else if (formData.Country === "") {
          setErrorHandler("Please fill in your Country");
          return prev;
        }
        // Clear the error if all fields are filled
        setErrorHandler("");
      }

      // Proceed to the next tab
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

    // const Sheet_Url =
    //   "https://script.google.com/macros/s/AKfycbym7zFqrwArlLJJnwE2tencBmVE11S_dkp-cZk4awAfCc9e0URTSOx9MrSAffCBNnU9TA/exec";
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
      console.log("Data submitted successfully:", result);

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

  console.log(formData);
  // checked={formData.services.includes(service.serviceName)}
  return (
    <div className="contact_container" ref={contactRef}>
      {isSubmitted && <Loader />}
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
              <h2>what do you need help with?</h2>
              <div className="chooseService">
                {Services.map((service, indx) => {
                  return (
                    <div className="serviceContainer" key={indx}>
                      <img src={service.icon} alt={service.ServiceName} />
                      <p>{service.ServiceName}</p>
                      <input
                        type="checkbox"
                        name="Services"
                        value={service.ServiceName}
                        checked={formData.Services.includes(
                          service.ServiceName
                        )}
                        onChange={handleSelectedService}
                      />
                    </div>
                  );
                })}
              </div>
              <textarea
                placeholder="Any More Description?"
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
                <label htmlFor="">Please tell us more about your project</label>
                <textarea
                  name="AboutProject"
                  value={formData.AboutProject}
                  onChange={handleFormChange}
                ></textarea>
              </div>
              <div className="deadLine textSpace">
                <label htmlFor="">
                  When would you like your project to start?
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
      {errorHandler && <p className="errorHandler">{errorHandler}</p>}
    </div>
  );
}

export default Contact;
