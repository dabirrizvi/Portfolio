import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import 'bootstrap/dist/css/bootstrap.css'

import BaseCard from './components/UI/UX/BaseCard.vue'
import Loader from './components/UI/UX/Loader.vue'

const app = createApp(App)

app.component('base-card', BaseCard);
app.component('loader', Loader);

app.use(router);
router.isReady().then(function () {
    app.mount('#app')
})

