function increaseAmount(cart, cartUnitIndex, setCart) {
  const refreshedCart = cart.slice();
  refreshedCart[cartUnitIndex].amount++;
  setCart(refreshedCart);
};

function decreaseAmount(cart, cartUnitIndex, setCart) {
  const refreshedCart = cart.slice();
  refreshedCart[cartUnitIndex].amount--;
  setCart(refreshedCart);
};

export {increaseAmount, decreaseAmount}
