// src/services/apiServices.js
import axios from './axios'; // Assurez-vous d'importer l'instance axios que vous avez créée

const apiService = {
  getSauces: () => axios.get('/sauces'), // Utilise l'instance axios
  getSauceById: (id) => axios.get(`/sauces/${id}`),
  createSauce: (sauceData) => axios.post('/sauces', sauceData),
  updateSauce: (id, sauceData) => axios.put(`/sauces/${id}`, sauceData),
  deleteSauce: (id) => axios.delete(`/sauces/${id}`),
  likeSauce: (id) => axios.post(`/${id}/like`), 
};

export default apiService;

