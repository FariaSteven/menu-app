import React from "react";

import "./Testimonial.scss";

const Testimonial = () => {
  return (
    <>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: "300px",
        boxShadow: "0px 2px 12px 0px rgba(0, 0, 0, 0.2)",
        borderRadius: "30px",
        fontSize: "1rem",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
          }}
        >
          Atendimento
        </h3>
        <h4
          style={{
            margin: "10px",
            fontSize: "1.1rem",
          }}
        >
          O atendimento caloroso e eficiente faz com que cada visita seja uma
          experiência deliciosa. Voltarei com certeza!"
        </h4>
      </div>
    </div>
    <img
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
        alt="avatar"
        width="50px"
        height="50px"
        style={{
          margin: "8px 0px",
          borderRadius: "50px",
          // boxShadow: "0px 5px 8px 0px rgba(0, 0, 0, 0.2)",
          // marginBottom: "-39px",
        }}
      />
      <h3
          style={{
            fontSize: "1rem",
            fontWeight: "600",
          }}
        >
          Anderson M.
        </h3> 
    </>
  );
};

export default Testimonial;
