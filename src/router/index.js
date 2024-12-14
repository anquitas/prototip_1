import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '@/views/TestView.vue'
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
