import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'; // Assurez-vous que le chemin d'importation est correct

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="overlay"></div>
      <div className="error-content">
        <h1>404</h1>
        <h2>Oups, cette page semble perdue dans le temps...</h2>
        <p>La page que vous recherchez ne se trouve pas ici. Peut-être qu'elle a été modifiée dans une autre réalité.</p>
        <img src="/assets/Biche-guide.png" alt="Error IMG" />
        <Link to="/" className="home-button">Retourner à la page d'accueil</Link>
      </div>
    </div>
  );
};

export default ErrorPage;


