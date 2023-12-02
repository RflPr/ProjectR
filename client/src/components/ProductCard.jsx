import React from 'react';
import { Card } from 'react-bootstrap';


const ProductCard = ({ product }) => {
  return (
    <Card className='custom-card' style={{ width: '18rem', margin: '5px' }}>
      <Card.Body>
        <Card.Text>Nome: {product.name}</Card.Text>
        <Card.Title>Preço: ${product.price}</Card.Title>
        <Card.Title>Descrição: {product.description}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

