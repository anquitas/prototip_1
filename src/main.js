import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwindOut.css'
import './assets/other.css'
import { createPinia } from 'pinia'




createApp(App).use(store).use(createPinia()).use(router).mount('#app')
