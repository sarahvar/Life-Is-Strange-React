import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../services/apiServices';

const SauceList = () => {
  const [sauces, setSauces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchSauces = async () => {
      try {
        const response = await apiService.getSauces();
        setSauces(response.data);
      } catch (error) {
        console.error('Failed to fetch sauces:', error);
        setErrorMsg('Failed to load sauces');
      } finally {
        setLoading(false);
      }
    };

    fetchSauces();
  }, []);

  if (loading) return <p>Loading sauces...</p>;
  if (errorMsg) return <p style={{ color: 'red' }}>{errorMsg}</p>;

  return (
    <div>
      <h1>List of Sauces</h1>
      <ul>
        {sauces.map((sauce) => (
          <li key={sauce._id}>
            <Link to={`/sauces/${sauce._id}`}>{sauce.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SauceList;
