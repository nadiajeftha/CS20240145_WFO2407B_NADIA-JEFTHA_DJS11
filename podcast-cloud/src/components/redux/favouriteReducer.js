const initialState = {
  favourites: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favourites: state.favourites.filter(
          (episode) => episode.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
export default favouriteReducer;
