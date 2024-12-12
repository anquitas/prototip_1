<template>
  <!-- Open the modal using aID.showModal() method -->
<button class="btn" onclick="my_modal_2.showModal()">Üye Girişi</button>
<dialog id="my_modal_2" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Giriş Yap!</h3>
    <GirisYapmaForm/>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
</template>

<script>
import GirisYapmaForm from './GirisYapmaForm.vue';
export default {
components:{
  GirisYapmaForm
}
}
</script>

<style>

</style>