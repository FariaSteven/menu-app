import React from "react";
import "./Testimonial.scss";

const Testimonial = () => {
  return (
    <>
      <div className="testimonial-container">
        <div className="testimonial-content">
          <div className="header">
            <h3 className="category">Atendimento</h3>
            <h4 className="quote">
              O atendimento caloroso e eficiente faz com que cada visita seja
              uma experiência deliciosa. Voltarei com certeza!"
            </h4>
          </div>
        </div>
      </div>
      <div className="user-info">
        <img
          className="avatar"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
          alt="avatar"
          width="50px"
          height="50px"
        />
        <h3 className="author">Anderson M.</h3>
      </div>
    </>
  );
};

export default Testimonial;
