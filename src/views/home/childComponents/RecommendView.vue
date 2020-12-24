<template>
  <div class="recommend">
    <ul>
      <li v-for="item in recommends" :key="item.sort">
        <a :href="item.link">
          <img :src="item.image">
          <i>{{ item.title }}</i>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style>

.recommend {
  background-color: #fff;
}
.recommend ul {
  display: flex;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 8px solid #ccc;
}
.recommend ul li img {
  width: 70px;
  height: 70px;
}
.recommend ul li i {
  display: block;
  font-style: normal;
  font-size: 13px;
  color: var(--color-text);
  margin-top: 10px;
}
.recommend ul li {
  flex: 1;
}
</style>