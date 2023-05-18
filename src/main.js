import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)

app.use(router);
router.isReady().then(function () {
    app.mount('#app')
})

