<template>
  <div class="bg-blue-100">
    <HeaderPanel class=""/>
    <router-view class="h-screen"/>
    <BaseFooter/>
  </div>
</template>


<script setup>
import HeaderPanel from './components/ASIL/header/HeaderPanel.vue';
import BaseFooter from './components/ASIL/footer/BaseFooter.vue';
</script>