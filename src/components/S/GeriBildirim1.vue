<template>
  <div class="bg-white max-w-[75%] p-4">
    <h2 class="font-extrabold text-4xl">{{ veri.baslik }}</h2>
    <!-- header -->
    <div class="py-2 "><p class="leading-relaxed text-bold">{{ veri.gonderen }} </p><p class="font-light">{{ veri.tarih }}</p></div>

    <!-- content -->
    <div>{{ veri.icerik }}</div>

    <!-- footer -->
     <div>{{ veri.destek }} <i class="fa-regular fa-thumbs-up"></i></div>
     <div class="divider"></div>
    <!-- comment-->
     <div>
      <div v-for="yorum in veri.yorumlar" :key="yorum.id"> 
        <p>{{ yorum.gonderen }}</p>
        <p>{{ yorum.yorum }}</p>
        <div class="divider"></div>
      </div>
    </div>

  </div>
  
</template>

<script>
export default {
   data () {
    return {
      veri: {
        baslik:"Arby's şikayet",
        gonderen:"phoebe buffey",
        tarih:"11/12/2001",
        icerik:"Bu 0850 9010828 numara, engellediğim halde benim adıma olup, eşimin kullandığı telefonu aralıksız her gün en az 5-6 defa arıyor.  eşimin kullandığı telefonu aralıksız her gün en az 5-6 defa arıyor. eşimin kullandığı telefonu aralıksız her gün en az 5-6 defa arıyor",
        destek:10,
        yorumlar: [
          {id: 1, gonderen: "ross", yorum: "we were on a break"},
          {id: 2, gonderen: "joey", yorum: "joey doesnt share food"}
        ]
      }
    }
   }
}
</script>

<style>

</style>