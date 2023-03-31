import './App.css'
import PokemonCard from './components/PokemonCard'
import { useState } from "react";

function App() {
  
  const [pokemonIndex, setPokemonIndex] = useState(0);
   
  const pokemonList = [
    {
        name: "Bulbizarre",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "Salamèche",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

  return (
    <figure className="App">
      <PokemonCard card={pokemonList[pokemonIndex]} setPokemonIndex={setPokemonIndex} pokemonIndex={pokemonIndex}/>    
    </figure>
  )
}

export default App
