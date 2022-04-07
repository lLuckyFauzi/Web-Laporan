import React from "react";
import Icons from "../Components/Icons";

export const Box = (props) => {
  return (
    <div className={props.className || "about-pt2-box"}>
      <p className="title">{props.title}</p>
      <Icons width={"350px"} src={props.src} className={"product"} />
    </div>
  );
};
