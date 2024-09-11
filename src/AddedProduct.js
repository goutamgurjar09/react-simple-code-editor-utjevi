import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useCart } from './CartContext';

const AddedProduct = () => {
  const { cartData, addToCart, error } = useCart();
  const navigate = useNavigate(); // Initialize navigate

  function handleAddToCart(product) {
    addToCart(product);
    // if (!error) {
    //   navigate('/added-products'); // Navigate to the added products page if no error
    // }
  }

  return (
    <div>
      <h1>Add Product</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {cartData.length === 0 ? (
        <p>No products available.</p>
      ) : (
        cartData.map((product) => (
          <div key={product.id}>
            {/* { product.images && product.images.map((img) =>(
                <img src={img} alt={product.title} />
             ))} */}
            {product.images && product.images.length >= 0 ? (
              <img
                src={product.images[0]}
                alt={product.title}
                style={{ width: '100px', margin: '5px' }} // Add styles for better display
              />
            ) : (
              <p>No image available</p>
            )}
            <p>{product.title}</p>
            <p>${product.price}</p>
            <p>${product.description}</p>

            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default AddedProduct;
