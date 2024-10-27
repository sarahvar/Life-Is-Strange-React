import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

// Les pages à afficher dans la navigation
const pages = {
  life: { url: '/personnages', title: "L'histoire de Life Is Strange" },
  max: { url: '/max', title: 'Fiche de personnage : Max' },
  chloe: { url: '/chloe', title: 'Fiche de personnage : Chloé' },
  rachel: { url: '/rachel', title: 'Fiche de personnage : Rachel' },
  quiz: { url: '/quiz', title: 'Quiz Interactif' },
  memoryGame: { url: '/memoryGame', title: 'Jeu de memoire' },
  
    // login: { url: '/login', title: 'Se connecter' },     // Nouveau lien vers Login
    // signup: { url: '/signup', title: "S'inscrire" }      // Nouveau lien vers Signup
  
  // Nouveau lien vers Login // Nouveau lien vers Signup
};

const NavBar = () => {
  const location = useLocation();

  return (
    <header>
      <ul className="navigation">
        {Object.entries(pages).map(([key, { url, title }]) => {
          // Vérification si l'URL actuelle correspond à l'URL de la page
          const isActive = location.pathname === url;
          return (
            <li key={key}>
              <Link to={url} className={isActive ? 'active' : ''}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default NavBar;
