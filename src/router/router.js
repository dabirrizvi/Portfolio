import { createRouter, createWebHistory } from 'vue-router'

import LaunchScreen from '../components/UI/LoadingScreen/LaunchScreen.vue'
import Home from '../components/Pages/Home/Home.vue'
import Projects from '../components/Pages/Projects/Project.vue'
import ContactUs from '../components/Pages/Contacts/Contact.vue'
import NotFound from '../components/Pages/404.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: LaunchScreen },
        // { path: '/home', component: Home },
        // { path: '/projects', component: Projects},
        // { path: '/contact', component: ContactUs},
        { path: '/:notFound(.*)', component: NotFound},
    ],
});

export default router;