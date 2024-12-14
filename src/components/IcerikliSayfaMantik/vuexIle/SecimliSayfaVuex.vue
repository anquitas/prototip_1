<template>
  <SayfaGrid>
    <template #navMenu>
      <YanMenuVuex :baslikListe="categories"/>
    </template>
    <template #content>
      <AcilirListe :liste="veris[currentCategory]"/>
    </template>
  </SayfaGrid>
  <AcilirListe/>
</template>

<script>
import AcilirListe from '@/components/Z/AcilirListe.vue';

import YanMenuVuex from '../emitIle/YanMenuVuex.vue';
import SayfaGrid from '@/components/A/SayfaGrid.vue';


const {denemeVeri} = require('./denemeVeriVuex')
// seçimde bölme yada filtreleme yoluna gidilebilir
export default {
  name: 'SecimliSayfa',
  components: {
    YanMenuVuex,
    AcilirListe,
    SayfaGrid
  },
  data () {
    return {
      secim: "veris",
      categories: [{no: 1, name: 'veris'}, {no: 2, name: 'tardis'}, {no: 3, name: 'datas'}],
      veris: denemeVeri
    }
  },
  computed : {
    currentCategory () {
      console.log(this.$store.getters.seciliKategori)
      return this.$store.getters.seciliKategori
    }
  }
}
</script>

<style>

</style>