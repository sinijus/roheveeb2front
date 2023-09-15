import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from "@/views/ShopView.vue";
import ErrorView from "@/views/ErrorView.vue";
import CartView from "@/views/CartView.vue";
import ProfileView from "@/views/ProfileCustomerView.vue";
import AdminView from "@/views/AdminView.vue";
import AboutView from "@/views/AboutView.vue";
import RegisterView from "@/views/RegisterCustomerView.vue";

const routes = [
    {
        path: '/',
        name: 'homeRoute',
        component: HomeView
    },
    {
        path: '/register/customer',
        name: 'registerRoute',
        component: RegisterView
    },
    {
        path: '/register/company',
        name: 'aboutRoute',
        component: AboutView

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
        path: '/profile/customer',
        name: 'profileRoute',
        component: ProfileView
    },
    {
        path: '/profile/company',
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
