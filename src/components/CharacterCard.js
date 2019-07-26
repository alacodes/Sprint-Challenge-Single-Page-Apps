import React from 'react'
import { Card } from 'semantic-ui-react'

export default function CharacterCard ( props ) {
  return (
    <Card
      image={props.img}
      header={props.name}
      meta={props.status}
      description={props.species}
    />
  );
}
