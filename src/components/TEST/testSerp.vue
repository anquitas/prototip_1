<template>
  <div class="flex items-center justify-center h-screen bg-blue-100">
    <GeriBildirim1/>
  </div>
</template>


<script>
import GeriBildirim1 from '../S/GeriBildirim1.vue';









export default {
  components: {
    GeriBildirim1
  },
  data() {
    return {goster: false}
  },
  methods: {
    modelToggle () {this.goster = !this.goster}
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
