import { useState, useEffect } from "react";

function App() {
  //state vars
  const [data, setData] = useState([]); //data=store fetched data, setData=update
  const [loading, setLoading] = useState(true); //loading=data still being fetched? , setLoading=update
  const [error, setError] = useState(null); //error=stores errors while fetching , setError=update

  useEffect(() => {
    //endpoint data

    fetch("https://podcast-api.netlify.app/") //fetch data from endpoint
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json(); //res => JSON
      })
      .then((data) => {
        setData(data); //update with fetched data
        setLoading(false); //fetching is done
      })

      .catch((error) => {
        setError(error); //store error
        setLoading(false);
      });
  }, []); //to only run once

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  //rendering podcast data
}
export default App;
