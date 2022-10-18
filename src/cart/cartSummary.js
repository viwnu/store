import React from 'react';
// import { useContext } from "react";

// import CartContext from '../context.js';
// import productBase from '../product/productBase.js';

export default function CartSummary({totalCost}) {
  return (
    // <div></div>
    <div className="cartSummary">
      <div className="cartTotalCost">
        <span>ИТОГО</span>
        <span>{"₽ " + totalCost}</span>
      </div>
      <button className="cartBuyButton">Перейти к оформлению</button>
    </div>
  )
}
