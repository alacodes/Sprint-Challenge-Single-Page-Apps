import React from 'react'

export default function EpisodeCard ( props ) {
    return(
        <span className="episode-card">
            <h1>{props.name}</h1>
            <h3>Episode Number: {props.number}</h3>
            <p>First Aired: {props.airDate}</p>
        </span>
    );
}