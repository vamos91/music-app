import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import AllStyle from '../components/AllStyle.vue'
import Artistes from '../components/Artistes.vue'
import Albums from '../components/Albums.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/genres',
    name: 'AllStyle',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AllStyle
  },
  {
    path: '/artistes/:slug',
    name: 'Artistes', 
    props: { default: true },
    component: Artistes
  },
  {
    path: '/albums/:slug',
    name: 'Albums',
    props:{default: true},
    component: Albums
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
