import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Buefy from '@ntohq/buefy-next';
import '@ntohq/buefy-next/dist/buefy.css'

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Chuck from './pages/Chuck.vue';
import Login from './pages/Login.vue';
const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/about', component: About, name: 'About' },
    { path: '/chuck', component: Chuck, name: 'Chuck Norris' },
    { path: '/login', component: Login, name: 'Login' },
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
});



const app = createApp(App);
app.use(router);
app.use(Buefy);
app.mount('#app');
