<template>
  <nav>
    <h6 class="footer-title">{{ title }}</h6>
    <a 
      class="link link-hover" 
      v-for="connection in linkler" 
      :key="connection.baslik"
      :href="connection.link"
    > {{connection.baslik }} </a>
  </nav>  
</template>

<script>
export default {
  name: 'FooterList',
  props: ['title', 'linkler']
}
</script>

