import React from "react";

import "../css/global.css";
import "../css/projects.css";
import { proj } from "../assets/data";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div className="main">
      <h1>Projects</h1>
      {proj &&
        proj.map((o) => {
          return <ProjectCard proj={o} />;
        })}
    </div>
  );
}

export default Projects;
