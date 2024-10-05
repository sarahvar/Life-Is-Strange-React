import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSauceById, deleteSauceById, evaluateSauce } from '../services/saucesService';

const SauceDetails = () => {
  const { id } = useParams(); // Obtenir l'ID de la sauce depuis les paramètres d'URL
  const [sauce, setSauce] = useState(null); // État pour stocker les détails de la sauce
  const [error, setError] = useState(''); // État pour stocker les erreurs éventuelles
  const navigate = useNavigate(); // Navigation pour rediriger après suppression

  // Utiliser useEffect pour récupérer les détails de la sauce au chargement du composant
  useEffect(() => {
    const fetchSauce = async () => {
      try {
        const data = await getSauceById(id);
        setSauce(data); // Met à jour les détails de la sauce
      } catch (error) {
        setError('Failed to load sauce details'); // Gérer l'erreur
      }
    };
    fetchSauce(); // Appeler la fonction de récupération de la sauce
  }, [id]);

  // Gérer la suppression de la sauce
  const handleDelete = async () => {
    try {
      await deleteSauceById(id);
      navigate('/sauces'); // Rediriger vers la liste des sauces après suppression
    } catch (error) {
      setError('Failed to delete the sauce'); // Gérer l'erreur de suppression
    }
  };

  // Gérer le like d'une sauce
  const handleLike = async () => {
    try {
      await evaluateSauce(id, 1); // 1 signifie "like"
      setSauce({ ...sauce, likes: sauce.likes + 1 }); // Actualiser le nombre de likes localement
    } catch (error) {
      setError('Failed to like the sauce');
    }
  };

  // Gérer le dislike d'une sauce
  const handleDislike = async () => {
    try {
      await evaluateSauce(id, -1); // -1 signifie "dislike"
      setSauce({ ...sauce, dislikes: sauce.dislikes + 1 }); // Actualiser le nombre de dislikes localement
    } catch (error) {
      setError('Failed to dislike the sauce');
    }
  };

  // Afficher un message d'erreur si besoin
  if (error) return <p>{error}</p>;

  // Afficher un message de chargement si la sauce n'a pas encore été récupérée
  if (!sauce) return <p>Loading...</p>;

  // Afficher les détails de la sauce
  return (
    <div>
      <h1>{sauce.name}</h1>
      <p>{sauce.description}</p>
      <p>Manufacturer: {sauce.manufacturer}</p>
      <p>Main Pepper: {sauce.mainPepper}</p>
      <p>Heat Level: {sauce.heat}</p>
      <p>Likes: {sauce.likes}</p>
      <p>Dislikes: {sauce.dislikes}</p>

      {/* Boutons d'interaction */}
      <button onClick={handleLike}>Like</button>
      <button onClick={handleDislike}>Dislike</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default SauceDetails;
