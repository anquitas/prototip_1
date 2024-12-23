import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/siteView/HomeView.vue'
import TestView from '@/views/TestView.vue'
import GridView from '@/components/A/gridView.vue'
import IletisimView from '@/views/siteView/IletisimView.vue'
import HakkimizdaView from '@/views/siteView/HakkimizdaView.vue'
import Test from '@/components/TEST/testOrta.vue'
import TestSerp from '@/components/TEST/testSerp.vue'
import KullaniciProfiliView from '@/views/profilView/KullaniciProfiliView.vue'
import KullaniciAyarlariView from '@/views/ayarlarView/KullaniciAyarlariView.vue'
import SecimliSayfaVuex from '@/components/IcerikliSayfaMantik/vuexIle/SecimliSayfaVuex.vue'
import UyeTest from '@/components/TEST/UyeTest.vue'
import SayfaBulunamadiView from '@/views/siteView/SayfaBulunamadiView.vue'
import KullaniciBilgiView from '@/views/profilView/KullaniciBilgiView.vue'
import KullaniciProfilKart2 from '@/components/A/KullaniciProfilKart2.vue'
import SifreDegistirme from '@/components/sifreDegistirme/SifreDegistirme.vue'
import TestOguz from '@/components/TEST/TestOguz.vue'
import ProfilAyarGenel from '@/views/profilView/profilAyarGenel.vue'
import ProfilAyarlarIletisim from '@/views/profilView/profilAyarlarIletisim.vue'
import GeriBildirim2 from '@/components/ASIL/geriBildirim/GeriBildirim2.vue'
import GeriBildirim1 from '@/components/S/GeriBildirim1.vue'
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
  { // MULTI
    path: '/kullanici',
    name: 'kullanici',
    component: KullaniciProfiliView,
    children: [
      {
        path: '',
        redirect: 'kullanici/genel', // Redirect to child1 by default
      },
      {
        path: 'genel',
        name: 'profilAyarGenel',
        component: ProfilAyarGenel
      },
      {
        path: 'iletisim',
        name: 'profilAyarIletisim',
        component: ProfilAyarlarIletisim
      }
    ]
  },
  { // MULTI
    path: '/ayarlar',
    name: 'ayarlar',
    component: KullaniciAyarlariView,
    children: [
      {
        path: '',
        redirect: 'ayarlar/guvenlik'
      },
      {
        path: 'guvenlik',
        component: SifreDegistirme
      }
    ]
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
  },
  {
    name: 'testoguz',
    path: '/testoguz',
    component: TestOguz
  },
  {
    path: '/testgb2',
    name: 'testgb2',
    component: GeriBildirim2
  },
  {
    path: '/testgb',
    name: 'testgb',
    component: GeriBildirim1
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
