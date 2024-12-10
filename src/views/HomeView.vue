<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p class="bg-red-500 text-blue-600">bu bir denemedir</p>
    <div class="flex items-center justify-center h-screen bg-gray-100">
      <ButtonNine/>
    </div>
  </div>
</template>

<script>
import ButtonNine from '@/components/buttons/ButtonNine.vue';

// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    ButtonNine
  }
}
</script>
