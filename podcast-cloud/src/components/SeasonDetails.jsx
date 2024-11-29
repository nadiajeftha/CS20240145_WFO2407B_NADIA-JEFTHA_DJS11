import React from "react";
import Button from "./Button";

const SeasonDetails = ({ season, onClose }) => {
  return (
    <div>
      <h3>{season.title}</h3>
      {season.episodes.map((episode) => (
        <div key={episode.id}>
          <h4>{episode.title}</h4>
          <p>{episode.description}</p>
        </div>
      ))}
      <Button onClick={onClose}>Back to Show</Button>
    </div>
  );
};

export default SeasonDetails;
