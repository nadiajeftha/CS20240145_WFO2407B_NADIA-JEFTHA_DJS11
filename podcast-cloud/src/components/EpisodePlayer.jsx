import React,{useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import {setCurrentEpisode,togglePlayPause} from "./redux/episodeActions"

const EpisodePlayer =() => {
    const dispatch= useDispatch()
    const {setCurrentEpisode,isPlaying,episodeQueue} = useSelector(state => state.episode)

    const handlePlayPause=() => {
        dispatch(togglePlayPause())
    }
}

const handleNext=() => {
    const currentIndex=episodeQueue.findIndex(ep.id === setCurrentEpisode.id)
    const nextEpisode=episodeQueue[(currentIndex + 1)  % episodeQueue.length]
    dispatch(setCurrentEpisode(nextEpisode))
}

const handlePrevious=() => {
    const currentIndex=episodeQueue.findIndex(ep.id === setCurrentEpisode.id)
    const previousEpisode=episodeQueue[(currentIndex - 1 + episodeQueue.length)  % episodeQueue.length]
    dispatch(setCurrentEpisode(previousEpisode))
}

useEffect(() => {
    if(currentEpisode) {
        if(isPlaying) {

        }else {

        }}
}, [currentEpisode,isPlaying])

return (
<div>
    
    <h3>{currentEpisode.title}</h3>
    <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
    <button onClick={handlePrevious}>Previous</button>
    <button onClick={handleNext}>Next</button>
</div>
) : (
    <p>Select an episode to play</p>
)}
</div>

export default EpisodePlayer