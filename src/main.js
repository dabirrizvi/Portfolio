import { createApp, isMemoSame } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import 'bootstrap/dist/css/bootstrap.css'

// Page Templates
import DescriptionImage from './components/UI/PageTemplate/DescriptionImageTemplate.vue'
import ImageDescription from './components/UI/PageTemplate/ImageDescriptionTemplate.vue'
import TwoImage from './components/UI/PageTemplate/TwoImageTemplate.vue'
import TwoDescription from './components/UI/PageTemplate/TwoDescriptionTemplate.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App);
AOS.init();
app.use(router);

app.component('description-image', DescriptionImage);
app.component('image-description',ImageDescription)
app.component('two-image',TwoImage)
app.component('two-description',TwoDescription)

router.isReady().then(function () {
    app.mount('#app')
})

