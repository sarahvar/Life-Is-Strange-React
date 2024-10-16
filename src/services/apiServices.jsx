// src/services/apiService.js
import axios from 'axios';

const API_URL = '/api/products'; // Assurez-vous que cette URL correspond à votre API

const apiService = {
  getSauces: () => axios.get(API_URL),
  getSauceById: (id) => axios.get(`${API_URL}/${id}`),
  createSauce: (sauceData) => axios.post(API_URL, sauceData),
  updateSauce: (id, sauceData) => axios.put(`${API_URL}/${id}`, sauceData),
  deleteSauce: (id) => axios.delete(`${API_URL}/${id}`),
};

export default apiService;


