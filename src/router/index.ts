import { createRouter, createWebHistory } from 'vue-router'
import userRoutes from '../modules/user/routes'

const routes = [
  {
    path: '/',
    redirect: '/users',
  },
  ...userRoutes,
  {
    path: '/',
    name: 'Home',
    component: () => import('@/modules/home/views/HomeView.vue'),
  },
  {
    path: '/products',
    name: 'ProductCatalog',
    component: () => import('@/modules/product/views/ProductCatalogView.vue'),
  },
  {
    path: '/category/:slug',
    name: 'Category',
    component: () => import('@/modules/category/views/CategoryView.vue'),
    props: true,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/modules/cart/views/CartView.vue'),
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('@/modules/checkout/views/CheckoutView.vue'),
  },
  {
    path: '/promotions',
    name: 'Promotions',
    component: () => import('@/modules/promotion/views/PromotionView.vue'),
  },
  {
    path: '/order/receipt/:orderId',
    name: 'OrderReceipt',
    component: () => import('@/modules/order/views/OrderReceiptView.vue'),
    props: true,
  },
  {
    path: '/order/tracking/:orderId',
    name: 'OrderTracking',
    component: () => import('@/modules/order/views/OrderTrackingView.vue'),
    props: true,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
