import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./css/index.css";
import "./css/global.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import History from "./components/History";
import About from "./components/About";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);