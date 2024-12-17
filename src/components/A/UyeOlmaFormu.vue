<template>
<div class="flex flex-col gap-4 preview items-center overflow-x-hidden bg-cover bg-top p-4 [border-width:var(--tab-border)]">
  <label class="input input-bordered flex items-center gap-2">
    <IconUser/>
    <input type="text" class="grow" placeholder="isim" v-model="isim"/>
  </label>
  <label class="input input-bordered flex items-center gap-2">
    <IconUser/>
    <input type="text" class="grow" placeholder="soyisim" v-model="soyisim"/>
  </label>
  <label class="input input-bordered flex items-center gap-2">
    <IconMail/>
    <input type="text" class="grow" placeholder="Email" v-model="email"/>
  </label>
  <label class="input input-bordered flex items-center gap-2">
    <IconSifre/>
    <input type="password" class="grow" value="password" placeholder="parola" v-model="parola" />
  </label>
  <div class="h-2 w-12 bg-green-500 text-center cursor-pointer" @click="uyeOl">üyemi</div>
</div>
</template>

<script setup>
import IconSifre from '../icons/IconSifre.vue'
import IconMail from '../icons/IconMail.vue';
import IconUser from '../icons/IconUser.vue';
import { CUyeOl } from '@/composables/uyeOl'
import { ref } from 'vue'



const isim = ref('')
const soyisim = ref('')
const email = ref('')
const parola = ref('')

const uye_nesne = () => {
  return{
    isim: isim.value,
    soyisim: soyisim.value,
    email: email.value,
    parola: parola.value
  }
}

const uyeOl = async () => {
  CUyeOl(uye_nesne())
}  

</script>

<style>

</style>