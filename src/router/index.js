
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Design from "../views/Design.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/design",
    name: "Design",
    component: Design,

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Cooking from '../views/Cooking.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cooking',
    name: 'Cooking',
    component: Cooking
  },
    {
    path: '/',
    name: 'Home',
    component: Home

  },

 
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search 
  }
]


   


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
