// src/pages/PokemonListPage.js
import React, { useState, useEffect } from 'react';
import PokemonCard from '../Components/PokemonCard/PokemonCard';
import axios from 'axios';


const PokemonListPage = () => {
    const [pokemons, setPokemons] = useState([]);
  
    useEffect(() => {
      const fetchPokemons = async () => {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        setPokemons(res.data.results);
      };
  
      fetchPokemons();
    }, []);
  
    return (
      <div>
        <h1>Liste des Pokémon</h1>
        <div>
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.name} name={pokemon.name} imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} types={[]} />
          ))}
        </div>
      </div>
    );
  };
  
  export default PokemonListPage;
  