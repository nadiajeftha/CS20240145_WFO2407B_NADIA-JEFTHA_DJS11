import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentEpisode,
  togglePlayPause,
  setEpisodeQueue,
} from "./redux/episodeActions";
import button from "./Button";

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
    const currentIndex = episodeQueue.findIndex(
      (ep) => ep.id === setCurrentEpisode.id
    );
    const nextEpisode = episodeQueue[(currentIndex + 1) % episodeQueue.length];
    dispatch(setCurrentEpisode(nextEpisode));
  };

  const handlePrevious = () => {
    const currentIndex = episodeQueue.findIndex(
      (ep) => ep.id === setCurrentEpisode.id
    );
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
        audio
          .play()
          .catch((error) => console.error("Error playing audio: ", error));
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
      <Button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</Button>
      <Button onClick={handlePrevious}>Previous</Button>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
};

export default EpisodePlayer;
