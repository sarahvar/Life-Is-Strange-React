import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Gestion du changement dans les champs du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification basique : tous les champs doivent être remplis
    if (!formData.name || !formData.email || !formData.password) {
      setErrorMessage('Tous les champs sont requis.');
      return;
    }

    try {
      // Envoi de la requête POST pour créer l'utilisateur
      const response = await axios.post('/api/users', formData);  // Remplacez l'URL par celle du backend

      if (response.status === 201) {
        setSuccessMessage('Utilisateur créé avec succès.');
        setFormData({ name: '', email: '', password: '' }); // Réinitialisation du formulaire
      }
    } catch (error) {
      setErrorMessage('Erreur lors de la création de l’utilisateur.');
    }
  };

  return (
    <div>
      <h2>Créer un Utilisateur</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Créer l'utilisateur</button>
      </form>
    </div>
  );
};

export default UserForm;
