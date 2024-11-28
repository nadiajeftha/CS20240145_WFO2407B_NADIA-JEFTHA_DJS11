import { useState, useEffect } from "react";
import { podcastService } from "../services/podcastService";


  //state vars
  function App(){
  const [shows, setShows] = useState([]); //shows=store fetched show data, setShows=update
  const [showId,setShowId] =useState(null) //showId=storing spesific show, setShowId=updte
  const [loading, setLoading] = useState(true); //loading=data still being fetched? , setLoading=update
  const [error, setError] = useState(null); //error=stores errors while fetching , setError=update
  const [filterGenre, setFilterGenre]=useState(null) //filterGenre=filter selected genre, setFilterGenre=update

  const API_URL=  "https://podcast-api.netlify.app/" //fetch show data from endpoint
  const SHOW_ID_PATH= "id/"

const fetchAllShows = async() => {
  try {
    const shows = await podcastService.fetchAllShows()
    setShows(shows)
  } catch (error) {
    setError(error.message)
  }
  }

  
  

 
  //filtering shows by genre
  const filterByGenre = (genreId) => {
    setFilterGenre(genreId) //setting the genre selected
  }
  
//filtered shows
const filteredShows = filterGenre ? shows.filter((show) => show.genres.includes(filterGenre)) : shows

 //fetch data from API 
  useEffect(() => {
    fetchAllShows() } , [] )



  return (
       
    if (loading){ return <p>Loading...</p>}
    if (error) {return <p>Error: {error}</p>}
    <div>
      <h1>Podcast Cloud</h1>
<div> {/*buttons to filter genre*/} 

  <button onClick = {() => filterByGenre(null)}>All Genres</button>
  <button onClick = {() => filterByGenre(1)}>Personal Growth</button>
  <button onClick = {() => filterByGenre(2)}>Investigative Journalism</button>
  <button onClick = {() => filterByGenre(3)}>History</button>
  <button onClick = {() => filterByGenre(4)}>Comedy</button>
  <button onClick = {() => filterByGenre(5)}>Entertainment</button>
  <button onClick = {() => filterByGenre(6)}>Business</button>
  <button onClick = {() => filterByGenre(7)}>Fiction</button>
  <button onClick = {() => filterByGenre(8)}>News</button>
  <button onClick = {() => filterByGenre(9)}>Kids & Family</button>
</div>

{/*list of shows*/} 
<div>
  <h2>Shows</h2>
  {filteredShows.map((show) => (
    <div key= {show.id}>
      <h3>{show.title}</h3>
      <img
      src={show.image}
      alt={show.title}
      style={} />

      <p>{show.description}</p>
      <button onClick={() => setShowId(show.id)}>View Show Details</button>
      </div>
  ))}
</div>

{/*details of show selected*/} 
{showId && (
  <div>
    <h2>{showId.title}</h2>
    <img
    src={showId.image}
    alt={showId.title}
    style={} />
<p>{showId.description}</p>
<p>Total Seasons: {showId.seasons}</p>
<p>Last Updated:{""} {new Date(showId.updated).toLocaleDateString()}</p>

</div>
)}

</div>
  )}
export default App;
