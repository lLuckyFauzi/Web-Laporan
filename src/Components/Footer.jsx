import React from "react";
import "../Styles/Footer.css";
import Icons from "./Asset/CakeIcons.png";
import { FaRegCopyright } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Making from "./Asset/making.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img height={"45px"} src={Icons} alt="" />
          <p>Ninu's Cake</p>
        </div>
        <p className="text">
          {" "}
          <MdLocationOn
            style={{
              height: "26px",
              width: "26px",
              color: "white",
            }}
          />{" "}
          Bandung, Soreang Jln. Bojong Cihaur Rt 01 Rw 08{" "}
        </p>
        <img className="footer-img" src={Making} alt="" />
      </div>
      <div className="copyright">
        <p>
          <FaRegCopyright /> Copyright by ALynne 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
