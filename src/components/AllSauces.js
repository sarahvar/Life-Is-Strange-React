import React, { useEffect, useState } from 'react';
import { getAllSauces } from '../services/saucesServices';

const AllSauces = () => {
  const [sauces, setSauces] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSauces = async () => {
      try {
        const data = await getAllSauces();
        setSauces(data);
      } catch (error) {
        setError('Failed to load sauces');
      }
    };
    fetchSauces();
  }, []);

  if (error) return <p>{error}</p>;
  if (!sauces.length) return <p>No sauces found</p>;

  return (
    <div>
      <h1>All Sauces</h1>
      <ul>
        {sauces.map(sauce => (
          <li key={sauce._id}>
            <h2>{sauce.name}</h2>
            <p>{sauce.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllSauces;
