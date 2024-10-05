import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiService from '../services/apiServices';

const SingleSauce = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sauce, setSauce] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchSauce = async () => {
      try {
        const response = await apiService.getSauceById(id);
        setSauce(response.data);
      } catch (error) {
        console.error('Failed to fetch sauce:', error);
        setErrorMsg('Failed to load sauce');
      } finally {
        setLoading(false);
      }
    };

    fetchSauce();
  }, [id]);

  const handleDelete = async () => {
    try {
      await apiService.deleteSauce(id);
      navigate('/sauces'); // Redirige après la suppression
    } catch (error) {
      console.error('Failed to delete sauce:', error);
      setErrorMsg('Failed to delete sauce');
    }
  };

  if (loading) return <p>Loading sauce...</p>;
  if (errorMsg) return <p style={{ color: 'red' }}>{errorMsg}</p>;

  return (
    <div>
      <h1>{sauce.name}</h1>
      <img src={sauce.imageUrl} alt={sauce.name} />
      <p>{sauce.description}</p>
      <p>Main Pepper: {sauce.mainPepper}</p>
      <p>Heat Level: {sauce.heat}</p>
      <button onClick={handleDelete}>Delete Sauce</button>
    </div>
  );
};

export default SingleSauce;

