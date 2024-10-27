import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Importez le fichier CSS spécifique à la page d'accueil
import AudioPlayer from '../components/AudioPlayer'; // Importez le composant AudioPlayer

const HomePage = () => {
  return (
    <div className="homepage"> {/* Utilisez la classe 'homepage' pour encapsuler le contenu */}
      <nav>
        <ul>
          <li>
            <Link to="/personnages">L'histoire de Life Is Strange</Link>
          </li>
          <li>
            <Link to="/max">Fiche de personnage : Max</Link>
          </li>
          <li>
            <Link to="/chloe">Fiche de personnage : Chloé</Link>
          </li>
          <li>
            <Link to="/rachel">Fiche de personnage : Rachel</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz Interactif</Link>
          </li>
          <li>
            <Link to="/memoryGame">Jeu de memoire</Link>
          </li>
        </ul>
      </nav>
      
      {/* Inclure le composant AudioPlayer */}
      <AudioPlayer />
    </div>
  );
};

export default HomePage;
