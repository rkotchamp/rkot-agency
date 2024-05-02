import Contact from "../Contact/Contact";
import Testimonials from "../Testimonials/Testimonials";

import "./Testimony.css";

function Testimony() {
  return (
    <div className="testimony__container">
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Testimony;
