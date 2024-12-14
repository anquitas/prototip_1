<template>
  <ul class="menu bg-base-200 w-56 p-0 [&_li>*]:rounded-none">
  <li v-for="item in liste" :key="item.no"><a :href="item.link">{{item.name}}</a></li>
</ul>
</template>

<script>
export default {
data () {
  return {
    liste : [
      {no: 1, name: 'item 1', link:'https://www.sikayetvar.com/iletisim'},
      {no: 2, name: 'item 2', link:'https://www.sikayetvar.com'},
      {no: 3, name: 'item 3', link:'https://www.sikayetvar.com'}
    ]
  }
}
}
</script>

<style>

</style>