<template>
  <div class="tab-bar-item" @click="activeClick" :class="{ active: isActive }">
    <!-- 如果两个插槽,需要动态的决定显示哪个时,可以使用v-if -->
    <!-- 因为插槽会被替换,所以添加 动态class 时,需要外层嵌套一个标签,但是嵌套层次会变得复杂 -->
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>
<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1;
      }
      // activeColor() {
      //   return this.isActive ? { color: this.activeColor } : {};
      // }
    },
    methods: {
      activeClick() {
        this.$router.replace(this.path);
      }
    }
  };
</script>
<style>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }

  .tab-bar-item i {
    margin: 2px 0 0 0;
    font-style: normal;
  }
</style>
