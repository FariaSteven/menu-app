import React from "react";
import "./button.scss";

const Button = ({ text, outlined }) => {
  return (
    <button className={outlined ? "button-outlined" : ""}>{text || "a"}</button>
  );
};

export default Button;
