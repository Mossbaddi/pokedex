import PokemonCard from "./Components/PokemonCard/PokemonCard";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonListPage from "./Pages/PokemonListPage";
import HomePage from "./Pages/HomePage";
import MyPokedexPage from "./Pages/MyPokedexPage";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokemon-list" element={<PokemonListPage />} />
      <Route path="/my-pokedex" element={<MyPokedexPage />} />
    </Routes>
  </BrowserRouter>



  );
}

export default App;
