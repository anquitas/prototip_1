<template>
<details class="collapse bg-base-200">
  <summary class="collapse-title text-xl font-medium">{{veri.soru}}</summary>
  <div class="collapse-content">
    <p>{{veri.cevap}}</p>
  </div>
</details>
</template>

<script>
export default {
  name: 'BaseCollapse',
  props:['veri'],
  data () {
    return {
      veris: {
        id: 1, 
        soru: 'wibbly wobbly timey wimey', 
        cevap: 'Birden fazla üyelik oluşturulmasına; hem şikayetlerin takibini güçleştirmesi ihtimali hem de asılsız-karalama amaçlı şikayet yazımının önüne geçilmesi amacıyla tedbiren izin verilmemektedir.' }
    }
  }
}
</script>

<style>

</style>