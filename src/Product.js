import React from 'react';
import { useCart } from './CartContext';

const Product = () => {
  const { cartData, error } = useCart();

  return (
    <div>
      <h1>Added Products</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error messages */}
      <ul>
        {cartData.map((item, index) => (
          <li key={index}>
            {item.title} - ${item.price} {/* Adjust fields according to API response */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
