import { useState } from "react";
import prevBtn from "../../../assets/Images/prev.png";
import nextBtn from "../../../assets/Images/next.png";
import "./Contact.css";

const contactDetails = [
  "Personal Information",
  "Service requested",
  "Project details",
];
function Contact() {
  const [activeTab, setActiveTab] = useState(0);
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
      </div>
      <div className="positionBtn">
        <div className="btns">
          <button className="prevBtn">
            <img src={prevBtn} alt="previous icon" />
          </button>
          <button className="nextBtn">
            NEXT
            <img src={nextBtn} alt="Next button icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
