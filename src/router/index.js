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
import ErrorComponent from '@/components/ErrorComponent.vue'
import DealBoundary from '@/components/DealBoundary.vue'
import TransitionList from '@/components/TransitionList.vue'
import TransitionState from '@/components/TransitionState.vue'
import Mixin from '@/components/Mixin.vue'
import CustomDirective from '@/components/CustomDirective.vue'

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
  },
  {
    path: '/async-component',
    name: 'AsyncComponent',
    component: () => {
      return {
        component: import('@/components/AsyncComponent.vue'),
        error: ErrorComponent,
        delay: 200,
        timeout: 100
      }
    }
  },
  {
    path: '/deal-boundary',
    name: 'DealBoundary',
    component: DealBoundary
  },
  {
    path: '/transition-list',
    name: 'TransitionList',
    component: TransitionList
  },
  {
    path: '/transition-state',
    name: 'TransitionState',
    component: TransitionState
  },
  {
    path: '/mixin',
    name: 'Mixin',
    component: Mixin
  },
  {
    path: '/custom-directive',
    name: 'CustomDirective',
    component: CustomDirective
  }
]

const router = new VueRouter({
  routes
})

export default router
