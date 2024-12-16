<template>
  <ul class="menu bg-base-200 w-56 p-0 [&_li>*]:rounded-none">
  <li v-for="item in baslikListe" :key="item.no"><a @click="selectCategory(item.name)">{{item.name}}</a></li>
</ul>
</template>

<script>
export default {
  name: 'YanMenuVuex',
  props: ['baslikListe'],
  methods : {
    selectCategory(category) {
      this.$store.dispatch('updateKategori', category)
    }
  }
}
</script>

<style>

</style>