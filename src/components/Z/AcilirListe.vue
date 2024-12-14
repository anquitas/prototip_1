<template>
  <div class="flex flex-col gap-4">
    <AcilirListeItem v-for="item in liste" :key="item.id" :veri="item"/>
  </div>
</template>

<script>
import AcilirListeItem from './AcilirListeItem.vue';

export default {
  name: 'AcilirListe',
  props: ['liste'],
  components: {
    AcilirListeItem
  }
}
</script>

<style>

</style>