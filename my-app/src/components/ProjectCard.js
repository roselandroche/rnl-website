import React from "react";

function ProjectCard(props) {
  const { proj } = props;

  return (
    <div className="projCard">
      <div className="image">
        {proj.image && <img src={proj.image} alt="Project user interface" />}
      </div>
      <div className="text">
        {proj.title && proj.role && (
          <h3>
            {proj.title} | {proj.role}
          </h3>
        )}
        {proj.github && (
          <div>
            <a href={proj.github}>GitHub</a>
          </div>
        )}
        {proj.deploy && (
          <div>
            <a href={proj.deploy}>Deployment</a>
          </div>
        )}
        <div className="stack">
          {proj.tech &&
            proj.tech.map((item) => {
              return <h5>{item}</h5>;
            })}
        </div>
        <ul>
          {proj.desc &&
            proj.desc.map((item) => {
              return <li className="projDesc">{item}</li>;
            })}
        </ul>
        {proj.stage && <h6>Stage: {proj.stage}</h6>}
      </div>
    </div>
  );
}

export default ProjectCard;
