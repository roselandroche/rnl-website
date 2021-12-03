import React from "react";
import logo from "./images/logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./components/Home.tsx";
import History from "./components/History.tsx";
import About from "./components/About.tsx";

const App = () => {
  return (
    <div className="App">
      <Header />

      <img src={logo} className="App-logo" alt="logo" />
      <h1>Rose Landroche</h1>

      <Routes>
        <Route to="/" exact component={Home} />
        <Route to="/history" exact component={History} />
        <Route to="/about" exact component={About} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
