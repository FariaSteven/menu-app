import React from "react";
import "./Button.scss";

const Button = ({ text, outlined, scrollTop, link }) => {
  return scrollTop > 0 ? (
    <a href={link} replace={true}>
      <button
        className={outlined ? "button-scrolled-outlined" : "button-scrolled"}
      >
        {text || "a"}
      </button>
    </a>
  ) : (
    <a href={link} replace={true}>
      <button className={outlined ? "button-outlined" : "default-button"}>
        {text || "a"}
      </button>
    </a>
  );
};

export default Button;
