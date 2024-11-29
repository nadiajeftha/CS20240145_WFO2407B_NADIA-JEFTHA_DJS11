import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import { podcastService } from "../services/podcastService";

const GenreDetails = ({ genreId }) => {
  const [genre, setGenre] = useState(null); //storing genre details; update
  const [loading, setLoading] = useState(true); //loading status;update
  const [error, setError] = useState(null);

  const fetchGenreDetails = async () => {
    try {
      const genreData = await podcastService.genreById(genreId);
      setGenre(genreData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    //fetches genre details when mounted or updated
    fetchGenreDetails();
  }, [genreId]);

  //loading or error show
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Error:{error}</p>;
  }

  return (
    <div>
      <h2>{genre.title}</h2>
      <p>{genre.description}</p>
      <h3>Shows in this genre:</h3>
      <ul>
        {genre.shows.map((showId) => (
          <li key={showId}>{showId}</li>
        ))}
      </ul>
    </div>
  );
};
export default GenreDetails;
