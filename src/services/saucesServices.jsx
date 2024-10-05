import { apiService } from './apiServices';

// Obtenir toutes les sauces
export const getAllSauces = async () => {
  try {
    return await apiService('/api/sauces');
  } catch (error) {
    console.error("Failed to fetch sauces:", error);
    throw error; // Relancer l'erreur ou gérer comme nécessaire
  }
};

// Obtenir une sauce par ID
export const getSauceById = async (id) => {
  try {
    return await apiService(`/api/sauces/${id}`);
  } catch (error) {
    console.error(`Failed to fetch sauce with id ${id}:`, error);
    throw error;
  }
};

// Créer une nouvelle sauce
export const createSauce = async (sauceData) => {
  try {
    return await apiService('/api/sauces', {
      method: 'POST',
      body: JSON.stringify(sauceData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Failed to create sauce:", error);
    throw error;
  }
};

// Modifier une sauce existante
export const modifySauce = async (id, sauceData) => {
  try {
    return await apiService(`/api/sauces/${id}`, {
      method: 'PUT',
      body: JSON.stringify(sauceData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(`Failed to modify sauce with id ${id}:`, error);
    throw error;
  }
};

// Supprimer une sauce
export const deleteSauce = async (id) => {
  try {
    return await apiService(`/api/sauces/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error(`Failed to delete sauce with id ${id}:`, error);
    throw error;
  }
};

// Évaluer une sauce (liker ou disliker)
export const evaluateSauce = async (id, like) => {
  try {
    return await apiService(`/api/sauces/${id}/like`, {
      method: 'POST',
      body: JSON.stringify({ like }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(`Failed to evaluate sauce with id ${id}:`, error);
    throw error;
  }
};

