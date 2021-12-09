import React from "react";

function EduCard(props) {
  const { edu } = props;

  return (
    <div className="eduCard">
      {edu.institution && <h3>{edu.institution}</h3>}
      {edu.credentialEarned && <h4>{edu.credentialEarned}</h4>}
      {edu.timeframe && <h5>{edu.timeframe}</h5>}
    </div>
  );
}

export default EduCard;
