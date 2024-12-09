<template>
  <NavBarOne/>
  <router-view/>
</template>


<script>
import NavBarOne from '@/components/navbars/NavBarOne.vue'

export default {
  components: {
    NavBarOne
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
