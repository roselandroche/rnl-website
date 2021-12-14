import React from "react";
import "../css/global.css";
import { tech } from "../assets/data";

import TechCard from "../components/TechCard";

function About() {
  return (
    <div className="main">
      <h1>About</h1>
      {tech && <h2>I love working with this tech:</h2>}
      {tech &&
        tech.map((o, i) => {
          return <TechCard />;
        })}

      {/* <h2>I love working with these causes:</h2>
      <h2>I love spending time on these hobbies:</h2> */}
    </div>
  );
}

export default About;
