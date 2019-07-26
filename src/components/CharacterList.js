import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList( props ) {
  // TODO: Add useState to track data from useEffect
  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(results => {
        console.log("You did it!", results.data.results);
        setCharacters(results.data.results)
      })
      .catch(error => {
        console.log("You did NOT do it", error)
      })
  }, [])
  return (
    <section className='character-list grid-view'>
      {characters.map( character => (
          <CharacterCard
          img={character.img}
          species={character.species}
          name={character.name}
          status={character.status}
          id={character.id} />
      ))}
    </section>
  );
}
