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
    mounted() {
      this.$toast.showToast("演示需要，所以未登录可以使用购物车~", 3000);
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
