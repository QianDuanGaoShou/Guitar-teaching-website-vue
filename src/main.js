import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())   // 👈 启用 Pinia
app.use(router)

app.mount('#app')
