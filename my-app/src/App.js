import React from "react";
import logo from "./images/logo.svg";
import "./css/app.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="main">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Rose Landroche</h1>
      </div>

      <Footer />
    </div>
  );
};

export default App;
