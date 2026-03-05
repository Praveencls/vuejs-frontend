<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCheckoutStore } from '../stores/checkoutStore'

const route = useRoute()
const router = useRouter()
const checkout = useCheckoutStore()

const steps = [
  { name: 'CheckoutShipping', label: 'Shipping', path: '/checkout/shipping' },
  { name: 'CheckoutPayment', label: 'Payment', path: '/checkout/payment' },
  { name: 'CheckoutReview', label: 'Review', path: '/checkout/review' },
]

const currentStepIndex = computed(() => steps.findIndex((step) => step.name === route.name))

function canNavigate(index: number) {
  if (index === 0) return true
  if (index === 1) return checkout.isShippingComplete
  if (index === 2) return checkout.isReviewReady
  return false
}

function goToStep(index: number) {
  if (canNavigate(index)) {
    router.push(steps[index].path)
  }
}
</script>

<template>
  <div class="checkout-steps">
    <div
      v-for="(step, index) in steps"
      :key="step.name"
      class="step"
      :class="{
        active: index === currentStepIndex,
        completed: index < currentStepIndex,
      }"
      @click="goToStep(index)"
    >
      <div class="circle">
        <span v-if="index < currentStepIndex">✔</span>
        <span v-else>{{ index + 1 }}</span>
      </div>
      <div class="label">{{ step.label }}</div>
    </div>
  </div>
</template>

<style scoped>
.checkout-steps {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.step {
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: 0.5;
  transition: 0.2s ease;
}

.step.active,
.step.completed {
  opacity: 1;
}

.circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  font-weight: bold;
}

.step.active .circle {
  background: #42b883;
  color: white;
}

.step.completed .circle {
  background: #35495e;
  color: white;
}

.label {
  font-size: 14px;
}
</style>
