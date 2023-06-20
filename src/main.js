import { createApp, isMemoSame } from 'vue'
import App from './App.vue'
import router from './router/router.js'
// Importing Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

// Page Templates
import Timeline from './components/UI/PageTemplate/Timeline.vue'

// Importing Animation on Scroll
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App);
AOS.init();
app.use(router);

// Initiliasing templates
app.component('timeline',Timeline)

router.isReady().then(function () {
    app.mount('#app')
})

