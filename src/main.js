import { createApp, isMemoSame } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

// Page Templates

import TwoColumns from './components/UI/PageTemplate/TwoColumn.vue'
import Timeline from './components/UI/PageTemplate/Timeline.vue'


import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App);
AOS.init();
app.use(router);


app.component('two-columns',TwoColumns)
app.component('timeline',Timeline)

router.isReady().then(function () {
    app.mount('#app')
})

