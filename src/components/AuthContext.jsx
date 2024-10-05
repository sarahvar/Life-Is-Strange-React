import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [authToken, setAuthToken] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const createUser = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', { email, password });
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  };

  const loginUser = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      const { userId, token } = response.data;

      setUserId(userId);
      setAuthToken(token);
      setIsAuth(true);
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };

  const logout = () => {
    setAuthToken('');
    setUserId('');
    setIsAuth(false);
    navigate('/login'); // Redirection vers la page de connexion
  };

  const value = {
    isAuth,
    authToken,
    userId,
    createUser,
    loginUser,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
