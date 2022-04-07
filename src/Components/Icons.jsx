import React from "react";

const Icons = (props) => {
  return (
    <img
      width={props.width}
      className={props.className}
      src={props.src}
      alt=""
      style={{ marginRight: props.marginRight || "" }}
    />
  );
};

export default Icons;
