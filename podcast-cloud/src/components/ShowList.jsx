import React from "react";
import {
  Preview,
  Show,
  Season,
  Episodes,
  Genre,
} from "../services/dataStructures";

const ShowList = ({ filteredShows, fetchShowInfo }) => {
  return (
    <div>
      <h2>All Shows</h2>
      {filteredShows.map((show) => (
        <div key={show.id}>
          <h3>{show.title}</h3>
          <img src={show.image} alt={show.title} />
          <p>{show.description}</p>
          <button onClick={() => fetchShowInfo(show.id)}>
            View Show Details
          </button>
        </div>
      ))}
    </div>
  );
};
export default ShowList;
