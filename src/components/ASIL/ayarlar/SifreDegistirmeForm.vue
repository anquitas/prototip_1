<script setup>
import { ref } from 'vue';
import IconSifre from '../../icons/IconSifre.vue';
import formContainer from '../../S/formContainer.vue';

const sifre = ref('')
const sifreTekrar = ref('')

const sifreDegistir = () => {
  if (sifre.value === sifreTekrar.value)
    console.alert(`sifre ${sifre.value} olarak değiştirildi`)
}
</script>

<template>
  <formContainer>
<label class="input input-bordered flex items-center gap-2">
  <IconSifre/>
  <input 
    type="password" 
    class="grow" 
    value="password"
    v-model="sifre"
    placeholder="sifre"
  />
</label>
<label class="input input-bordered flex items-center gap-2">
  <IconSifre/>
  <input 
    type="password" 
    class="grow" 
    value="password"
    v-model="sifreTekrar"
    placeholder="sifre tekrar"
  />
</label>
<button class="btn"  @click="sifreDegistir">değiştir</button>
</formContainer>
</template>


