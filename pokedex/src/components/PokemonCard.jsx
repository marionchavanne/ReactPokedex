import React from 'react';
import PropTypes from "prop-types";


const PokemonCard = ({card, setPokemonIndex, pokemonIndex}) => {
  const handleIncrement = () => {
    setPokemonIndex(pokemonIndex + 1)
  } 
  const handleDecrement = () => { 
    setPokemonIndex(pokemonIndex - 1) 
 }

 return (
   <figure className={"PokemonCard"}>
      {card.imgSrc ? <img src={card.imgSrc}/> : <p> "???" </p> }
      <figcaption>{card.name}</figcaption>
      <button onClick ={handleDecrement}>Précédent</button>
      <button onClick ={handleIncrement}>Suivant</button>
  </figure>
  );
}; 


export default PokemonCard;

PokemonCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

