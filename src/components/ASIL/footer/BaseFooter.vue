<template>
 <footer class="footer bg-neutral text-neutral-content p-10">
  <FooterList title="services" :linkler="bilgi.servisler"/>
  <FooterList title="Company" :linkler="bilgi.company"/>
  <FooterList title="Legal" :linkler="bilgi.legal"/>
</footer> 
</template>


<script setup>
import { ref } from 'vue';
import FooterList from './FooterList.vue';
// import { FOOTER_BILGI } from '@/composables/constants';
import { FOOTER_BILGI } from '@/constants/siteData';

const bilgi = ref(FOOTER_BILGI)
</script>
