<template>
  <SayfaGrid>
    <template #navMenu>
      <div class="container flex flex-col gap-2">
        <router-link :to="{name: 'profilAyarGenel'}">genel</router-link>
        <router-link to="iletisim">iletisim</router-link>
      </div>
    </template>
    <template #content>
      <router-view/>
    </template>
  </SayfaGrid>
</template>

<script>
// import BaseCollapse from '@/components/A/BaseCollapse.vue';
import SayfaGrid from '@/components/A/SayfaGrid.vue';
// import YanMenu from '@/components/S/YanMenu.vue';


export default {
  data () {
    return {
      veris: [
        {
        id: 1, 
        soru: 'wibbly wobbly timey wimey', 
        cevap: 'Birden fazla üyelik oluşturulmasına; hem şikayetlerin takibini güçleştirmesi ihtimali hem de asılsız-karalama amaçlı şikayet yazımının önüne geçilmesi amacıyla tedbiren izin verilmemektedir.' 
        }
      ],
      isim: this.$store.getters.UyeBilgi.isim,
      soyisim: this.$store.getters.UyeBilgi.soyisim,
      eposta: this.$store.getters.UyeBilgi.eposta

    }
  },
  components: {
    SayfaGrid,
    // YanMenu,
  },

}
</script>

<style>

</style>