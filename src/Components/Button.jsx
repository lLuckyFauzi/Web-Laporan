import React from "react";
import "../Styles/Button.css";

const Button = (props) => {
  return (
    <button className={props.className || "button"}>
      {props.children || "More Detail"}
    </button>
  );
};

export default Button;
