export default {

  addToCart ({ state, commit }, payload) {
    return new Promise((resolve, reject) => {

      // let oldProduct = state.cartList.find(item => item.iid === payload.iid);

      let oldProduct = null;

      // 1. 查找数组中该商品是否存在
      for (let item of state.cartList) {
        if (item.iid === payload.iid) {
          oldProduct = item;
        }
      }
      
      if (oldProduct) {
        commit("addCounter", oldProduct);
        resolve("再次添加成功, 已经在购物车啦~");
      } else {
        payload.count = 1;
        commit("pushToCartList", payload);
        resolve("添加成功, 去购物车认领叭~");
      }
    });
  }
}
