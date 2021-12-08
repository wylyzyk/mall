<template>
  <div id="shop-list">
    <scroll :probe-type="3" class="scroll-content">
      <goods-list :goods="goodsList" />
    </scroll>
  </div>
</template>

<script>
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  export default {
    props: {
      goodsList: {
        type: Array,
        default: []
      }
    },
    components: {
      GoodsList,
      Scroll
    }
  };
</script>

<style scoped>
  #shop-list {
    height: 100%;
  }

  .scroll-content {
    height: calc(100% - 98px);
    overflow: hidden;
  }
</style>
