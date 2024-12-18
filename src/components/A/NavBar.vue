<template>
  <BaseNavBar>
    <!-- <BaseButton @click="aramaTogle">ŞİKAYET YOK</BaseButton> -->
    <RouterLink class="bg-base-100 text-xl font-bold" :to="{name: 'home'}">ŞİKAYET YOK</RouterLink>
    <BaseSearch v-if="aramaGoster" class="flex-1"/>
    <GirisYapma2/>
    <KullaniciPaneli />
  </BaseNavBar>
</template>

<script>
// import BaseButton from './BaseButton.vue';
// import GirisYapma from '../S/GirisYapma.vue';
import GirisYapma2 from '../S/GirisYapma2.vue';
import KullaniciPaneli from '../S/KullaniciPaneli.vue';
import BaseNavBar from './BaseNavBar.vue';
import BaseSearch from './BaseSearch.vue';



export default {
  components: {
    BaseNavBar,
    BaseSearch,
    KullaniciPaneli,
    GirisYapma2
  },
  data () {
    return {
      aramaGoster : true
    }
  },
  methods: {
    aramaTogle () {
      this.aramaGoster = !this.aramaGoster
    }
  }
}
</script>

<style>

</style>