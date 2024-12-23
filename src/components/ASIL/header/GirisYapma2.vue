<template>
    <button class="btn" @click="kullaniciStore.girisPanelToggle">Üye Girişi</button>
    <YeniModal v-if="kullaniciStore.girisPanelAcik"/>
</template>


<script>
import YeniModal from '../S/YeniModal.vue';

import { useKullaniciStore } from '@/store/kullaniciStore';


export default {

  components: {
    YeniModal
  },
  data() {
    return {goster: false}
  },
  methods: {
    modelToggle () {this.goster = !this.goster}
  },
  setup () {
    const kullaniciStore = useKullaniciStore()
    return {kullaniciStore}
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
