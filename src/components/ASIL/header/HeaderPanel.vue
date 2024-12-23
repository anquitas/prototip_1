<template>
  <BaseNavBar>
    <!-- MAIN LOGO -->
    <RouterLink class="bg-base-100 text-xl font-bold" :to="{name: 'home'}">ŞİKAYET YOK</RouterLink>
    <!-- SEARCH BAR -->
    <BaseSearch v-if="aramaGoster" class="flex-1"/>
    <!-- <button class="btn" @click="aramaToggle"></button> -->
    <GirisYapma2/>
    <KullaniciPaneli />
  </BaseNavBar>
</template>



<script setup>
import { ref } from 'vue';
import GirisYapma2 from '../../S/GirisYapma2.vue';
import KullaniciPaneli from '../kullaniciPanel/KullaniciPaneli.vue';
import BaseNavBar from '../base/BaseNavBar.vue';
import BaseSearch from './BaseSearch.vue';

const aramaGoster = ref(true)

// const aramaToggle = () => aramaGoster.value = !aramaGoster.value



</script>




<style>

</style>