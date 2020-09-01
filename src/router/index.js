import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Introduce from '@/components/Introduce.vue'
import TemplateSyntax from '@/components/TemplateSyntax.vue'
import Compute from '@/components/Compute.vue'
import Style from '@/components/Style.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/introduce',
    name: 'Introduce',
    component: Introduce
  },
  {
    path: '/template-syntax',
    name: 'TemplateSyntax',
    component: TemplateSyntax
  },
  {
    path: '/compute',
    name: 'Compute',
    component: Compute
  },
  {
    path: '/style',
    name: 'Style',
    component: Style
  }
]

const router = new VueRouter({
  routes
})

export default router
