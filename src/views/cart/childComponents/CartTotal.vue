<template scoped>
  <div id="cart-total">
    <div class="check">
      <check-button class="check-button" :is-checked="isSelectorAll" @click.native="checkClick"> </check-button>
      <span @click="checkClick">全选</span>
    </div>
    <div class="bottom-bar">
      <span>
        合计 : <i class="total">{{ totalPrice }}</i>
      </span>
      <i class="settle" @click="settleClick">结算 ({{ length }})</i>
    </div>
  </div>
</template>
<script>
  import CheckButton from "components/content/checkButton/CheckButton.vue";
  import { mapGetters } from "vuex";
  export default {
    name: "CartTotal",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters({
        length: "cartLength"
      }),
      totalPrice() {
        return (
          "￥" +
          this.$store.state.cartList
            .filter((item) => {
              return item.checked;
            })
            .reduce((accumulator, item) => {
              return accumulator + item.price * item.count;
            }, 0)
        );
      },
      isSelectorAll() {
        if (this.$store.state.cartList.length) {
          // return !(this.$store.state.cartList.filter( item => !item.checked).length);
          return !this.$store.state.cartList.find((item) => !item.checked);
        }
      }
    },
    methods: {
      checkClick() {
        if (this.isSelectorAll) {
          this.$store.state.cartList.forEach((element) => (element.checked = false));
        } else {
          this.$store.state.cartList.forEach((element) => (element.checked = true));
        }
      },
      settleClick() {
        if (!this.$store.state.cartList.length) {
          this.$toast.showToast("没有商品,无法结算");
        } else {
          this.$toast.showToast("后续正在开发中~");
        }
      }
    }
  };
</script>
<style scoped>
  #cart-total {
    display: flex;
    justify-content: space-between;
    position: relative;
    left: 0;
    right: 0;
    bottom: 55px;
    height: 55px;
    border-top: 1px solid #ccc;
    background-color: #fff;
  }

  .check {
    display: flex;
    justify-content: space-evenly;
    width: 70px;
    line-height: 55px;
  }

  .bottom-bar {
    display: flex;
    justify-content: space-between;
    line-height: 55px;
  }

  .total {
    font-style: normal;
    color: #f77234;
  }

  .settle {
    width: 100px;
    height: 35px;
    border-radius: 15px;
    background-color: #3491fa;
    color: #fff;
    line-height: 35px;
    text-align: center;
    font-style: normal;
    margin: 10px 15px;
  }
</style>
