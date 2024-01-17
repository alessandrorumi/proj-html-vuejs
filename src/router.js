import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
      beforeEnter(to, from, next) {
        // Scrolla verso l'inizio della pagina prima di entrare nel componente
        window.scrollTo(0, 0);
        next();
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      beforeEnter(to, from, next) {
        window.scrollTo(0, 0);
        next();
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      beforeEnter(to, from, next) {
        window.scrollTo(0, 0);
        next();
      }
    },
    //  Cambia redirect con componente 404
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ]
});

export { router };
