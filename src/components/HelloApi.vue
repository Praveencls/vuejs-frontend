<script setup lang="ts">
import { ref, onMounted } from "vue";
import api from "../services/api";

const message = ref("");

onMounted(async () => {
  try {
    const res = await api.get("/hello"); // Spring Boot endpoint
    message.value = res.data;
  } catch (err) {
    console.error(err);
    message.value = "API call failed";
  }
});
</script>
<template>
  <div>
    <h2>Spring Boot API says:</h2>
    <p>{{ message }}</p>
  </div>
</template>