import React from 'react';
import { Card } from 'react-bootstrap';


const ProductCard = ({ product }) => {
  return (
    <Card className='custom-card' >
      <Card.Body>
        <Card.Text>Nome: {product.name}</Card.Text>
        <Card.Text>Preço: ${product.price}</Card.Text>
        <Card.Text>Descrição: {product.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

