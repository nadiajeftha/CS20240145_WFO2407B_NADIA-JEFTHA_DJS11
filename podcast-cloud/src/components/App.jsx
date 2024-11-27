import { useState, useEffect } from "react";



  //state vars
  function App(){
  const [show, setShow] = useState([]); //show=store fetched show data, setShow=update
  const [showId,setShowId] =useState(null) //showId=storing spesific show, setShowId=updte
  const [loading, setLoading] = useState(true); //loading=data still being fetched? , setLoading=update
  const [error, setError] = useState(null); //error=stores errors while fetching , setError=update
  const [filterGenre, setFilterGenre]=useState(null) //filterGenre=filter selected genre, setFilterGenre=update

  const API_URL=  "https://podcast-api.netlify.app/" //fetch show data from endpoint
  const SHOW_ID_PATH= "id/"
  
  const aplhSorted = show.sort((a,b) => //sorts title of shows alphabetically
  a.title.localCompare (b.title))

  useEffect(() => {
    //fetch data from API 


      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json(); //res => JSON
      })
      .then((show) => {
        setShow(show); //update with fetched data
        setLoading(false); //fetching is done
      })

      .catch((error) => {
        setError(error); //store error
        setLoading(false);
      });
  }, []); //to only run once

  if (loading) return <p>Loading...</p>;
  if (error) return <p>"Something went wrong"</p>;

  //rendering podcast data
  return (
    <div className="">
    {aplhSorted.map((show) => (
      <div key= {show.id} className="">
        <img src={show.image} alt={show.title} className=""/>
        <h2 className="">{show.title}</h2> 
        <div className="">
        <p>Total Seasons: {show.seasons}</p>
        <p>Last Updated:</p>
            
          }
        }

      </div>
      </div>
    ))}
  )
}
}
export default App;
