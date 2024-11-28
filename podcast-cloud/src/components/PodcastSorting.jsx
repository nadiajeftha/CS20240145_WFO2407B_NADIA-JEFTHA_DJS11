import React, {useEffect,useState} from 'react'
import { podcastService} from '../services/podcastService'
import { Preview , Show,Season,  Episode , Genre  } from "../services/dataStructures"

const Podcasts = () => {
    const [podcasts, setPodcasts] = useState([])
    const [sortCriteria, setSortCriteria] = useState('')
}
useEffect(() => {
const fetchPodcasts = async()=> {
    try {
        const data= await podcastService.fetchAllShows()
        setPodcasts(data)
    } catch (error) {
        console.error("Error:",error)
    }

}
fetchPodcasts()
},[])

const sortPodcasts= () => {

}

return ()

export default Podcasts