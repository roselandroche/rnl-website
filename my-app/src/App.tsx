import React from "react";
import logo from "./images/logo.svg";
import "./App.css";
// import { Route } from "react-router-dom";
import { Router, RouteComponentProps } from "@reach/router";

import Header from "./Header";
import Footer from "./Footer";

let Home = (props: RouteComponentProps) => <div>Home</div>;
let History = (props: RouteComponentProps) => <div>History</div>;
let About = (props: RouteComponentProps) => <div>About</div>;

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Rose Landroche</h1>
      <Router>
        <Home path="/" />
        <History path="/history" />
        <About path="/about" />
      </Router>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
