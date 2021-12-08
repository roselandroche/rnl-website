import React from "react";
import "../css/header.css";

function Header() {
  return (
    <div className="header">
      <ul>
        <a href="/">Home</a>
        <a href="/history">History</a>
        <a href="/about">About</a>
      </ul>
    </div>
  );
}

export default Header;
