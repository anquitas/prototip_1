<template>
<div class="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">KULLANICI BILGI!</h2>
    <p>ID: {{ kullanici?.id }}</p>
    <p>isim: {{ kullanici?.isim }}</p>
    <p>isim: {{ kullanici?.soyisim }}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
</template>

<script setup>

import { CkullaniciAl } from '@/composables/kullaniciAl';
import { onMounted, ref } from 'vue';

import { useRoute } from 'vue-router';
// import { useStore } from 'vuex';

const kullanici = ref(null)
const route = useRoute()
// const store = useStore()


const bilgiAl = async () => {
  console.log('nedeeeen')
  const bilg = await CkullaniciAl(route.params.id)
  kullanici.value = bilg
  console.log('bu bilgidir: ', bilg)
}

onMounted(
  async () => {
    await bilgiAl()
  }
)
</script>

<style>

</style>