<template scoped>
  <div class="cart-list">
    <scroll
      class="content"
      ref="scroll"
    >
      <cart-list-item v-for="(item, index) in productList" :key="index" :product="item"></cart-list-item>
    </scroll>
  </div>
</template>
<script>
import CartListItem from "./CartListItem.vue";

import Scroll from "components/common/scroll/Scroll";


import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(["productList"])
  },
  activated () {
    this.$refs.scroll.scrollRefresh();
  },
  methods: {
    
  }

}
</script>
<style scoped>
.cart-list {
  height: calc(100vh - 49px - 44px);
  overflow: hidden;
}

.content {
  height: 100%;
}
</style>