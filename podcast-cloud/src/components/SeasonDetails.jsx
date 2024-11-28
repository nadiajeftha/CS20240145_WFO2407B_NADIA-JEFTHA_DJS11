import React from "react";
import {
  Preview,
  Show,
  Season,
  Episode,
  Genre,
} from "../services/dataStructures";

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
      <button onClick={onClose}>Back to Show</button>
    </div>
  );
};

export default SeasonDetails;
