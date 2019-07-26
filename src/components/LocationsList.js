import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
    const [ locations, setLocations ] = useState([]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/`)
            .then(results => {
                console.log("You did it!");
                setLocations(results.data.results)
            })
            .catch(error => {
                console.log("You did NOT do it", error)
            })
    }, []);

    return(
        <section className='location-list-grid-view'>
            {locations.map(location => (
                <LocationCard
                name={location.name}
                type={location.type}
                dimension={location.dimension}
                residents={locations.residents} />
            ))}
        </section>
    );
}
