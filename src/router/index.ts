import { createRouter, createWebHistory } from 'vue-router'
import userRoutes from '../modules/user/routes'

const routes = [
  {
    path: '/',
    redirect: '/users',
  },
  ...userRoutes,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
