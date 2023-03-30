import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {
  
  const pokemonList = [
    {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
    name: "mew",
    },
]; 

  return (
    <figure className="App">
      <PokemonCard card={pokemonList[0]}/>
      <PokemonCard card={pokemonList[1]}/>
    </figure>
  )
}

export default App
