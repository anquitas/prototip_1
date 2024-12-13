<template>
  <BaseNavBar>
    <!-- <BaseButton @click="aramaTogle">ŞİKAYET YOK</BaseButton> -->
    <RouterLink class="bg-base-100 text-xl font-bold" :to="{name: 'home'}">ŞİKAYET YOK</RouterLink>
    <BaseSearch v-if="aramaGoster" class="flex-1"/>
    <KullaniciPaneli />
  </BaseNavBar>
</template>

<script>
// import BaseButton from './BaseButton.vue';
import KullaniciPaneli from '../S/KullaniciPaneli.vue';
import BaseNavBar from './BaseNavBar.vue';
import BaseSearch from './BaseSearch.vue';



export default {
  components: {
    BaseNavBar,
    // BaseButton,
    BaseSearch,
    KullaniciPaneli
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