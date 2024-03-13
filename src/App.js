import PokemonCard from "./Components/PokemonCard/PokemonCard";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonListPage from "./Pages/PokemonListPage";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<div>Accueil</div>} />
      <Route path="/pokemon-list" element={<PokemonListPage />} />
      <Route path="/my-pokedex" element={<div>Mon Pokédex</div>} />
    </Routes>
  </BrowserRouter>



  );
}

export default App;
