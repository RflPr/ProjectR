import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { getAuth, signOut } from 'firebase/auth';
import { Navigate } from 'react-router-dom';

const ShowProducts = () => {
  const auth = getAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/show-products');
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        alert('Erro ao buscar produtos. Consulte o console para obter detalhes.');
      } finally {
        // Simulando um atraso de 1 segundo antes de parar de mostrar "Carregando..."
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchProducts();
  }, []);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      setLoggedOut(true);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      alert('Erro ao fazer logout. Consulte o console para obter detalhes.');
    } finally {
      // Simulando um atraso de 1 segundo antes de parar de mostrar "Carregando..."
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  };

  return (
    <div className="center-container-show">
      <h2>Lista de Produtos</h2>
      {loading && <p>Carregando...</p>}
      {!loading && (
        <>
          <button onClick={handleLogout}>Logout</button>
          <ul className="product-list-show">
            {products.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </>
      )}
      {loggedOut && <Navigate to="/" />}
    </div>
  );
};

export default ShowProducts;
