<template>
  <div id="cart-content">
    <scroll class="scroll-content">
      <ul class="content-box">
        <li class="content-item" v-for="item in cart" :key="item.title" @click="">
          <a :href="item.link">
            <img :src="item.image" alt="" />
          </a>
          <p>{{ item.title }}</p>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  export default {
    components: {
      Scroll
    },
    props: {
      cart: {
        type: Array,
        default: []
      }
    }
  };
</script>

<style scoped>
  #cart-content {
    height: 100%;
  }
  .scroll-content {
    height: calc(100% - 98px);
    overflow: hidden;
  }
  .content-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
  }
  .content-item {
    width: 45%;
    height: 100%;
    text-align: center;
    background-color: #fff;
    margin: 0 5px 5px 5px;
    border-radius: 5%;
  }
  .content-item img {
    width: 75%;
    border-radius: 5%;
    margin: 0 auto;
  }

  .content-item p {
    text-align: center;
    font-size: 14px;
  }
</style>
