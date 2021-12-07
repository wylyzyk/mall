<template scoped>
  <div id="check-button">
    <i class="iconfont" :class="{ checked: isChecked }">&#xe6a1;</i>
  </div>
</template>
<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  };
</script>
<style scoped>
  .checked {
    color: orangered;
  }

  .iconfont {
    font-size: 25px;
  }
</style>
