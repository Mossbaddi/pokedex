import React from 'react';
import './PokemonCard.css'; // Assurez-vous de créer un fichier CSS correspondant pour styliser votre carte

const PokemonCard = ({ name, imageUrl, types }) => {
  return (
    <div className="pokemon-card">
      <img src={imageUrl} alt={name} className="pokemon-image" />
      <h2 className="pokemon-name">{name}</h2>
      {/*
        Mappage des types du Pokémon
        types est un tableau de chaînes de caractères, chaque élément représente un type du Pokémon
        On utilise la méthode map pour itérer sur le tableau et générer une liste d'éléments <li> pour chaque type
        Chaque élément <li> affiche le type, en utilisant la classe CSS correspondante (type) pour le styliser.
        On utilise la classe CSS correspondante pour chaque type, en utilisant la classe CSS correspondante pour chaque type.
        On utilise également la méthode toUpperCase() pour mettre en majuscules les noms des types.
      */}
      <ul className="pokemon-types">
        {types.map((type, index) => (
          <li key={index} className={`type ${type}`}>{type.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonCard;
