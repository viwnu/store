import React from 'react';
import { useContext } from "react";

import HeaderButton from './headerButton.js';
import CartContext from '../context.js';

import {inCartAmount} from '../cartLogic/cartLogicAPI.js'

import './header.css';


export default function Header({setShow}) {
  const [cart] = useContext(CartContext);

  const favoritesButtonLogo = "/FavoritesButtonLogo.svg";
  const cartButtonLogo = "/CartButtonLogo.svg";

  return (
    <header className="header">

      <button
        className="logo"
        onClick = {() => setShow('product')}
      >QPICK</button>

      <HeaderButton
        logo = {favoritesButtonLogo}
        buttonCounter = {2}
      />

      <HeaderButton
        setShow = {setShow}
        logo = {cartButtonLogo}
        buttonCounter = {inCartAmount(cart)}
      />

    </header>
  )
};
