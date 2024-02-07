import React from "react";
import "./Footer.scss";

import LogoBranca from "../../assets/BigBiteLogoWhite.svg";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        backgroundColor: "#FF8D08",
        padding: "10px",
        marginTop: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#fff",
        }}
      >
        <img src={LogoBranca} width="90px" alt="Logo BigBite Branca" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            color: "#fff",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <p style={{ fontWeight: "600", marginBottom: "5px" }}>Social</p>
            <p>LinkedIn</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p style={{ fontWeight: "600", marginBottom: "5px" }}>Contato</p>
            <p>bigbite@bigbite.com.br</p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#fff",
        }}
      >
        <span>© 2024 BigBite</span>
        <div>
          <span style={{ marginRight: "10px" }}>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
