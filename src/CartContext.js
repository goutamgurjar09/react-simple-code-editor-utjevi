import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const CartContext = createContext();

// Custom hook to use the Cart context
export const useCart = () => {
  const context = useContext(CartContext);

  // Ensure that the context is used inside a provider
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};

// CartProvider component
const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [error, setError] = useState(''); // State for handling errors

  // Fetch data from the dummy API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        console.log(data.products);
        setCartData(data.products); // Set fetched products
      } catch (err) {
        setError('Error fetching data'); // Handle errors
        console.error(err);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []); // Empty dependency array to run only on mount

  // Function to add products to the cart
  const addToCart = (product) => {
    const isProductInCart = cartData.some((item) => item.id === product.id);
    if (isProductInCart) {
      setError('Product is already in the cart.');
    } else {
      setCartData((prev) => [...prev, product]);
      setError(''); // Clear any existing error when successfully added
    }
  };

  return (
    <CartContext.Provider value={{ cartData, addToCart, error }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
