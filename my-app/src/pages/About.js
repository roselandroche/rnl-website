import React from "react";
import "../css/global.css";
import "../css/about.css";
import { tech, hobbies } from "../assets/data";

import TechCard from "../components/TechCard";
import HobbyCard from "../components/HobbyCard";

function About() {
  return (
    <div className="main">
      <h1>About</h1>
      <div className="about-tech">
        {tech && <h3>My go to tech:</h3>}
        {tech &&
          tech.map((o, i) => {
            return <TechCard tech={o} />;
          })}
      </div>
      <div className="about-hobby">
        {hobbies && <h3>Personal hobbies:</h3>}
        {hobbies &&
          hobbies.map((o, i) => {
            return <HobbyCard hobbies={o} />;
          })}
      </div>
    </div>
  );
}

export default About;
