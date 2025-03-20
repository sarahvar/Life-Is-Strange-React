import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Import du fichier CSS

const Footer = () => {
  return (
    <footer>
      <p>© 2024 Life is Strange Universe - Tous droits réservés</p>
      <p>
        <Link to="/mentions-legales">Mentions Légales</Link>
        <Link to="/politique-confidentialite">Politique de Confidentialité</Link>
      </p>
    </footer>
  );
};

export default Footer;
