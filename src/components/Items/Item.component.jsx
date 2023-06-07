import React, { useContext, useState } from "react";
import "./Item.scss";
import { ShopContext } from "../../context/shop-context";

const Items = ({ category }) => {
  const { id, mez, ar, kepUrl } = category;

  const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(id, { count });
    setCount(1);
  };

  return (
    <>
      <div key={id} className="category-container">
        <div className="card">
          <h1 className="card-headers">{mez}</h1>
          <div className="card-header">
            <img src={kepUrl} alt="" />
          </div>
          <div className="card-footer">
            <p>Ár: {ar * count}</p>
            <div className="counter">
              <button onClick={decrement}>-</button>
              <p>{count}</p>
              <button onClick={increment}>+</button>
            </div>
            <button onClick={handleAddToCart}>Kosárba</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
