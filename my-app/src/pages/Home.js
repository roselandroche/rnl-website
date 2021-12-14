import React from "react";
import logo from "../images/logo.svg";
import "../css/global.css";
import "../css/app.css";

const Home = () => {
  return (
    <div className="App main">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>🇨🇦 Rose Landroche 🇺🇸</h1>
      <h2>Full Stack Web Developer | Passionate about Automated Testing</h2>
    </div>
  );
};

export default Home;
