import React from "react";
import logo from "./images/logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./components/Home";
import History from "./components/History";
import About from "./components/About";

const App = () => {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Rose Landroche</h1>
      <Routes>
        <Route to="/" component={Home} />
        <Route to="/history" component={History} />
        <Route to="/about" component={About} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
