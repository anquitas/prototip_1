<template>
    <button class="btn" @click="kullaniciStore.girisPanelToggle">Üye Girişi</button>
    <YeniModal v-if="kullaniciStore.girisPanelAcik"/>
</template>


<script setup>
import YeniModal from '../ASIL/header/YeniModal.vue';
import { useKullaniciStore } from '@/store/kullaniciStore';
// import { ref } from 'vue';
const kullaniciStore = useKullaniciStore()
// const goster = ref(false)
// const modelToggle = () => goster.value = !goster.value
</script>



