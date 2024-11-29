import { combineReducers } from "redux";
import episodeReducer from "./episodeReducer";
import favouritesReducer from "./favouritesReducer";

const rootReducer = combineReducers({
  episode: episodeReducer,
  favourites: favouritesReducer,
});
export default rootReducer;
