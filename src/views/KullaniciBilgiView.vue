<template>
  <div v-if="kullanici">
    <h1>kullanici bilgi:</h1>
    <p>ID: {{ kullanici.id }}</p>
    <p>isim: {{ kullanici.isim }}</p>
  </div>
</template>

<script>
import { CkullaniciAl } from '@/composables/kullaniciAl';

export default {
  data() {
    return {
      kullanici: null
    }
  },
  computed: {
    user () {
      return this.$route.params.id
    }
  },
  methods: {
    async bilgiAl() {
      return await CkullaniciAl(this.$route.params.id)
    }
  },
  async mounted () {
    this.kullanici = await this.bilgiAl()
  }
}
</script>

<style>

</style>