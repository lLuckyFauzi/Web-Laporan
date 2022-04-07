import React from "react";
import "../Styles/MainWP.css";

const BackgroundMain = (props) => {
  return (
    <div className="bg-acc">
      <img
        width={props.width || ""}
        className={props.className || "mainWp"}
        src={props.src || ""}
        alt=""
      />
    </div>
  );
};

export default BackgroundMain;
