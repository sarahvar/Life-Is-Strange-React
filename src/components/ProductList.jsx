// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../services/apiServices';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiService.getSauces();
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setErrorMsg('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (errorMsg) return <p style={{ color: 'red' }}>{errorMsg}</p>;

  return (
    <div>
      <h1>Products</h1>
      <Link to="/create">Create New Product</Link>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <Link to={`/products/${product._id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

