import { appendToMemberExpression } from '@babel/types'
import { render } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'inicio',
    component: HomeView
  },
  {
    path: '/contactenos',
    name: 'contactanos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: () => import(/* webpackChunkName: "about" */ '../views/ServiciosMark.vue')

  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: () => import(/* webpackChunkName: "about" */ '../views/NosotrosMark.vue')

  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductosMark.vue')

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
