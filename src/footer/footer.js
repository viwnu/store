import React from 'react';
import { useContext } from "react";

import CartContext from '../context.js';

import {inCartAmount} from '../cartLogic/cartLogicAPI.js'

import './footer.css'

export default function Footer({setShow}) {
  const languagesSyle = {
    backgroundImage: `url(../languagesLogo.svg)`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `left`,
    width: `20px`,
    height: `20px`,
  };
  const chosedLanguageStyle = {
    color: '#FFA542'
  };
  const [cart] = useContext(CartContext);
  return (
    <footer className="footer">
      <button className="logo"
        onClick = {() => setShow('product')}
      >QPICK</button>
      <ul className="footerLinks">
        <li><a href="./">Избранное</a></li>
        <li><button
          onClick = {() => {
            if(cart && inCartAmount(cart) >= 1) {
              setShow('cart');
            }
          }}
        >Корзина</button></li>
        <li><a href="./">Контакты</a></li>
        <li><a href="./">Условия сервиса</a></li>
        <li>
          <ul className="languages">
            <li className="languagesLogo" style={languagesSyle}></li>
            <li style={chosedLanguageStyle}><a href="./">Рус</a></li>
            <li><a href="./">Eng</a></li>
          </ul>
        </li>
      </ul>
      <ul className="socials">
        <li><a href="https://vk.com/QPICK"><img className="VkLogo" src={'./VK.svg'} alt="VK"/></a></li>
        <li><a href="https://telegram.org/QPICK"><img className="TGLogo" src={'./Telegram.svg'} alt="TG"/></a></li>
        <li><a href="https://whatsapp.com/QPICK"><img className="whatsappLogo" src={'./Whatsapp.svg'} alt="whatsapp"/></a></li>
      </ul>
    </footer>
  )
}
