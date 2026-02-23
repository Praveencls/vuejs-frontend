import { createRouter, createWebHashHistory } from 'vue-router'
import userRoutes from '../modules/user/routes'

const routes = [
  {
    path: '/',
    redirect: '/users',
  },
  ...userRoutes,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
