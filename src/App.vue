<template>
  <div id="app">
    <!-- 不让home销毁 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tabbar />
  </div>
</template>

<script>
import MainTabbar from "components/content/maintabbar/MainTabbar";

export default {
  name: "App",
  components: {
    MainTabbar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
