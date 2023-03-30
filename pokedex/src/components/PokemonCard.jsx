import React from 'react';

const PokemonCard = ({card}) => {
  return (
   <figure className={"PokemonCard"}>
      {card.imgSrc ? <img src={card.imgSrc}/> : <p> "???" </p> }
      <figcaption>{card.name}</figcaption>
   </figure>
  );
}; 

export default PokemonCard;