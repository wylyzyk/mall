<template scoped>
  <div
    class="wrapper"
    ref="wrapper"
  >
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    // 1. 创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      observeDOM: true
    })

    // 2. 监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        // console.log(position);
        this.$emit("scroll", position);
      });
    }

    // 3. 监听上拉请求数据
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        console.log("下拉触发");
        this.$emit("pullUpLoad")
      })
    }
    // this.scroll.scrollTo(0,0);
  },
  methods: {
    scrollTo (x, y, time = 500) {
      // 在进行调用之前防止this。scroll对象为进行初始化
      this.scroll && this.scroll.scrollTo(x, y, time);
      // console.log("222");
    },
    scrollFinish () {
      this.scroll && this.scroll.finishPullUp();
    },
    scrollRefresh () {
      // console.log("refresh");
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
}
</script>
<style scoped>
</style>