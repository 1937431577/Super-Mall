import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category')
const ShopCart = () => import('views/shopcart/ShopCart')
const Profile = () => import('views/profile/Profile')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component:Home
  },
  {
    path: '/category',
    name: 'Category',
    component:Category
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component:ShopCart
  },
  {
    path: '/profile',
    name: 'Profile',
    component:Profile
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
