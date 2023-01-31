import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

export const Products = ({id, description}) => {
  const [products, setProducts] = useState([]);



useEffect(() => {
   fetch('https://fakestoreapi.com/products')
   .then(res=>res.json())
   .then((products)  => setProducts(products));
   
}, []);
            
    return (
    <div>
      Products
      {products.map((product) => (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
      ))}
    </div>
  );
}
;