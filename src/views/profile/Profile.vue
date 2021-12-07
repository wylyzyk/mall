<template>
  <div id="profile">
    <!-- 头像 和 登录按钮 -->
    <div class="wrap">
      <span class="avator">
        <img src="~assets/img/profile/avator.png" alt="user" />
      </span>
      <span class="text" @click="onClick">
        <i>登录/注册 ></i>
      </span>
    </div>

    <!-- 功能模块 -->
    <ul class="box" @click="onClick">
      <li>
        <img src="~assets/img/profile/daifukuan.png" alt="daifukuan" />
        <p>待付款</p>
      </li>
      <li>
        <img src="~assets/img/profile/daishouhuo.png" alt="daishouhuo" />
        <p>待收货</p>
      </li>
      <li>
        <img src="~assets/img/profile/pingjia.png" alt="pingjia" />
        <p>待评价</p>
      </li>
      <li>
        <img src="~assets/img/profile/shouhou.png" alt="shouhou" />
        <p>退换/售后</p>
      </li>
      <li>
        <img src="~assets/img/profile/dingdan.png" alt="dingdan" />
        <p>全部订单</p>
      </li>
      <li>
        <img src="~assets/img/profile/kefu.png" alt="kefu" />
        <p>联系客服</p>
      </li>
    </ul>

    <!-- 三方模块 -->
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      onClick() {
        this.$toast.showToast("后续开发中~");
      }
    }
  };
</script>

<style scoped>
  #profile {
    height: 100%;
    width: 100%;
  }
  .wrap {
    display: flex;
    margin: 50px 30px 30px;
  }

  .avator {
    position: relative;
    width: 70px;
    height: 70px;
    background-color: #165dff;
    border-radius: 40px;
  }

  .avator img {
    position: absolute;
    left: 4px;
    width: 60px;
    height: 60px;
  }

  .text {
    width: 150px;
    height: 70px;
    line-height: 70px;
    font-size: 18px;
    margin-left: 20px;
  }

  .text i {
    font-style: normal;
    font-weight: bold;
  }

  .box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 95%;
    background-color: #fff;
    border-radius: 15px;
    margin: 0 auto;
  }

  ul li {
    width: 80px;
    height: 50px;
    margin: 10px 10px 20px;
  }

  ul li img {
    width: 25px;
    height: 25px;
    margin: 0 0 5px 26px;
  }

  ul li p {
    text-align: center;
    font-size: 14px;
  }

  .third p {
    color: #ccc;
    font-size: 14px;
  }
</style>
