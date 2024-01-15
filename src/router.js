import {createRouter, createWebHistory} from 'vue-router';

import AppHome from './pages/AppHome.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';
const router = createRouter({
history: createWebHistory(),
routes: [
  {
path: '/',
name: 'home',
component: AppHome
},
{
path: '/about',
name: 'about',
component: About
},
{
path: '/contact',
name: 'contact',
component: Contact
},
]
});
export { router };