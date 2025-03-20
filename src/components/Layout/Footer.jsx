import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import de useLocation depuis React Router
import "./Footer.css"; // Import du fichier CSS

const Footer = () => {
  const location = useLocation(); // Utilisation de useLocation pour obtenir l'URL actuelle

  // Vérifie si la page actuelle est '/mentions-legales'
  const isMentionsLegalesPage = location.pathname === "/mentions-legales";
  // Vérifie si la page actuelle est '/politique-confidentialite'
  const isPolitiqueConfidentialitePage = location.pathname === "/politique-confidentialite";

  return (
    <footer>
      <p>© 2024 Life is Strange Universe - Tous droits réservés</p>
      <p>
        {/* Affiche le lien vers les mentions légales uniquement si on n'est pas déjà sur cette page */}
        {!isMentionsLegalesPage && (
          <Link to="/mentions-legales">Mentions Légales</Link>
        )}

        {/* Affiche le lien vers la politique de confidentialité uniquement si on n'est pas déjà sur cette page */}
        {!isPolitiqueConfidentialitePage && (
          <Link to="/politique-confidentialite">Politique de Confidentialité</Link>
        )}
      </p>
    </footer>
  );
};

export default Footer;
