import React from "react";
import logo from "./images/logo.svg";
import "./App.css";

import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Rose Landroche</p>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
