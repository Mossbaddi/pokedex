import PokemonCard from "./Components/PokemonCard/PokemonCard";
function App() {
  return (
    <div className="App">
      {/* Pokemon card Pikachu*/}
      <PokemonCard name="Pikachu" imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" types={["electric"]}></PokemonCard>

      {/* Pokemon card Charizard */}
      <PokemonCard name="Charizard" imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" types={["fire", "flying"]}></PokemonCard>
    </div>
  );
}

export default App;
