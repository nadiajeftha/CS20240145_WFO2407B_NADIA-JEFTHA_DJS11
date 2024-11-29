import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import favouritesReducer from "./favouritesReducer";
import episodeReducer from "./episodeReducer";

const store = configureStore({
  reducer: {
    episodes: episodeReducer,
    favourites: favouritesReducer,
  },
});

export default store;
