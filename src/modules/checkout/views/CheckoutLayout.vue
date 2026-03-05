<template>
  <div class="checkout">
    <h1>Checkout</h1>

    <!-- Step Indicator -->
    <CheckoutSteps />

    <!-- Nested Step View -->
    <router-view />
  </div>
</template>

<script setup lang="ts">
import CheckoutSteps from '../components/CheckoutSteps.vue'
</script>
