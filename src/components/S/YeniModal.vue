<template>
  <dialog class="modal" open>
    <div class="modal-box">
      <h3 class="text-lg font-bold text-center">Giriş Yap!</h3>
    
      <FormContainer><GirisYapmaForm/></FormContainer>
    </div>
    <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
</template>

<script>
import FormContainer from './formContainer.vue';
import GirisYapmaForm from './GirisYapmaForm.vue';

export default {
  name: 'YeniModal',
  components: {
    FormContainer,
    GirisYapmaForm
  }
}
</script>

<style>

</style>