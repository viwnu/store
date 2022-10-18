import React from 'react';
import { useContext } from "react";

import CartContext from '../context.js';
import productBase from '../product/productBase.js';

import CartUnit from './cartUnit.js';
import CartSummary from './cartSummary.js';

import './cart.css'

export default function Cart() {
  // const [cart, setCart] = useContext(CartContext);
  const [cart] = useContext(CartContext);

  const totalCost = cart.reduce((sum, item) => sum+item.amount*(
    productBase[item.productCategoryIndex].products[item.productIndex].price
  ), 0)

  return (
    <div className="cart">
      <div className="cartList">
      {cart.map((item, index) => {
        return (
          <CartUnit
            key = {index}
            cartUnitIndex = {index}
          />
        )
      })}
      </div>
      <CartSummary
        totalCost = {totalCost}
      />
    </div>
  )
}
