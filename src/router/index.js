import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import cookieView from '../views/cookieView.vue'
import toolView from '../views/toolView.vue'
import coffeeView from '../views/coffeeView.vue'
import selectionView from '../views/selectionView.vue'
import giftView from '../views/giftView.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/cookie',
    name: 'cookie',
    component: cookieView
  },
  {
    path: '/tool',
    name: 'tool',
    component: toolView
  },
  {
    path: '/coffee',
    name: 'coffee',
    component: coffeeView
  },
  {
    path: '/selection',
    name: 'selection',
    component: selectionView
  },
  {
    path: '/gift',
    name: 'gift',
    component: giftView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
