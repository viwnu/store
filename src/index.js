import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';
// import { useState, useCallback } from 'react';
// import { useRef } from 'react';
import './index.css';

import CartContext from './context.js';


import Header from './header/header.js'
import Product from './product/product.js'
import Cart from './cart/cart.js';
import Footer from './footer/footer.js';

import storageHandle from './storageHandle'


function App() {
  const [cart, setCart] = useState(null);

  const [show, setShow] = useState(null);

  function renderProductORCart(show) {
    if(show === "product") {
      return (<><Product /></>);
    } else if (show === "cart") {
      return (<><Cart/></>);
    } else {
      return (<p>Something going wrong</p>);
    }
  }

  useEffect(() => {
    document.title = `QPICK ` + show;
  });

  useEffect(() => {
    storageHandle(cart, setCart, 'cart', []);
    storageHandle(show, setShow, 'show', 'product');
  }, [cart, show]);

  return (
    <div className="app">
      <CartContext.Provider value={[cart, setCart]}>
        <Header
          setShow = {setShow}
        />
        {renderProductORCart(show)}
        <Footer
          setShow = {setShow}
        />
      </CartContext.Provider>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
