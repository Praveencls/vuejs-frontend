<template>
  <div class="card">
    <h3>Create User</h3>

    <form @submit.prevent="submitForm">
      <div>
        <label>First Name</label>
        <input v-model="form.firstName" type="text" />
      </div>

      <div>
        <label>Last Name</label>
        <input v-model="form.lastName" type="text" />
      </div>

      <button type="submit">Save</button>
    </form>

    <p v-if="message" :class="{ error: !success }">
      {{ message }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { AxiosError } from 'axios'
import { reactive, ref } from 'vue'
import { createUser, type UserRequest } from '@/api/userService'

const emit = defineEmits<{
  (e: 'userCreated'): void
}>()

const form = reactive<UserRequest>({
  firstName: '',
  lastName: '',
})

const message = ref<string>('')
const success = ref<boolean>(true)

const submitForm = async () => {
  try {
    const response = await createUser(form)

    if (response.data.success) {
      message.value = response.data.message
      success.value = true

      form.firstName = ''
      form.lastName = ''

      emit('userCreated')
    }
  } catch (error: unknown) {
    success.value = false

    const axiosError = error as AxiosError<{ message: string }>

    message.value = axiosError.response?.data?.message ?? 'Something went wrong'
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}

.error {
  color: red;
}
</style>
