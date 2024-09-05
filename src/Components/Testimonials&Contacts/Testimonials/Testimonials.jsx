import "./Testimonials.css";

function Testimonials() {
  return (
    <div className="testimonials__container">
      <p>Testimonials</p>
      <h2>What are people Saying?</h2>
      <p className="message">
        I’m really happy with the logo and branding that Rkot created for my
        business! They listened to what I wanted and came up with a design that
        perfectly fits my style. The whole process was smooth, and they provided
        everything I needed to keep my branding consistent.
      </p>
      <div className="locoAuthor">
        <p className="testAuthor">Irene Glover</p>
        <p className="loco">Dallas,Texas</p>
      </div>
    </div>
  );
}

export default Testimonials;
