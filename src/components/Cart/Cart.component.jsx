import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { kategoriak } from "../../assets/kategoriak";
import { ShopContext } from "../../context/shop-context";
import "./Cart.scss";
import CartItem from "./Cart-item.component";
import Summary from "./Summary.component";

const Cart = () => {
  const { cartItems, removeAllFromCart } = useContext(ShopContext);

  const [redirectToKategoriak, setRedirectToKategoriak] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const handleRemove = () => {
    removeAllFromCart();
    setRedirectToKategoriak(true);
  };

  useEffect(() => {
    const isCartEmpty = Object.values(cartItems).every(
      (quantity) => quantity === 0
    );
    if (isCartEmpty) {
      setDisabled(true);
    }
  }, [cartItems]);

  if (redirectToKategoriak) {
    navigate("/kategoriak");
  }

  const handleOrder = async () => {
    try {
      const orderItems = kategoriak
        .filter((kategoria) => cartItems[kategoria.id] !== 0)
        .map((kategoria) => ({
          id: kategoria.id,
          mez: kategoria.mez,
          ar: kategoria.ar,
          kepUrl: kategoria.kepUrl,
          db: cartItems[kategoria.id],
        }));

      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderItems }),
      });
      const data = await response.json();
      if (data.status === "order successful") {
        handleRemove();
        alert("Sikeres rendelés!");
      }
    } catch (error) {
      alert(
        `Valami hiba történt a rendelés során, sikertelen rendelés! ${error.message}`
      );
    }
  };

  return (
    <div>
      <h1 className="mainHeader">BumbleBee</h1>
      <table>
        <tr>
          <th>Kosár termékek</th>
        </tr>
        <tr>
          <td>
            <div className="cartItems">
              {console.log(cartItems)}
              {kategoriak.map((kategoria) => {
                if (cartItems[kategoria.id] !== 0) {
                  const db = cartItems[kategoria.id];
                  return <CartItem data={{ ...kategoria, db }}></CartItem>;
                }
              })}
            </div>
          </td>
        </tr>
      </table>
      <div className="cart-buttons">
        <button
          onClick={handleOrder}
          className={`${disabled ? "disabled" : ""}`}
          disabled={disabled}
        >
          Megrendelés
        </button>
        <button
          className={`${disabled ? "disabled" : ""}`}
          disabled={disabled}
          onClick={handleRemove}
        >
          Kosár ürítése
        </button>
      </div>
      <Summary></Summary>
    </div>

    // <div className="cart">
    //   <div>
    //     <h1>Your Cart Items</h1>
    //   </div>

    // </div>
  );
};

export default Cart;
