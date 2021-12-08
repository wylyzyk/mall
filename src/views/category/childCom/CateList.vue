<template>
  <div>
    <scroll class="scroll-content" :probe-type="3">
      <ul class="cate-title">
        <li :class="{ active: isActive }" class="cate-item" v-for="(item, index) in cartList" :key="item.title" @click="itemClick(index)">{{ item.title }}</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  export default {
    props: {
      cartList: {
        type: Array,
        default: []
      }
    },
    components: {
      Scroll
    },
    methods: {
      itemClick(index) {
        this.$emit("itemClick", index);
      }
    }
  };
</script>

<style scoped>
  .scroll-content {
    height: calc(100% - 98px);
    overflow: hidden;
  }

  .cate-title {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .cate-item {
    width: 100px;
    height: 40px;
    line-height: 45px;
    padding: 0 0 0 20px;
    text-align: left;
  }
</style>
