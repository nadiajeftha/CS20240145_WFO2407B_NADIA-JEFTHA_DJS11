import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentEpisode, togglePlayPause } from "./redux/episodeActions";

const EpisodePlayer = () => {
  const dispatch = useDispatch();
  const { currentEpisode, isPlaying, episodeQueue } = useSelector(
    (state) => state.episode
  );

  const [audio, setAudio] = useState(null);

  const handlePlayPause = () => {
    dispatch(togglePlayPause());
  };

  const handleNext = () => {
    const currentIndex = episodeQueue.findIndex(ep.id === setCurrentEpisode.id);
    const nextEpisode = episodeQueue[(currentIndex + 1) % episodeQueue.length];
    dispatch(setCurrentEpisode(nextEpisode));
  };

  const handlePrevious = () => {
    const currentIndex = episodeQueue.findIndex(ep.id === setCurrentEpisode.id);
    const previousEpisode =
      episodeQueue[
        (currentIndex - 1 + episodeQueue.length) % episodeQueue.length
      ];
    dispatch(setCurrentEpisode(previousEpisode));
  };

  useEffect(() => {
    if (currentEpisode) {
      const newAudio = new Audio(currentEpisode.file);
      setAudio(newAudio);

      return () => {
        newAudio.pause();
        setAudio(null);
      };
    }
  }, [currentEpisode]);

  useEffect(() => {
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }

      return () => {
        audio.pause();
      };
    }
  }, [isPlaying, audio]);

  if (!currentEpisode) {
    return <p>Select an episode to play</p>;
  }

  return (
    <div>
      <h3>{currentEpisode.title}</h3>
      <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default EpisodePlayer;
