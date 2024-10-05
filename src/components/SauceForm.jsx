// src/components/SauceForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/apiServices';

const SauceForm = () => {
  const navigate = useNavigate();

  const [sauce, setSauce] = useState({
    name: '',
    manufacturer: '',
    description: '',
    mainPepper: '',
    heat: 1,
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSauce((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSauce((prev) => ({ ...prev, image: file }));

      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    for (const key in sauce) {
      formData.append(key, sauce[key]);
    }

    try {
      await apiService.createSauce(formData); // Utilise createSauce pour soumettre
      navigate('/sauces'); // Redirige vers la liste des sauces
    } catch (error) {
      console.error('Failed to submit sauce:', error);
      setErrorMsg('Failed to submit sauce: ' + (error.message || 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Add New Sauce</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={sauce.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="manufacturer">Manufacturer</label>
          <input
            type="text"
            id="manufacturer"
            name="manufacturer"
            value={sauce.manufacturer}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={sauce.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="mainPepper">Main Pepper</label>
          <input
            type="text"
            id="mainPepper"
            name="mainPepper"
            value={sauce.mainPepper}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="heat">Heat Level</label>
          <input
            type="number"
            id="heat"
            name="heat"
            value={sauce.heat}
            onChange={handleInputChange}
            min="1"
            max="10"
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxWidth: '200px', marginTop: '10px' }} />}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Add Sauce'}
        </button>
        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
      </form>
    </div>
  );
};

export default SauceForm;
