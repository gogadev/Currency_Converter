import React from "react";

import img from "../../assets/img.png";

import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav>
      <h1 className="nav-title">Currency Converter</h1>
      <img className="img" src={img} alt="" />
    </nav>
  );
};

export default Navbar;
