<template scoped>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <tab-control
      class="tab-control_01"
      v-show="isFixed"
      :titles="['热门', '流行', '精选']"
      @selectItem="selectGoodsType"
      ref="tabControl_02"
    />

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @pullUpLoad="downloadData"
      @scroll="backTopHidden"
    >
      <home-swiper
        :banners="banners"
        @swiperImgLoaded="swiperLoaded"
      />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        class="tab-control
        "
        :titles="['热门', '流行', '精选']"
        @selectItem="selectGoodsType"
        @swiperImgLoaded="swiperLoaded"
        ref="tabControl_01"
      />
      <goods-list :goods="goods[goodsType].list" />
    </scroll>
    <back-top
      @click.native="backTopClick"
      v-show="isShowBackTop"
    />
  </div>
</template>
<script>
// 子组件的导入
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComponents/HomeSwiper"
import RecommendView from "./childComponents/RecommendView"
import FeatureView from "./childComponents/FeatureView"

// 公共组件导入
import TabControl from "components/content/tabcontrol/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import Scroll from "components/common/scroll/Scroll"
import BackTop from 'components/common/backTop/BackTop'

// 方法
import { getHomeMultidata, getHomeGoods } from "network/home"
import { itemImgLoad } from 'common/mixin';
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  mixins: [itemImgLoad],
  data () {
    return {
      banners: [],
      recommends: [],
      goodsType: "pop",
      isShowBackTop: false,
      tabOffsetHeight: 0,
      isFixed: false,
      scrollY: 0,
      goods: {
        "pop": {
          page: 0,
          list: []
        },
        "new": {
          page: 0,
          list: []
        },
        "sell": {
          page: 0,
          list: []
        }
      }
    }
  },
  created () {
    // 1. 请求多个数据
    this.getHomeMultidata();

    // 2. 请求首页商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted () {

    // // 调用防抖函数的返回值
    // const refresh = this.debounce(this.$refs.scroll.scrollRefresh, 200);
    // // 3. 在一开始监听图片加载
    // this.$bus.$on("itemImageLoaded", () => {
    //   refresh();
    //   // this.$refs.scroll.scrollRefresh();
    // });
  },
  activated () {
    // console.log(this.scrollY);
    this.$refs.scroll.scrollTo(0, this.scrollY, 0);
    // this.$refs.scroll.scrollRefresh();
  },
  deactivated () {
    this.scrollY = this.$refs.scroll.getScrollY();
    // console.log(this.scrollY);

    this.$bus.$off("itemImageLoaded", this.itemImgListener);
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    selectGoodsType (index) {
      switch (index) {
        case 0:
          this.goodsType = "pop";
          break;
        case 1:
          this.goodsType = "new";
          break;
        case 2:
          this.goodsType = "sell";
          break;
      }

      this.$refs.tabControl_02.currentIndex = index;
      this.$refs.tabControl_01.currentIndex = index;
    },
    backTopClick () {
      // console.log("111");
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    backTopHidden (position) {
      // console.log(position);
      this.isShowBackTop = Math.abs(position.y) > 1000;
      this.isFixed = Math.abs(position.y) > this.tabOffsetHeight;
      // console.log(this.isFixed);
    },
    // tabCtrl 的状态
    swiperLoaded () {
      this.tabOffsetHeight = this.$refs.tabControl_01.$el.offsetTop;
    },
    downloadData () {
      setTimeout(() => {
        this.getHomeGoods(this.goodsType);
        // this.$refs.scroll && this.$refs.scroll.refresh();
      }, 2000);
    },
    // 防抖函数， 防止客户端多次向服务器进行数据提交
    // debounce (callback, delay) {
    //   let timer = null;

    //   return function (...args) {
    //     if (timer) clearTimeout(timer);
    //     timer = setTimeout(() => {
    //       callback.apply(this, args);
    //     }, delay);
    //   }
    // },

    /**
     * 网络请求相关方法
     */
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        // 在一轮图片资源加载完成后调用scrolfinish
        this.$refs.scroll.scrollFinish();
      })
    }
  }
}
</script>
<style scoped>
/* #home {
  height: 100vh;
  position: relative;
} */
.home-nav {
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
  background-color: var(--color-tint);
  color: #fff;
}

/* .tab-control { */
/* 使用sticky在移动端，和部分浏览器中不起作用 */
/* position: sticky; */
/* 距离顶部44px之后固定不再移动 */
/* top: 44px; */
/* } */
.tab-control_01 {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 9;
}

/* .content {
  overflow: hidden;
  height: calc(100% - 93px);
} */
/* 使用absolute脱离标准流，并覆盖顶部导航栏 */
.content {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
</style>