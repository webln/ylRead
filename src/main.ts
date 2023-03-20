import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/main.css'

import ucHead from './components/ucHead.vue'
import ucFoot from './components/ucFoot.vue'
createApp(App).component('ucHead', ucHead).component('ucFoot', ucFoot).use(store).use(router).mount('#app')
