<template>
  <div>
    <h2>User Management</h2>

    <UserForm @userCreated="refreshList" />

    <UserList ref="listRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserForm from '../components/UserForm.vue'
import UserList from '../components/UserList.vue'

const listRef = ref<InstanceType<typeof UserList> | null>(null)

const refreshList = () => {
  listRef.value?.fetchUsers()
}
</script>
