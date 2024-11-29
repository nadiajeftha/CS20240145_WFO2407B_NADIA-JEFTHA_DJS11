export const setCurrentEpisode = (episode) => ({
  type: "SET_CURRENT_EPISODE",
  payload: episode,
});

export const togglePlayPause = () => ({
  type: "TOGGLE_EPISODE_PAUSE",
});
export const setEpisodeQueue = (queue) => ({
  type: "SET_EPISODE_QUEUE",
  payload: queue,
});
