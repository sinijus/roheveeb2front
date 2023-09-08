import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from "@/views/ShopView.vue";
import ErrorView from "@/views/ErrorView.vue";
import CartView from "@/views/CartView.vue";
import ProfileView from "@/views/ProfileView.vue";
import AdminView from "@/views/AdminView.vue";
import AboutView from "@/views/AboutView.vue";
import RegisterView from "@/views/RegisterView.vue";

const routes = [
  {
    path: '/',
    name: 'homeRoute',
    component: HomeView
  },
  {
    path: '/register',
    name: 'registerRoute',
    component: RegisterView
  },
 {
    path: '/shop',
    name: 'shopRoute',
    component: ShopView
  },
 {
    path: '/cart',
    name: 'cartRoute',
    component: CartView
  },

 {
    path: '/profile',
    name: 'profileRoute',
    component: ProfileView
  },
 {
    path: '/admin',
    name: 'adminRoute',
    component: AdminView
  },
  {
    path: '/about',
    name: 'aboutRoute',
    component: AboutView

  },
  {
    path: '/error',
    name: 'errorRoute',
    component: ErrorView

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
