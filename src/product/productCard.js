import React from 'react';
import { useContext } from "react";

import CartContext from '../context.js';
import productBase from './productBase.js';

import {addToCart} from '../cartLogic/cartLogicAPI.js'

import './productCard.css'

export default function ProductCard({productCategoryIndex, productIndex}) {
  const product = productBase[productCategoryIndex].products[productIndex];
  const previousPrice = product.previousPrice? <p className="previousPrice">{product.previousPrice + " ₽"}</p> : '';
  const rateLogo = "/rateLogo.svg";
  const rateStyle = {
    backgroundImage: `url(${rateLogo})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `left`,
  };

  const [cart, setCart] = useContext(CartContext);

  return (
    <div className="productCard">
      <div className="productImg">
        <img src={product.img} alt="img not found"/>
      </div>
      <div className="productCardbottom">
        <div><h2>{product.title}</h2></div>
        <div className="prices">
          <p>{product.price + " ₽"}</p>
          {previousPrice}
        </div>
        <div className="productRate" style={rateStyle}><h2>{product.rate}</h2></div>
        <button
          onClick={() => addToCart(cart, setCart, productCategoryIndex, productIndex)}
        ><h2>Купить</h2></button>
      </div>
    </div>
  );
}
