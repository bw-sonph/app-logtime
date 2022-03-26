import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';
import Home from '@/views/Home.vue';

const requireAuth = (_to: any, _from: any, next: any) => {
  const user = store.state.user;
  if (!user) {
    next('/login');
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home,
    beforeEnter: requireAuth,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
