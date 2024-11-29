import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./favouritesReducer";
import episodeReducer from "./episodeReducer";

const store = configureStore({
  reducer: {
    episodes: episodeReducer,
    favourites: favouritesReducer,
  },
});

export default store;
