<template>
  <div class="bg-blue-100">
    <NavBar/>
    <router-view/>
  </div>
</template>


<script>





import NavBar from './components/A/NavBar.vue';

export default {
  components: {
    NavBar
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*/
</style>
