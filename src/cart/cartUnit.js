import React from 'react';
import { useState } from 'react';
import { useContext } from "react";

import CartContext from '../context.js';
import productBase from '../product/productBase.js';
import DecreaseButton from './decreaseButton.js';

import {increaseAmount, decreaseAmount} from '../cartLogic/cartLogicAPI.js'

export default function CartUnit({cartUnitIndex}) {
  const [cart, setCart] = useContext(CartContext);
  const cartUnitAmount = cart[cartUnitIndex].amount;

  function decreaseAmountAndShowdialog() {
    if(cart[cartUnitIndex].amount === 1) {
      setShowDeleteDialog(true);
    } else {
      decreaseAmount(cart, cartUnitIndex, setCart);
    }
  };

  const product = productBase[cart[cartUnitIndex].productCategoryIndex].products[cart[cartUnitIndex].productIndex];
  const previousPrice = product.previousPrice? <p className="previousPrice">{product.previousPrice + " ₽"}</p> : '';

  const cost = product.price * cartUnitAmount;

  const style = {
    backgroundImage: `url(${"/deleteButtonLogo.svg"})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`
  };

  function deleteCartItem() {
    const refreshedCart = [...cart];
    refreshedCart.splice(cartUnitIndex,1);
    setCart(refreshedCart);
  }

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  function hideDeleteDialog() {
    setShowDeleteDialog(false);
  }

  return (
    <div className="cartUnit">
      <div className="cartUnit_left">
        <img className="productImgInCart" src={product.img} alt="img not found"/>
        <div className="cartUnit_controls">
        <DecreaseButton
          showDeleteDialog = {showDeleteDialog}
          hideDeleteDialog = {() => hideDeleteDialog()}
          deleteCartItem = {() => deleteCartItem()}
          decreaseAmount = {() => decreaseAmountAndShowdialog()}
        />
        <span>{cartUnitAmount}</span>
        <button className="cartUnitControlButton orangeCircle"
          onClick={() => increaseAmount(cart, cartUnitIndex, setCart)}
        >+</button>
        </div>
      </div>
      <div className="cartUnit_center">
        <div className="cartUnitTitle">{product.title}</div>
        <div className="prices">
          <p>{product.price + " ₽"}</p>
          {previousPrice}
        </div>
      </div>
      <div className="cartUnit_right">
        <button className="cartUnitDeleteButton"
          style = {style}
          onClick={() => deleteCartItem()}
        >''</button>
        <div className="cartUnitCost">{cost + ' ₽'}</div>
      </div>
    </div>
  )
}
