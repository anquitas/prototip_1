<template>
    <button class="btn" @click="modelToggle">Üye Girişi</button>
    <YeniModal v-if="goster"/>
</template>


<script>
import YeniModal from '../S/YeniModal.vue';







export default {
  components: {
    YeniModal
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
