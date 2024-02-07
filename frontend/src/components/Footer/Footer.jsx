import React from "react";
import "./Footer.scss";

import LogoBranca from "../../assets/BigBiteLogoWhite.svg";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <img src={LogoBranca} width="90px" alt="Logo BigBite Branca" />
        <div className="social-contact">
          <div className="social-links">
            <p>Social</p>
            <p>LinkedIn</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
          <div className="social-links">
            <p>Contato</p>
            <p>bigbite@bigbite.com.br</p>
          </div>
        </div>
      </div>
      <div className="copyright-links">
        <span>© 2024 BigBite</span>
        <div>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
