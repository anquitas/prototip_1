<template>
  <div class="bg-blue-100">
    <NavBar/>
    <router-view/>
    <BaseFooter/>
  </div>
</template>


<script>





import NavBar from './components/A/NavBar.vue';
import BaseFooter from './components/N/BaseFooter.vue';

export default {
  components: {
    NavBar,
    BaseFooter
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
