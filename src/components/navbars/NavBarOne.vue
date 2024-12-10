<!-- Navbar with title only -->

<template>
  <div class="navbar bg-base-100">
  <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
</template>

<script>
export default {
  name: 'NavBarOne'
}
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} 
</style>