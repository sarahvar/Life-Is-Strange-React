import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const apiUrl = '/api/login'; // URL de l'API

    console.log('Attempting login with:', { email, password });
    console.log(`API request URL: ${window.location.origin}${apiUrl}`); // Affiche l'URL complète

    try {
      const response = await axios.post(apiUrl, { email, password });

      // Vérifie si le token est présent dans la réponse
      const token = response.data.token;
      if (token) {
        // Stocke le token dans le localStorage
        localStorage.setItem('token', token);
        console.log('Login successful. Token stored in localStorage.');

        // Redirige vers "new-sauce" après un login réussi
        navigate('/create');
      } else {
        setErrorMsg('Authentication failed: No token provided');
      }
    } catch (error) {
      console.log('Login failed:', error.response?.data?.message || error); // Log en cas d'échec
      setErrorMsg(error.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </button>
        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
      </form>
    </div>
  );
}

export default Login;
