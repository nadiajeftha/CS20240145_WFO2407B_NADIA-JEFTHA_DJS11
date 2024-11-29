export const addFavourite = (episode) => ({
  type: "ADD_FAVOURITE",
  payload: episode,
});

export const removeFavourite = (episode) => ({
  type: "REMOVE_FAVOURITE",
  payload: episode,
});
