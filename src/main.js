import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import 'bootstrap/dist/css/bootstrap.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App);
AOS.init();
app.use(router);

router.isReady().then(function () {
    app.mount('#app')
})

