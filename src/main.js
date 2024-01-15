import { createApp } from 'vue'
import { router } from './router.js';
import './styles/general.scss'
import App from './App.vue'

createApp(App).use(router).mount('#app')