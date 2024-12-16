import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '@/views/TestView.vue'
import GridView from '@/components/A/gridView.vue'
import IletisimView from '@/views/IletisimView.vue'
import HakkimizdaView from '@/views/HakkimizdaView.vue'
import Test from '@/components/TEST/testOrta.vue'
import TestSerp from '@/components/TEST/testSerp.vue'

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
    path: 'hakkimizda',
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
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
