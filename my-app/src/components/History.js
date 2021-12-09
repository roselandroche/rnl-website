import React from "react";
import "../css/global.css";
import Resume from "../assets/Resume-RoseLandroche.pdf";

function History() {
  return (
    <div className="main">
      <h1>History</h1>
      <a href={Resume} download="Resume-RoseLandroche">
        Resume - Updated December 2021
      </a>
    </div>
  );
}

export default History;
