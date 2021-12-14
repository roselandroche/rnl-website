import React from "react";

function TechCard(props) {
  const { tech } = props;

  return (
    <div className="techCard">
      {tech.name && tech.useCase && (
        <h4>
          {tech.name} | {tech.useCase}
        </h4>
      )}

      <ul>
        {tech.relatedProjects &&
          tech.relatedProjects.map((o, i) => {
            return (
              <li>
                <a href={o.github}>{o.name}</a>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default TechCard;
