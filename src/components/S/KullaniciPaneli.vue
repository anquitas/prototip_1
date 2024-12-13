<template>
  <div class="flex-none gap-2">
    <div class="dropdown dropdown-end">
      <KullaniciAvatar/>      
      <KullaniciMenu/>
    </div>
  </div>
</template>

<script>
import KullaniciMenu from './KullaniciMenu.vue';
import KullaniciAvatar from './KullaniciAvatar.vue';
export default {
  components: {
    KullaniciMenu, KullaniciAvatar
  }
  
}
</script>

<style>

</style>