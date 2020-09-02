import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Introduce from '@/components/Introduce.vue'
import TemplateSyntax from '@/components/TemplateSyntax.vue'
import Compute from '@/components/Compute.vue'
import Style from '@/components/Style.vue'
import ConditionRender from '@/components/ConditionRender.vue'
import ListRender from '@/components/ListRender.vue'
import EventHandle from '@/components/EventHandle.vue'
import FormInput from '@/components/FormInput.vue'
import ComponentBasic from '@/components/ComponentBasic.vue'
import DeepComponent from '@/components/DeepComponent.vue'
import Prop from '@/components/Prop.vue'
import CustomEvent from '@/components/CustomEvent.vue'
import Slot from '@/components/Slot.vue'

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
  },
  {
    path: '/condition-render',
    name: 'ConditionRender',
    component: ConditionRender
  },
  {
    path: '/list-render',
    name: 'ListRender',
    component: ListRender
  },
  {
    path: '/event-handle',
    name: 'EventHandle',
    component: EventHandle
  },
  {
    path: '/form-input',
    name: 'FormInput',
    component: FormInput
  },
  {
    path: '/component-basic',
    name: 'ComponentBasic',
    component: ComponentBasic
  },
  {
    path: '/deep-component',
    name: 'DeepComponent',
    component: DeepComponent
  },
  {
    path: '/prop',
    name: 'Prop',
    component: Prop
  },
  {
    path: '/custom-event',
    name: 'CustomEvent',
    component: CustomEvent
  },
  {
    path: '/slot',
    name: 'Slot',
    component: Slot
  }
]

const router = new VueRouter({
  routes
})

export default router
