<template>
  <dialog class="modal" open>
    <div class="modal-box">
      <h3 class="text-lg font-bold text-center">Giriş Yap!</h3>
    
      <FormContainer><GirisYapmaForm/></FormContainer>
    </div>
    <form method="dialog" class="modal-backdrop">
    <button @click="kullaniciStore.girisPanelToggle">close</button>
  </form>
</dialog>
</template>

<script setup>
import FormContainer from '../../S/formContainer.vue';
import GirisYapmaForm from './GirisYapmaForm.vue';
import { useKullaniciStore } from '@/store/kullaniciStore';

const kullaniciStore = useKullaniciStore()
</script>
