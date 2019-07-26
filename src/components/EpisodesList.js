import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodesList( props ) {
    const [ episodes, setEpisodes ] = useState([]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/episode/`)
            .then(results => {
                console.log("You did it!", results.data.results);
                setEpisodes(results.data.results)
            })
            .catch(error => {
                console.log("You did NOT do it", error)
            })
    }, []);

    return(
        <section className="episode-list-grid-view">
            {episodes.map(episode => (
                <EpisodeCard
                key={episode.id}
                episode={episode}
                name={episode.name}
                airDate={episode.air_date}
                number={episode.id}/>
            ))}
        </section>
    );
}