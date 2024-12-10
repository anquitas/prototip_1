<template>
  <div class="bg-blue-100">
    <NavBarSix/>
    <router-view/>
  </div>
</template>


<script>




// import NavBarOne from '@/components/navbars/NavBarOne.vue'
// import NavBarTwo from '@/components/navbars/NavBarTwo.vue'
// import NavBarThree from '@/components/navbars/NavBarThree.vue'
// import NavBarFour from './components/navbars/NavBarFour.vue';
// import NavBarFive from './components/navbars/NavBarFive.vue';
import NavBarSix from './components/navbars/NavBarSix.vue';
// import NavBarSeven from './components/navbars/NavBarSeven.vue';
// import NavBarEight from './components/navbars/NavBarEight.vue';
// import NavBarNine from './components/navbars/NavBarNine.vue';

export default {
  components: {
    NavBarSix
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
