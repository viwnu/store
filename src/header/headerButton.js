import React from 'react';

import HeaderCounter from './headerCounter.js';


export default function HeaderButton ({setShow, logo, buttonCounter}) {
  const style = {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    width: `60px`,
    height: `60px`,
  };
  return (
    <button
      style={style}
      onClick = {() => {
        if(buttonCounter >= 1) {
          setShow('cart');
        }
      }}
      >
      <HeaderCounter
        count = {buttonCounter}
      />
    </button>
  );
}
