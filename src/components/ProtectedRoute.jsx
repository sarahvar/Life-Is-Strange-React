import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);

  if (!token) {
    // Si l'utilisateur n'est pas authentifié, redirige vers la page de connexion
    return <Navigate to="/login" />;
  }

  // Sinon, autorise l'accès au composant protégé
  return children;
};

export default ProtectedRoute;


