import React from "react";

function HobbyCard(props) {
  const { hobbies } = props;

  return (
    <div className="hobbyCard">
      {hobbies.name && <h4>{hobbies.name}</h4>}
      {hobbies.details && <p>{hobbies.details}</p>}
    </div>
  );
}

export default HobbyCard;
