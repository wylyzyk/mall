<template scoped>
  <div id="cart-total">
    <div class="check">
      <check-button class="check-button" :is-checked="isSelectorAll" @click.native="checkClick">
      </check-button>
      <span @click="checkClick">全选</span>
    </div>
    <div class="bottom-bar">
      合计: <i class="total">{{ totalPrice }}</i>
      <i class="settle" @click="settleClick">结算</i>
    </div>
  </div>
</template>
<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'
export default {
  name: "CartTotal",
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      return "$" + this.$store.state.cartList.filter( item => {
        return item.checked;
      }).reduce((accumulator, item) => {
        return accumulator + (item.price * item.count);
      }, 0);
    },
    isSelectorAll() {
      if(this.$store.state.cartList.length) {
        // return !(this.$store.state.cartList.filter( item => !item.checked).length);
        return !this.$store.state.cartList.find( item => !item.checked);
      }
    }
  },
  methods: {
    checkClick() {
      if(this.isSelectorAll) {
        this.$store.state.cartList.forEach( element => element.checked = false);
      }else {
        this.$store.state.cartList.forEach( element => element.checked = true);
      }
    },
    settleClick() {
      if(!this.$store.state.cartList.length) {
        this.$toast.showToast("没有商品,无法结算");
      }
    }
  }
}
</script>
<style scoped>
#cart-total {
  position: relative;
  left: 0;
  right: 0;
  bottom: 44px;
  height: 44px;
  border-top: 1px solid #ccc;
  background-color: #fff;
}

.check {
  float: left;
  height: 44px;
  display: flex;
  align-items: center;
  margin: 2px auto;
  font-size: 14px;
}

.bottom-bar {
  float: right;
}

.bottom-bar i {
  font-style: normal;
  height: 44px;
  line-height: 44px;
}

.bottom-bar .total {
  color: orangered;
  font-size: 14px;
}
.bottom-bar .settle {
  display: inline-block;
  height: 35px;
  width: 80px;
  border-radius: 30px;
  background-color: red;
  line-height: 35px;
  text-align: center;
  color: #fff;
  margin-left: 8px;
}
</style>