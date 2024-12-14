<template>
    <!-- Open the modal using aID.showModal() method -->
<button class="btn" onclick="my_modal_2.showModal()">Üye Girişi</button>
<dialog id="my_modal_2" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold text-center">Kayıt Ol!</h3>
    
    <FormContainer><UyeOlmaFormu/></FormContainer>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
</template>

<script>
import UyeOlmaFormu from '../A/UyeOlmaFormu.vue';

export default {
components:{
  UyeOlmaFormu
}
}
</script>

<style>

</style>