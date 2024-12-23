<template>
 <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <KullaniciBilgi/>
        <hr class="py-2">
        <li>
          <a class="justify-between" href="/kullanici">
            Profilim
            <span class="badge">New</span>
          </a>
        </li>
        <li><a href="/ayarlar">Ayarlar</a></li>
        <li><a>Geri Bildirimlerim</a></li>
        <li><a>Çıkış Yap</a></li>
  </ul>
</template>

<script>
import KullaniciBilgi from './KullaniciBilgi.vue';

export default {
    name: 'KullaniciMenu',
    components:{
      KullaniciBilgi
    }
    
}
</script>
