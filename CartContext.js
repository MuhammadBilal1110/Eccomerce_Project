// src/context/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setTotal(total + item.price * item.quantity);
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    const itemToRemove = cartItems.find(item => item.id === id);
    setCartItems(updatedCartItems);
    setTotal(total - itemToRemove.price * itemToRemove.quantity);
  };

  const updateQuantity = (id, quantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, quantity: parseInt(quantity, 10) };
        return updatedItem;
      }
      return item;
    });
    setCartItems(updatedCartItems);

    // Recalculate total
    const newTotal = updatedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};
