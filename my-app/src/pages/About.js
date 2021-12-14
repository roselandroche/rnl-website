import React from "react";
import "../css/global.css";
import "../css/about.css";
import { tech } from "../assets/data";

import TechCard from "../components/TechCard";

function About() {
  return (
    <div className="main">
      <h1>About</h1>
      {tech && <h3>My go to tech:</h3>}
      {tech &&
        tech.map((o, i) => {
          return <TechCard tech={o} />;
        })}

      {/* <h2>I love working with these causes:</h2>
      <h2>I love spending time on these hobbies:</h2> */}
    </div>
  );
}

export default About;
