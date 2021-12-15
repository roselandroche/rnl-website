import React, { useState } from "react";

import "../css/global.css";
import "../css/history.css";
import { jobs, edu } from "../assets/data";
import Resume from "../assets/Resume-RoseLandroche.pdf";
import JobCard from "../components/JobCard";
import EduCard from "../components/EduCard";

function History() {
  const [side, setSide] = useState(true);

  const handleClick = () => {
    setSide(!side);
  };

  return (
    <div className="main history">
      {side ? (
        <h1>History | Recent Employment</h1>
      ) : (
        <h1>History | Education</h1>
      )}
      <div className="option">
        <div
          onClick={handleClick}
          className={!side ? "emp-button" : "emp-button-disabled"}
        >
          Recent Employment
        </div>
        <div
          onClick={handleClick}
          className={side ? "edu-button" : "edu-button-disabled"}
        >
          Education
        </div>
      </div>
      {jobs &&
        side &&
        jobs.map((o) => {
          return <JobCard job={o} />;
        })}
      {edu &&
        !side &&
        edu.map((o) => {
          return <EduCard edu={o} />;
        })}
      <a className="resume" href={Resume} download="Resume-RoseLandroche">
        Resume - Updated Dec 2021
      </a>
    </div>
  );
}

export default History;
