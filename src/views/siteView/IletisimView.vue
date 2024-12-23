<template>
<div class="grid grid-cols-[1fr_4fr] grid-rows-[auto_auto] gap-4 p-4">
  <!-- Nav Menu: First Row, First Column -->
  <div class="p-4">
    <YanMenu/>
  </div>

  <!-- Content: First Row, Second Column -->
  <div class="p-4">
    <div class="flex flex-col gap-4">
      <BaseCollapse v-for="item in veriler" :key="item.id" :veri="item"/>
    </div>
  </div>

  <!-- Explanation: Second Row, Spanning Both Columns -->
  <div class=" p-4 col-span-2">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


  </div>
</div>
  
    
    
     
  
</template>

<script>
import axios from 'axios';
import BaseCollapse from '@/components/A/BaseCollapse.vue';
import YanMenu from '@/components/S/YanMenu.vue';

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
    BaseCollapse,
    YanMenu
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