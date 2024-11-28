import React from "react";
import {
  Preview,
  Show,
  Season,
  Episode,
  Genre,
} from "../services/dataStructures";
const API_URL = "https://podcast-api.netlify.app/id/[]";

const EpisodePlayer = ({ episode }) => {
  return (
    <div>
      <h4>Playing: {episode.title}</h4>
    </div>
  );
};
