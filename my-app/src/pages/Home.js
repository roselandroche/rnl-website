import React from "react";
import logo from "../images/logo.svg";
import "../css/global.css";
import "../css/app.css";

const Home = () => {
  return (
    <div className="App main home">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Rose Landroche</h1>
      <h2>🇺🇸 🇨🇦</h2>
      <h3>QA Developer | Full Stack Web Developer</h3>
    </div>
  );
};

export default Home;
