import type { RouteRecordRaw } from 'vue-router'

export const checkoutRoutes: RouteRecordRaw[] = [
  {
    path: '/checkout',
    component: () => import('./views/CheckoutLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        redirect: '/checkout/shipping',
      },
      {
        path: 'shipping',
        name: 'CheckoutShipping',
        component: () => import('./views/ShippingStep.vue'),
      },
      {
        path: 'payment',
        name: 'CheckoutPayment',
        component: () => import('./views/PaymentStep.vue'),
      },
      {
        path: 'review',
        name: 'CheckoutReview',
        component: () => import('./views/ReviewStep.vue'),
      },
      {
        path: 'success',
        name: 'CheckoutSuccess',
        component: () => import('./views/SuccessStep.vue'),
      },
    ],
  },
]
