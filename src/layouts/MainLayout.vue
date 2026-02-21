<template>
  <div class="layout">
    <header class="header">
      <h1>Enterprise App</h1>
      <nav>
        <router-link to="/users">Users</router-link>
      </nav>
    </header>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.layout {
  font-family: Arial, sans-serif;
}

.header {
  background: #2c3e50;
  padding: 15px;
  color: white;
  display: flex;
  justify-content: space-between;
}

.header a {
  color: white;
  margin-left: 15px;
  text-decoration: none;
}

.content {
  padding: 20px;
}
</style>
