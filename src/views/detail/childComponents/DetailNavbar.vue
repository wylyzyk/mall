<template scope>
  <div class="detail-nav">
    <nav-bar>
      <div
        slot="left"
        class="iconfont"
        @click="toBack"
      >&#xe743;</div>
      <div
        slot="center"
        class="title"
      >
        <h6
          v-for="(item, index) in title"
          :key="item"
          :class="{ active: index === currentIndex }"
          @click="chooseTitle(index)"
        >{{item}}</h6>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";


export default {
  name: "DetailNavbar",
  components: {
    NavBar
  },
  data () {
    return {
      currentIndex: 0,
      title: ["商品", "参数", "评论", "推荐"]
    }
  },
  methods: {
    toBack () {
      this.$router.back();
    },
    chooseTitle (index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    }
  }
}
</script>
<style scope>
.title {
  display: flex;
}
.title h6 {
  flex: 1;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  line-height: 55px;
}
.iconfont {
  cursor: pointer;
  line-height: 55px;
}

.active {
  color: var(--color-tint);
}
</style>