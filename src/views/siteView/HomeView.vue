<template>
  
    
  <div
    class="hero min-h-screen"
    :style="{backgroundImage: `url(${ImgBg})`}"
  >
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-neutral-content text-center">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">diyeceğini de içinde kalmasın</h1>
      <SearchBar/>
      <button class="btn btn-primary">ARA</button>
    </div>
  </div>
</div>

</template>


<script setup>
import SearchBar from '@/components/A/SearchBar.vue';
import ImgBg from '@/assets/bg-2.jpg'
// @ is an alias to /src
</script>


