export default {
  cartLength(state) {
    return state.cartList.length;
  },
  productList(state) {
    return state.cartList;
  }
}