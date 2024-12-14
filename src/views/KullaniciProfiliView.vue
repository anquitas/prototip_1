<template>
  <SayfaGrid>
    <template #navMenu>
      <YanMenu/>
    </template>
    <template #content>
      <BaseCollapse v-for="item in veris" :key="item.id" :veri="item"/>
    </template>
    <template #extra>
      <p>dklfnmsdklfnsdklfsnmdklnmsfcdkls</p>
    </template>
  </SayfaGrid>
</template>

<script>
import BaseCollapse from '@/components/A/BaseCollapse.vue';
import SayfaGrid from '@/components/A/SayfaGrid.vue';
import YanMenu from '@/components/S/YanMenu.vue';


export default {
  data () {
    return {
      veris: [
        {
        id: 1, 
        soru: 'wibbly wobbly timey wimey', 
        cevap: 'Birden fazla üyelik oluşturulmasına; hem şikayetlerin takibini güçleştirmesi ihtimali hem de asılsız-karalama amaçlı şikayet yazımının önüne geçilmesi amacıyla tedbiren izin verilmemektedir.' 
        }
      ]
    }
  },
  components: {
    SayfaGrid,
    YanMenu,
    BaseCollapse
  }
}
</script>

<style>

</style>