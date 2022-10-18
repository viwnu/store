export function inCartAmount(cart) {
  if(cart) {
    return cart.reduce((sum, item) => {
      return sum + item.amount
    }, 0);
  }
}
