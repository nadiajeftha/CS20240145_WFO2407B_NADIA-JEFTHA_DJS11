const initialState = {
  currentEpisode: null,
  isPlaying: false,
  episodeQueue: [],
};
const episodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_EPISODE":
      return {
        ...state,
        currentEpisode: action.payload,
      };
    case "TOGGLE_EPISODE_PAUSE":
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    case "SET_EPISODE_QUEUE":
      return {
        ...state,
        episodeQueue: action.payload,
      };
    default:
      return state;
  }
};
export default episodeReducer;
