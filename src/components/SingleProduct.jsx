// src/components/SingleProduct.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiService from '../services/apiServices';

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await apiService.getSauceById(id);
        setProduct(response.data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
        setErrorMsg('Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    try {
      await apiService.deleteSauce(id);
      navigate('/products'); // Redirige après la suppression
    } catch (error) {
      console.error('Failed to delete product:', error);
      setErrorMsg('Failed to delete product');
    }
  };

  if (loading) return <p>Loading product...</p>;
  if (errorMsg) return <p style={{ color: 'red' }}>{errorMsg}</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Main Pepper: {product.mainPepper}</p>
      <p>Heat Level: {product.heat}</p>
      <button onClick={handleDelete}>Delete Product</button>
    </div>
  );
};

export default SingleProduct;

