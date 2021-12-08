import React from "react";
import { NavLink } from "react-router-dom";
import "./css/header.css";

function Header() {
  return (
    <div className="header">
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/history">History</NavLink>
        <NavLink to="/about">About</NavLink>
      </ul>
    </div>
  );
}

export default Header;
