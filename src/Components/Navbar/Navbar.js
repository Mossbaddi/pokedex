// src/components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Accueil</Link>
            <Link to="/pokemon-list">Liste des Pokémon</Link>
            <Link to="/my-pokedex">Mon Pokédex</Link>
        </nav>
    );
};

export default Navbar;