import React from "react";

function JobCard(props) {
  const { job } = props;

  return (
    <div className="jobCard">
      {job.company && job.title && (
        <h3>
          {job.company} | {job.title}
        </h3>
      )}
      {job.timeframe && <h4>{job.timeframe}</h4>}
      <ul>
        {job.desc &&
          job.desc.map((item) => {
            return <li className="jobDesc">{item}</li>;
          })}
      </ul>
      {job.references && <h5>References Available On Request</h5>}
    </div>
  );
}

export default JobCard;
