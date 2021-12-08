<template>
  <div id="category">
    <nav-bar class="home-nav">
      <div slot="center">分类</div>
    </nav-bar>
    <div class="cate-box">
      <cate-list :cartList="sortList" @itemClick="itemClick" />
      <div class="cate-content">
        <cart-content :cart="goodsList" />
      </div>
    </div>
  </div>
</template>
<script>
  import { getCategory, getSubcategory, getCategoryDetail } from "network/category";
  import NavBar from "components/common/navbar/NavBar";
  import CateList from "./childCom/CateList";
  import CartContent from "./childCom/CartContent";
  import ShopList from "./childCom/ShopList";

  export default {
    components: {
      NavBar,
      CateList,
      ShopList,
      CartContent
    },
    data() {
      return {
        sortList: [],
        currentIndex: 0,
        goodsList: []
      };
    },
    created() {
      /**
       * 获取分类标题
       */
      getCategory().then((res) => {
        // 标题列表数据
        this.sortList = res.data.category.list;
        console.log(this.sortList);
        this._getSubCategory(this.sortList[this.currentIndex].maitKey);
      });
    },
    methods: {
      /**
       * 获取分类商品列表
       */
      _getSubCategory(maitKey) {
        getSubcategory(maitKey).then((res) => {
          this.goodsList = res.data.list;
        });
      },
      /**
       * 当前分类项
       */
      itemClick(index) {
        console.log(index);
        this.currentIndex = index;
        console.log(this.currentIndex)
        this._getSubCategory(this.sortList[index].maitKey);
      }
    }
  };
</script>

<style scoped>
  #category {
    height: 100vh;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
  .cate-box {
    height: 100%;
    display: flex;
  }
  .cate-content {
    height: 100%;
  }
</style>
