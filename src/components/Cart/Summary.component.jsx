import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { kategoriak } from "../../assets/kategoriak";

function Summary() {
  const { cartItems } = useContext(ShopContext);
  const { ar } = cartItems;

  const [sum, setSum] = useState(0);

  useEffect(() => {
    let totalSum = 0;
    kategoriak.forEach((kategoria) => {
      if (cartItems[kategoria.id] !== 0) {
        const db = cartItems[kategoria.id];
        totalSum += db * kategoria.ar;
      }
    });
    setSum(totalSum);
  }, [cartItems]);

  return (
    <>
      <div class="totalprice">
        <table>
          <tr>
            <td>Összeg:</td>
            <td>{`${sum} Ft`}</td>
          </tr>
          <tr>
            <td>Áfa:</td>
            <td>{`${Math.ceil(sum * 0.27)} Ft`}</td>
          </tr>
          <tr>
            <td>Összesen:</td>
            <td>{`${sum + sum * 0.27} Ft`}</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Summary;
