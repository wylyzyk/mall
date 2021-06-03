<template scoped>
  <div id="detail">
    <detail-navbar @titleClick="titleClick" class="detail-nav" ref="nav"></detail-navbar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
    <detail-param-info ref="params" :param-info="paramInfo"></detail-param-info>
    <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
    <goods-list ref="recommend" :goods="recommends"></goods-list>
    </scroll>
    <back-top
      @click.native="backTopClick"
      v-show="isShowBackTop"
    />
    <detail-bottom-bar @addCart="addToCart" />
  </div>
</template>
<script>
import DetailNavbar from './childComponents/DetailNavbar';
import DetailSwiper from './childComponents/DetailSwiper';
import DetailBaseInfo from './childComponents/DetailBaseInfo';
import DetailShopInfo from './childComponents/DetailShopInfo';
import DetailGoodsInfo from './childComponents/DetailGoodsInfo';
import DetailParamInfo from './childComponents/DetailParamInfo';
import DetailCommentInfo from './childComponents/DetailCommentInfo';
import DetailBottomBar from './childComponents/DetailBottomBar';

import Scroll from 'components/common/scroll/Scroll';
import GoodsList from 'components/content/goods/GoodsList';

import { getDetail, getRecommend, Goods, Shop, GoodsParam } from 'network/detail';
import { itemImgLoad, backTopMixin } from 'common/mixin';
import { debounce } from 'common/debounce';
import { mapActions } from "vuex";


export default {
  name: "Detail",
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
  },
  mixins: [itemImgLoad, backTopMixin],
  data () {
    return{
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      scrollTopYs: [],
      getScrollTopYs: null,
      currentIndex: 0
    }
  },
  created () {
    // console.log(this.$route);
    // 1. 保存传入的iid
    this.iid = this.$route.params.iid;

    // 2. 通过iid请求详情数据
    getDetail(this.iid).then(res => {
      const data = res.result;
      // 1. 获取顶部的图片的轮播图数据
      // console.log(res);
      this.topImages = res.result.itemInfo.topImages;

      // 2. 获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

      // 3. 创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)

      // 4. 保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 5. 获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      // 6. 获取评论信息
      if(data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });

    // 3. 请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list;
    });

    // 4. 获取详情页各个位置的offset, 使用防抖进行获取
    this.getScrollTopYs = debounce(() => {
      this.scrollTopYs = [];

      this.scrollTopYs.push(0);
      this.scrollTopYs.push(this.$refs.params.$el.offsetTop - 44);
      this.scrollTopYs.push(this.$refs.comment.$el.offsetTop - 44);
      this.scrollTopYs.push(this.$refs.recommend.$el.offsetTop - 44);
      console.log(this.scrollTopYs);
    }, 100)
  },
  destroyed() {
    this.$bus.$off("itemImageLoaded", this.itemImgListener);
    // console.log(this.itemImgListener);
  },
  mounted() {
    
    
    // console.log(this.scrollTopYs);
  },
  methods: {
    // 将Actions中的方法 分发到组件中
    // ...mapActions({
    //   add: "addToCart"
    // }),
    ...mapActions({
      add : "addToCart"
    }),
    imageLoad() {
      this.$refs.scroll.scrollRefresh();
      this.getScrollTopYs();
    },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.scrollTopYs[index], 100);

    },
    contentScroll(position) {
      // console.log(position);
      // 获取y 值
      const positionY = -position.y;

      // 与标题的 y 进行对比
      for(let i = 0; i < this.scrollTopYs.length; i++) {
        if(this.currentIndex !== i && ((i < this.scrollTopYs.length - 1 && positionY >= this.scrollTopYs[i] && positionY < this.scrollTopYs[i+1]) || (i === this.scrollTopYs.length - 1 && positionY >= this.scrollTopYs[i]))) {
          this.currentIndex = i;  
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      this.showBackTop(position);
    },
    addToCart() {
      // 1. 获取购物车中需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.shop = this.shop.name;
      product.title = this.goods.title; 
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      // console.log(product.price);
      // this.$store.commit("addToCart", product);

      // this.$store.dispatch("addToCart", product);   // 直接通过$store调用Actions中的方法


      this.add(product).then( res => {
        this.$toast.showToast(res);
      });
      // this.addToCart(product).then( res => console.log(res))
      
      
    }

  }
}
</script>
<style scoped>
  #detail {
    position: relative;
    z-index: 1;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px - 49px);
  }
</style>