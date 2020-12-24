import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由挂载
const Cart = () => import("views/cart/Cart");
const Category = () => import("views/category/Category");
const Home = () => import("views/home/Home");
const Profile = () => import("views/profile/Profile");
const Detail = () => import("views/detail/Detail")


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    // 在url后拼接新的params
    path: "/detail/:iid",
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
