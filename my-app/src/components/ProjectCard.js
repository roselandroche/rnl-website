import React from "react";

function ProjectCard(props) {
  const { proj } = props;

  return (
    <div className="projCard">
      {proj.company && proj.title && (
        <h3>
          {proj.company} | {proj.title}
        </h3>
      )}
      {proj.timeframe && <h4>{proj.timeframe}</h4>}
      <ul>
        {proj.desc &&
          proj.desc.map((item) => {
            return <li className="projDesc">{item}</li>;
          })}
      </ul>
    </div>
  );
}

export default ProjectCard;
