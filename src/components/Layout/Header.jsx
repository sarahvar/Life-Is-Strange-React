// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assurez-vous de bien lier le fichier CSS

const Header = () => {
  return (
    <section className="navbar">
      <Link to="/" className="home-link"> {/* Lien vers HomePage */}
        <h1>Life Is Strange - Accueil</h1>
      </Link>
    </section>
  );
};

export default Header;
