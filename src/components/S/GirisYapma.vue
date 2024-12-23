<template>
  <!-- Open the modal using aID.showModal() method -->
<button class="btn" onclick="my_modal_2.showModal()">Üye Girişi</button>
<dialog id="my_modal_2" class="modal">
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
import GirisYapmaForm from '../ASIL/header/GirisYapmaForm.vue';
export default {
components:{
  GirisYapmaForm,
  FormContainer
}
}
</script>

<style>

</style>