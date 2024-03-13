import PokemonCard from "./Components/PokemonCard/PokemonCard";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<div>Accueil</div>} />
      {/* Le composant PokemonCard a été déplacé ici parce que dans une application React utilisant les routes,
       on doit forcément afficher ces composants dans une des routes.
       Dans ce cas, les composants sont affichés lorsque l'on accède à la route "/pokemon-list".
        */}
      <Route path="/pokemon-list" element={<div>
           <PokemonCard name="Pikachu" imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" types={["electric"]}></PokemonCard>
          <PokemonCard name="Charizard" imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" types={["fire", "flying"]}></PokemonCard>
        </div>} />
      <Route path="/my-pokedex" element={<div>Mon Pokédex</div>} />
    </Routes>
  </BrowserRouter>


  );
}

export default App;
