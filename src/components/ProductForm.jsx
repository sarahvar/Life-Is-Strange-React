// src/components/ProductForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/apiServices';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [description, setDescription] = useState('');
  const [mainPepper, setMainPepper] = useState('');
  const [heat, setHeat] = useState(0);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const formData = new FormData();
    formData.append('sauce', JSON.stringify({ name, manufacturer, description, mainPepper, heat }));
    formData.append('image', image);

    try {
      await apiService.createSauce(formData);
      navigate('/products'); // Redirige après la création
    } catch (error) {
      console.error('Failed to create product:', error);
      setErrorMsg('Failed to create product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Manufacturer" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="text" placeholder="Main Pepper" value={mainPepper} onChange={(e) => setMainPepper(e.target.value)} required />
        <input type="number" placeholder="Heat Level" value={heat} onChange={(e) => setHeat(Number(e.target.value))} required />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
        <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Create Product'}</button>
        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
      </form>
    </div>
  );
};

export default ProductForm;
