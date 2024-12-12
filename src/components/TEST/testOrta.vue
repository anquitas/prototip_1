<template>
  <div class="flex items-center justify-center h-screen bg-blue-100">
    <KullaniciPaneli/>

</div>

</template>


<script>

// import KullaniciAvatar from '../S/KullaniciAvatar.vue';
// import KullaniciMenu from '../S/KullaniciMenu.vue';
import KullaniciPaneli from '../S/KullaniciPaneli.vue';



export default {
  components: {
    KullaniciPaneli,
    // KullaniciAvatar,
    // KullaniciMenu
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*/
</style>
