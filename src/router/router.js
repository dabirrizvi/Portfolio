import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Pages/Home/Home.vue'
import Projects from '../components/Pages/Projects/Project.vue'
import Certifcates from '../components/Pages/Certificates/Certificates.vue'
import ContactUs from '../components/Pages/Contacts/Contact.vue'
import NotFound from '../components/Pages/404.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/projects', component: Projects},
        { path: '/certificates', component: Certifcates},
        { path: '/contact', component: ContactUs},
        { path: '/:notFound(.*)', component: NotFound}
    ],
});

export default router;