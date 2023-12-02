import React, { useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

const DeleteProduct = () => {
  const [productId, setProductId] = useState('');

  const handleDeleteProduct = async () => {
    try {
      await axios.delete(`http://localhost:5000/delete-product/${productId}`);
      alert('Produto excluído com sucesso!');
      setProductId('');
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
      alert('Erro ao excluir produto. Consulte o console para obter detalhes.');
    }
  };

  return (
    <div className="center-container-delete">
      <Card className="custom-card">
        <Card.Body>
      <h2>Excluir Produto</h2>
      <div className="product-list-delete" >
        <label>ID do Produto:</label>
        <input
          type="text"
          placeholder="ID do Produto"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </div>
      <div className="product-list-delete">
      <button onClick={handleDeleteProduct}>Excluir Produto</button>
      </div>
      </Card.Body>
      </Card>
    </div>
  );
};

export default DeleteProduct;
