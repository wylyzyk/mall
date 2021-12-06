<template scoped>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车 {{ length ? "( " + length + " )" : "" }}</div>
    </nav-bar>

    <!-- 需要展示的商品 -->
    <cart-list />

    <!-- 底部结算栏 -->
    <cart-total />
  </div>
</template>
<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartList from "./childComponents/CartList";
  import CartTotal from "./childComponents/CartTotal";

  import { mapGetters } from "vuex";

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      CartTotal
    },
    computed: {
      ...mapGetters({
        length: "cartLength"
      })
    }
  };
</script>
<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
