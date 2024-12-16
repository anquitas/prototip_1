<template>
  <div>
    <p>{{ UyeBilgi.isim }} {{ UyeBilgi.soyisim }}</p>
    <p>{{ UyeBilgi.eposta }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

// const isim = ref('')
// const soyisim = ref('')
// const eposta = ref('')

// isim.value = 'daniel'
// soyisim.value = 'jackson'
// eposta.value = 'daniel@sgc.com'

const store = useStore()
const UyeBilgi = ref(store.getters.UyeBilgi)

</script>

<style>

</style>