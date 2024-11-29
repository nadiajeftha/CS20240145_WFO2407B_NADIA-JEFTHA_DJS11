import React from "react";

import Button from "./Button";

const ShowDetails = ({ showId }) => {
  return (
    <div>
      <h2>{showId.title}</h2>
      <img src={showId.image} alt={showId.title} />
      <p>{showId.description}</p>
      <p>Total Seasons: {showId.seasons}</p>
      <p>
        Last Updated:{""} {new Date(showId.updated).toLocaleDateString()}
      </p>
      <Button onClick={onClose}>Close Details</Button>
    </div>
  );
};

export default ShowDetails;
