import { defineStore } from 'pinia'

export const useCheckoutStore = defineStore('checkout', {
  state: () => ({
    shipping: null as null | {
      name: string
      address: string
      city: string
    },
    payment: null as null | {
      cardNumber: string
      expiry: string
    },
  }),

  getters: {
    isShippingComplete: (state) => !!state.shipping,
    isPaymentComplete: (state) => !!state.payment,
    isReviewReady(): boolean {
      return this.isShippingComplete && this.isPaymentComplete
    },
  },

  actions: {
    setShipping(data: any) {
      this.shipping = data
    },
    setPayment(data: any) {
      this.payment = data
    },
    reset() {
      this.shipping = null
      this.payment = null
    },
  },
})
