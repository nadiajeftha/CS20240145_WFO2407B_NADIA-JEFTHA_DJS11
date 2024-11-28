import React from "react";
import {
  Preview,
  Show,
  Season,
  Episode,
  Genre,
} from "../services/dataStructures";

const GenreFilter = ({ filterByGenre }) => {
  return (
    <div>
      <button onClick={() => filterByGenre(null)}>All Genres</button>
      <button onClick={() => filterByGenre(1)}>Personal Growth</button>
      <button onClick={() => filterByGenre(2)}>Investigative Journalism</button>
      <button onClick={() => filterByGenre(3)}>History</button>
      <button onClick={() => filterByGenre(4)}>Comedy</button>
      <button onClick={() => filterByGenre(5)}>Entertainment</button>
      <button onClick={() => filterByGenre(6)}>Business</button>
      <button onClick={() => filterByGenre(7)}>Fiction</button>
      <button onClick={() => filterByGenre(8)}>News</button>
      <button onClick={() => filterByGenre(9)}>Kids & Family</button>
    </div>
  );
};
export default GenreFilter;
