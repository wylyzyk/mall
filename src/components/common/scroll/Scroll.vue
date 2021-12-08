<template scoped>
  <div class="wrapper" ref="wrapper">
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
    data() {
      return {
        scroll: null
      };
    },
    mounted() {
      // 1. 创建scroll对象

      // 1. probeType 为 0，在任何时候都不派发 scroll 事件，
      // 2. probeType 为 1，仅仅当手指按在滚动区域上，每隔 momentumLimitTime 毫秒派发一次 scroll 事件，
      // 3. probeType 为 2，仅仅当手指按在滚动区域上，一直派发 scroll 事件，
      // 4. probeType 为 3，任何时候都派发 scroll 事件，包括调用 scrollTo 或者触发 momentum 滚动动画
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true, // 支持原生点击事件
        probeType: this.probeType, // 监听滚动
        pullUpLoad: this.pullUpLoad, // 上拉刷新
        observeDOM: true
      });

      // 2. 监听滚动的位置
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on("scroll", (position) => {
          // console.log(position);
          this.$emit("scroll", position);
        });
      }

      // 3. 监听上拉请求数据
      if (this.pullUpLoad) {
        this.scroll.on("pullingUp", () => {
          console.log("下拉触发");
          this.$emit("pullUpLoad");
        });
      }
      // this.scroll.scrollTo(0,0);
    },
    methods: {
      scrollTo(x, y, time = 500) {
        // 在进行调用之前防止this。scroll对象为进行初始化
        this.scroll && this.scroll.scrollTo(x, y, time);
        // console.log("222");
      },
      scrollFinish() {
        this.scroll && this.scroll.finishPullUp();
      },
      scrollRefresh() {
        // console.log("refresh");
        this.scroll && this.scroll.refresh();
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0;
      }
    }
  };
</script>
<style scoped></style>
