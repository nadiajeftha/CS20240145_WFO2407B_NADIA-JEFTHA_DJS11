import React from "react";
import Button from "./Button";

const GenreFilter = ({ filterByGenre }) => {
  return (
    <div>
      <Button onClick={() => filterByGenre(null)}>All Genres</Button>
      <Button onClick={() => filterByGenre(1)}>Personal Growth</Button>
      <Button onClick={() => filterByGenre(2)}>Investigative Journalism</Button>
      <Button onClick={() => filterByGenre(3)}>History</Button>
      <Button onClick={() => filterByGenre(4)}>Comedy</Button>
      <Button onClick={() => filterByGenre(5)}>Entertainment</Button>
      <Button onClick={() => filterByGenre(6)}>Business</Button>
      <Button onClick={() => filterByGenre(7)}>Fiction</Button>
      <Button onClick={() => filterByGenre(8)}>News</Button>
      <Button onClick={() => filterByGenre(9)}>Kids & Family</Button>
    </div>
  );
};
export default GenreFilter;
