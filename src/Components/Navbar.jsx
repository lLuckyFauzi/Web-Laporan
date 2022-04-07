import React from "react";
import "../Styles/Navbar.css";
import Icons from "./Asset/CakeIcons.png";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img height={"45px"} src={Icons} alt="" />
        <p>Ninu's Cake</p>
      </div>
      <ul className="list">
        <li>Home</li>
        <li>About</li>
        <li>Product</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
