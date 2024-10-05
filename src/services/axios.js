// src/services/axios.js
import axios from 'axios';

// Crée une instance axios
const instance = axios.create({
  baseURL: 'http://localhost:3001/api', // baseURL pour le backend
});

// Ajouter un intercepteur pour inclure le token JWT dans l'en-tête Authorization
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;

