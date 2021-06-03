import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import Toast from "components/common/toast";
import VueLazyLoad from "vue-lazyload";
// import PxToViewport from "postcss-px-to-viewport";

Vue.config.productionTip = false;
Vue.use(Toast);

Vue.use(VueLazyLoad);

// Vue.use(PxToViewport);

// 向Vue原型中添加一个事件总线$bus（Vue实例是可以作为事件总线的），
// 进行最内层子组件向最外层父组件传递事件
// 也可以使用Vuex进行状态监听
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
