<template>
<div v-for="yorum in yorumlar" :key="yorum.id">
  <YorumKomp :yorum="yorum"/>
  <div class="divider"></div>
</div>
</template>

<script setup>
import YorumKomp from './YorumKomp.vue';


</script>

