// src/pages/PokemonListPage.js
import React from 'react';
import PokemonCard from '../Components/PokemonCard/PokemonCard';

const PokemonListPage = () => {
  return (
    <div>
      <h1>Liste des Pokémon</h1>
      <PokemonCard name="Pikachu" imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" types={["electric"]} />
      <PokemonCard name="Charizard" imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" types={["fire", "flying"]} />
      {/* Plus de cartes Pokémon peuvent être ajoutées ici */}
    </div>
  );
};

export default PokemonListPage;