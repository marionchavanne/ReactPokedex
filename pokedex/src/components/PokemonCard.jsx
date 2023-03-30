import React from 'react';
import PropTypes from "prop-types";

const PokemonCard = ({card}) => {
  console.log(card);
  return (
   <figure className={"PokemonCard"}>
      {card.imgSrc ? <img src={card.imgSrc}/> : <p> "???" </p> }
      <figcaption>{card.name}</figcaption>
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