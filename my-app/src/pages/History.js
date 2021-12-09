import React from "react";

import "../css/global.css";
import "../css/history.css";
import { jobs } from "../assets/data";
import Resume from "../assets/Resume-RoseLandroche.pdf";
import JobCard from "../components/JobCard";

function History() {
  return (
    <div className="main">
      <h1>History</h1>
      <h2>Most Recent Employment</h2>
      {jobs &&
        jobs.map((o) => {
          return <JobCard job={o} />;
        })}
      <a href={Resume} download="Resume-RoseLandroche">
        Resume - Updated December 2021
      </a>
    </div>
  );
}

export default History;
