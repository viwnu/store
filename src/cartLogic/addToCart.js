export function addToCart(cart, setCart, productCategoryIndex, productIndex) {
  const cartItem = {
    productCategoryIndex: productCategoryIndex,
    productIndex: productIndex,
    amount: 1
  }
  const mathedIndex = cart.findIndex((item) => item.productCategoryIndex === cartItem.productCategoryIndex && item.productIndex === cartItem.productIndex);
  if(mathedIndex >= 0) {
    const refreshedCart = cart.slice();
    refreshedCart[mathedIndex].amount++;
    setCart(refreshedCart);
  } else {
    setCart([...cart, cartItem]);
  }
};
