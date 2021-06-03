<template>
  <div class="goods-item" @click="toList">
    <img
      v-lazy="showImage"
      @load="imgLoaded"
    >
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">${{ goodsItem.price }}</span>
      <span class="cfav iconfont">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
  methods: {
    imgLoaded () {
      // 通过事件总线将图片加载完成事件传递出去
      this.$bus.$emit("itemImageLoaded");
    },
    toList () {
      // console.log(this.goodsItem);
      this.$router.push("/detail/" + this.goodsItem.iid);
    }
  }
}
</script>
<style>
.goods-item {
  width: 100%;
}
.goods-item img {
  width: 100%;
  border-radius: 2%;
}
.goods-info {
  background-color: var(--color-background);
  padding: 5px 5px 0;
  font-size: 14px;
  /* text-align: center; */
}
.goods-info span {
  display: inline-block;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin: 0 20px 0 20px;
}

.goods-info .cfav {
  font-size: 14px;
  color: var(--color-text);
}
.goods-info .cfav::before {
  content: "\e8ab";
  font-size: 12px;
}
</style>