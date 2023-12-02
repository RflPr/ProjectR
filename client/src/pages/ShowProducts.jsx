import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/show-products');
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        alert('Erro ao buscar produtos. Consulte o console para obter detalhes.');
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="center-container-show">
      <h2>Lista de Produtos</h2>
      <ul className="product-list-show">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowProducts;
