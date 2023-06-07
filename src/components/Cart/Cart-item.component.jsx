import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, mez, ar, kepUrl, db } = props.data;
  const { removeFromCart } = useContext(ShopContext);

  const handleRemoveItem = () => {
    removeFromCart(id, db);
  };
  return (
    <div key={id} className="cartItem">
      <img src={kepUrl} alt="" />
      <p>{`${mez}méz`}</p>
      <p>{`${ar} Ft`} </p>
      <p>{`${db} db`}</p>
      <p>{`${ar * db} Ft`}</p>
      <Link onClick={handleRemoveItem}>Törlés</Link>
    </div>
  );
};

export default CartItem;
