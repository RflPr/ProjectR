import React, { useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

const EditProduct = () => {
  const [productId, setProductId] = useState("");
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductDescription, setNewProductDescription] = useState("");

  const handleEditProduct = async () => {
    try {
      // Verifique se o productId está definido corretamente antes da requisição
      if (!productId) {
        alert('Por favor, forneça um ID de produto válido.');
        return;
      }

      console.log({ productId, newProductName, newProductPrice, newProductDescription });

      await axios.put(`http://localhost:5000/edit-product/${productId}`, {
        newProductName,
        newProductPrice,
        newProductDescription,
      });

      alert('Produto editado com sucesso!');
      setProductId('');
      setNewProductName('');
      setNewProductPrice('');
      setNewProductDescription('');
    } catch (error) {
      console.error('Erro ao editar produto:', error);
      alert('Erro ao editar produto. Consulte o console para obter detalhes.');
    }
  };

  return (
    <div className="center-container-edit">
      <Card className="custom-card">
      <Card.Body>
      <h2>Editar Produto</h2>
      <div className="product-list-edit">
        <label>ID do Produto:</label>
        <input
          type="text"
          placeholder="ID do Produto"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </div>
      <div className="product-list-edit">
        <label>Novo Nome do Produto:</label>
        <input
          type="text"
          placeholder="Novo Nome do Produto"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
      </div>
      <div className="product-list-edit">
        <label>Novo Preço do Produto:</label>
        <input
          type="text"
          placeholder="Novo Preço do Produto"
          value={newProductPrice}
          onChange={(e) => setNewProductPrice(e.target.value)}
        />
      </div>
      <div className="product-list-edit">
        <label>Nova Descrição do Produto:</label>
        <textarea
          placeholder="Nova Descrição do Produto"
          value={newProductDescription}
          onChange={(e) => setNewProductDescription(e.target.value)}
        />
      </div>
      <div className="product-list-edit">
      <button onClick={handleEditProduct}>Editar Produto</button>
      </div>
      </Card.Body>
    </Card>
    </div>
  );
};

export default EditProduct;
