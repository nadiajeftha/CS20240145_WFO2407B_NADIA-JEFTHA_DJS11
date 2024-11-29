import React, { useState, useEffect } from "react";
import { podcastService } from "../services/podcastService";
import GenreFilterBtn from "./GenreFilterBtn";
import ShowList from "./ShowList";
import ShowDetails from "./ShowDetails";
import Loading from "./Loading";

//state vars
function App() {
  const [shows, setShows] = useState([]); //shows=store fetched show data, setShowss=update
  const [showId, setShowId] = useState(null); //showId=storing spesific show, setShowId=updte
  const [loading, setLoading] = useState(true); //loading=data still being fetched? , setLoading=update
  const [error, setError] = useState(null); //error=stores errors while fetching , setError=update
  const [filterGenre, setFilterGenre] = useState(null); //filterGenre=filter selected genre, setFilterGenre=update

  //fetching all shows from podcastService component
  const fetchAllShows = async () => {
    try {
      const shows = await podcastService.fetchAllShows();
      setShows(shows);
      setLoading(false);

    } catch (error) {
      setError(error?.message || "An error occurred");
      setLoading(false);
    }
  };

  //fetching spesific show details by id
  const fetchShowInfo = async (id) => {
    try {
      const showInfo = await podcastService.showById(id);
      setShowId(showInfo);
    } catch (error) {
      setError(error?.message || "An error occurred");
    }
  };

  //fetching shows when comp is done mounting
  useEffect(() => {
    fetchAllShows();
  }, []);

  //filtering shows by genre
  const filteredShows = filterGenre
    ? shows.filter((show) => show.genre.includes(filterGenre))
    : shows;

  return (
    <div>
      {loading && <Loading />}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <div>
          <h1>Podcast Cloud</h1>
          <GenreFilterBtn filterByGenre={setFilterGenre} />
          <ShowList shows={filteredShows} fetchShowInfo={fetchShowInfo} />
          {showId && (
            <ShowDetails showId={showId} onClose={() => setShowId(null)} />
          )}
        </div>
      )}
    </div>
  );
}
export default App;
