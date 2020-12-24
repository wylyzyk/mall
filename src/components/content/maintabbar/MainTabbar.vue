<template lang="">
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <i slot="item-icon" class="iconfont">&#xe8b9;</i>
        <i slot="item-text">首页</i>
      </tab-bar-item> 
      <tab-bar-item path="/category">
        <i slot="item-icon" class="iconfont">&#xe8b6;</i>
        <i slot="item-text">分类</i>
      </tab-bar-item> 
      <tab-bar-item path="/cart">
        <i slot="item-icon" class="iconfont">&#xe8ae;</i>
        <i slot="item-text">购物车</i>
      </tab-bar-item> 
      <tab-bar-item path="/profile">
        <i slot="item-icon" class="iconfont">&#xe8bc;</i>
        <i slot="item-text">我的</i>
      </tab-bar-item> 
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem"


export default {
  name: "MainTabbar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style lang="">

</style>