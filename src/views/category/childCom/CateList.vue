<template>
  <div>
    <scroll class="scroll-content" :probe-type="3">
      <ul class="cate-title">
        <li :class="{ active: index === currentIndex }" class="cate-item" v-for="(item, index) in cartList" :key="item.acm" @click="itemClick(index)">{{ item.title }}</li>
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
    data() {
      return {
        currentIndex: 0
      };
    },
    components: {
      Scroll
    },
    computed: {},
    methods: {
      itemClick(index) {
        this.currentIndex = index;
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
    position: relative;
    width: 100px;
    height: 40px;
    line-height: 45px;
    padding: 0 0 0 20px;
    text-align: left;
  }

  .active {
    background-color: #fff;
  }

  .active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 9px;
    display: inline-block;
    width: 2px;
    height: 20px;
    background-color: var(--color-tint);
  }
</style>
