import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addFavourite,
  removeFavourite,
} from "../redux/actions/favouritesActions";

const Favourites = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites?.favourites || []); //favs from redux store

  //add ep to favs
  const handleAddToFavourites = (episode) => {
    dispatch(addFavourite(episode));
  };
  //remove ep from favs
  const handleRemoveFromFavourites = (episode) => {
    dispatch(removeFavourite(episode));
  };

  return (
    <div>
      <h3>Favourites</h3>

      {favourites.length === 0 ? (
        <p>No favourites yet! Start adding some .</p>
      ) : (
        <ul>
          {favourites.map((episode) => (
            <li key={episode.id}>
              {episode.title}
              <button onClick={() => handleRemoveFromFavourites(episode)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Favourites;
