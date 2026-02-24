<template>
  <div class="card">
    <h3>User List</h3>

    <table border="1" width="100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
        </tr>
      </tbody>
    </table>

    <p v-if="users.length === 0">No users found</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getUsers, type UserResponse } from '@/modules/user/services/userService'

const users = ref<UserResponse[]>([])

const fetchUsers = async () => {
  try {
    const response = await getUsers()
    users.value = response.data.data
  } catch (error) {
    console.error('Failed to fetch users', error)
  }
}

onMounted(fetchUsers)

defineExpose({
  fetchUsers,
})
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 20px;
}
</style>
