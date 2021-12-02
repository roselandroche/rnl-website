import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/history">History</NavLink>
        <NavLink to="/about">About</NavLink>
      </ul>
    </div>
  );
}

export default Header;
