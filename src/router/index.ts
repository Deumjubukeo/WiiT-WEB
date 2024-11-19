import Vue from 'vue';
import Router from 'vue-router'; 
import Home from '@/view/home/home.vue';
import LoginPage from '@/view/auth/login.vue';

Vue.use(Router); 

export const router = new Router({
  mode: 'history', 
  routes: [
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '/',
      component: Home,
    },
  ],
});
