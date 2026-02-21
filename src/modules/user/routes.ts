import type { RouteRecordRaw } from 'vue-router'
import UserView from './views/UserView.vue'

const userRoutes: RouteRecordRaw[] = [
  {
    path: '/users',
    name: 'Users',
    component: UserView,
  },
]

export default userRoutes
