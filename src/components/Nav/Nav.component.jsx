import React, { useContext, useState } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

import { ShopContext } from "../../context/shop-context";

const Nav = () => {
  const { cartItems } = useContext(ShopContext);

  const sum = Object.values(cartItems).reduce((a, b) => a + b, 0);

  const openCart = () => {
    window.location.reload("/kosar");
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            <p>{`(${sum})`}</p>
          </li>
          <li>
            <Link to="/kosar" className="kosarP">
              Kosár
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
