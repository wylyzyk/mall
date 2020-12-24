<template>
  <div class="goods-list">
    <ul>
      <li
        v-for="item in goods"
        :key="item.iid"
      >
        <goods-list-item :goodsItem="item" />
      </li>
    </ul>
  </div>
</template>
<script>
import GoodsListItem from './GoodsListItem';

export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>
<style>
.goods-list ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}
.goods-list ul li {
  width: 50%;
  padding: 5px;
}
</style>