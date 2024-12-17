import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '@/views/TestView.vue'
import GridView from '@/components/A/gridView.vue'
import IletisimView from '@/views/IletisimView.vue'
import HakkimizdaView from '@/views/HakkimizdaView.vue'
import Test from '@/components/TEST/testOrta.vue'
import TestSerp from '@/components/TEST/testSerp.vue'
import KullaniciProfiliView from '@/views/KullaniciProfiliView.vue'
import KullaniciAyarlariView from '@/views/KullaniciAyarlariView.vue'
import SecimliSayfaVuex from '@/components/IcerikliSayfaMantik/vuexIle/SecimliSayfaVuex.vue'
import UyeTest from '@/components/TEST/UyeTest.vue'
import SayfaBulunamadiView from '@/views/SayfaBulunamadiView.vue'
import KullaniciBilgiView from '@/views/KullaniciBilgiView.vue'
import KullaniciProfilKart2 from '@/components/A/KullaniciProfilKart2.vue'
// import KullaniciProfilKart2 from '@/components/A/KullaniciProfilKart2.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/gridview',
    name: 'gridView',
    component: GridView
  },
  {
    path: '/iletisim',
    name: 'iletisim',
    component: IletisimView
  },
  {
    path: '/hakkimizda',
    name: 'hakkimizda',
    component: HakkimizdaView
  },
  {
    path:'/testorta',
    name:'testOrta',
    component:Test
  },
  {
    path:'/testSerp',
    name:'testSerp',
    component:TestSerp
  },
  {
    path: '/kullanici',
    name: 'kullanici',
    component: KullaniciProfiliView
  },
  {
    path: '/ayarlar',
    name: 'ayarlar',
    component: KullaniciAyarlariView
  },
  {
    path: '/secvuex',
    name: 'secvuex',
    component: SecimliSayfaVuex
  },
  {
    path: '/uyetest',
    name: 'uyetest',
    component: UyeTest
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'SayfaBulunamadiView',
    component: SayfaBulunamadiView
  },
  {
    path: '/kullanici/:id',
    name: 'KullaniciBilgiView',
    component: KullaniciBilgiView
  },
  {
    path: '/kullanicid/:id',
    name: 'kullanicibilgid',
    component: KullaniciProfilKart2
  },
  {
    path: '/testgrid',
    name: 'testgrid',
    component: GridView
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
