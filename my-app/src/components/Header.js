import React from "react";
import { Link } from "react-router-dom";
import "../css/global.css";
import "../css/header.css";

function Header() {
  return (
    <div className="header">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </ul>
    </div>
  );
}

export default Header;
