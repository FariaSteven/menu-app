import React from "react";
import "./Button.scss";

const Button = ({ text, outlined, scrollTop }) => {
  return scrollTop > 0 ? (
    <button className={outlined ? "button-scrolled-outlined" : "button-scrolled"}>{text || "a"}</button>
  ) : (
    <button className={outlined ? "button-outlined" : "default-button"}>
      {text || "a"}
    </button>
  );
};

export default Button;
