<template scoped>
  <div id="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>
<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "this is a toast",
      isShow: false
    }
  },
  methods: {
    showToast(msg, duration = 2000) {
      this.message = msg;
      this.isShow = true;

      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    }
  }
}
</script>
<style scoped>
  #toast {
    position: fixed;
    left: 50%;
    top: 50%;

    z-index: 2;

    padding: 10px 15px;
    border-radius: 12px;
    transform: translate(-50%, -50%);

    font-size: 12px;
    color: #fff;
    background-color: rgba(0, 0, 0, .65);
  }
</style>