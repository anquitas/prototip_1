<template>
  <SayfaGrid>
    <template #navMenu>
      <YanMenu/>
    </template>
    <template #content>
      <AcilirListe :liste="veris"/>
    </template>
  </SayfaGrid>

  
  <AcilirListe/>
</template>

<script>
import SayfaGrid from '../A/SayfaGrid.vue';
import YanMenu from '../S/YanMenu.vue';
import AcilirListe from './AcilirListe.vue';

export default {
  name: 'SecimliSayfa',
  components: {
    YanMenu,
    AcilirListe,
    SayfaGrid
  },
  data () {
    return {
      secim: "veris",
      veris: [
        {
        id: 1, 
        baslik: 'wibbly wobbly timey wimey', 
        icerik: 'Birden fazla üyelik oluşturulmasına; hem şikayetlerin takibini güçleştirmesi ihtimali hem de asılsız-karalama amaçlı şikayet yazımının önüne geçilmesi amacıyla tedbiren izin verilmemektedir.' 
        },
        {
        id: 2, 
        baslik: 'wibbly wobbly timey wimey', 
        icerik: 'Birden fazla üyelik oluşturulmasına; hem şikayetlerin takibini güçleştirmesi ihtimali hem de asılsız-karalama amaçlı şikayet yazımının önüne geçilmesi amacıyla tedbiren izin verilmemektedir.' 
        }  
      ],
      tardis: [
      {
        id: 1, 
        baslik: 'gallifreyn stands', 
        icerik: 'Birden fazla üyelik oluşturulmasına; hem şikayetlerin takibini güçleştirmesi ihtimali hem de asılsız-karalama amaçlı şikayet yazımının önüne geçilmesi amacıyla tedbiren izin verilmemektedir.' 
      },
      {
        id: 2, 
        baslik: 'gallifrey stands', 
        icerik: 'Birden fazla üyelik oluşturulmasına; hem şikayetlerin takibini güçleştirmesi ihtimali hem de asılsız-karalama amaçlı şikayet yazımının önüne geçilmesi amacıyla tedbiren izin verilmemektedir.' 
      }
      ],
      datas: [
      {
        id: 1, 
        baslik: 'nou ani anquietas', 
        icerik: 'Birden fazla üyelik oluşturulmasına; hem şikayetlerin takibini güçleştirmesi ihtimali hem de asılsız-karalama amaçlı şikayet yazımının önüne geçilmesi amacıyla tedbiren izin verilmemektedir.' 
      },
      {
        id: 2, 
        baslik: 'nou ani anquietas', 
        icerik: 'Birden fazla üyelik oluşturulmasına; hem şikayetlerin takibini güçleştirmesi ihtimali hem de asılsız-karalama amaçlı şikayet yazımının önüne geçilmesi amacıyla tedbiren izin verilmemektedir.' 
      }
      ]
    }
  }
}
</script>

<style>

</style>