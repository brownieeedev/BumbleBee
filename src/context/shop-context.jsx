import React, { createContext, useState } from "react";
import { kategoriak } from "../assets/kategoriak";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < kategoriak.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);

  const addToCart = (itemId, { count }) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + count }));
  };

  const removeFromCart = (itemId, db) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - db }));
  };

  const removeAllFromCart = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    removeAllFromCart,
  };

  console.log(contextValue);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
