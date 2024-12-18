<template>
  
    
    <div
  class="hero min-h-screen"
  style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);">
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

<script>
import SearchBar from '@/components/A/SearchBar.vue';

// import BaseSearch from '@/components/A/BaseSearch.vue';

// import ButtonNine from '@/components/buttons/ButtonNine.vue';

// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    SearchBar
  }
}
</script>
