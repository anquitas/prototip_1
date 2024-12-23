<template>
  <SayfaGrid>
    <template #navMenu>
      <div class="flex flex-col bg-white">
        <a href="/ayarlar/guvenlik">guvenlik</a>
        <a href="/ayarlar/hesapsil">hesap silme</a>
      </div>
    </template>
    <template #content>
      <router-view></router-view>
    </template>
  </SayfaGrid>
  
  
</template>

<script>
import SayfaGrid from '@/components/A/SayfaGrid.vue';
// import YanMenu from '@/components/S/YanMenu.vue';



export default {
  components: {
    SayfaGrid
  }
}
</script>

<style>

</style>