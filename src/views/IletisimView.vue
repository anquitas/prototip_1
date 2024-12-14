<template>
  <div class="flex flex-col justify-items items-center gap-6">
    <BaseCollapse v-for="item in veriler" :key="item.id" :veri="item"/>
     <!-- <BaseCollapse :veri="veris"/> -->
  </div>
</template>

<script>
import axios from 'axios';
import BaseCollapse from '@/components/A/BaseCollapse.vue';

export default {
  data () {
    return {
      veriler: null,
      veris: {
        id: 1, 
        soru: 'wibbly wobbly timey wimey', 
        cevap: 'Birden fazla üyelik oluşturulmasına; hem şikayetlerin takibini güçleştirmesi ihtimali hem de asılsız-karalama amaçlı şikayet yazımının önüne geçilmesi amacıyla tedbiren izin verilmemektedir.' 
      },
      datas: [
      {
        id: 1, 
        soru: 'wibbly wobbly timey wimey', 
        cevap: 'Birden fazla üyelik oluşturulmasına; hem şikayetlerin takibini güçleştirmesi ihtimali hem de asılsız-karalama amaçlı şikayet yazımının önüne geçilmesi amacıyla tedbiren izin verilmemektedir.' 
      },
      {
        id: 1, 
        soru: 'wibbly wobbly timey wimey', 
        cevap: 'Birden fazla üyelik oluşturulmasına; hem şikayetlerin takibini güçleştirmesi ihtimali hem de asılsız-karalama amaçlı şikayet yazımının önüne geçilmesi amacıyla tedbiren izin verilmemektedir.' 
      }
      ]
    }
  },
  components: {
    BaseCollapse
  },
  methods : {
    async deneme () {
      const son = await axios.get('http://localhost:4000/SSS')
      console.log(son)
      this.veriler = son.data
      console.log(this.veriler)
      return son.data
    }
  },
  async mounted() {
    this.veriler = await this.deneme()
  }
}
</script>

<style>

</style>