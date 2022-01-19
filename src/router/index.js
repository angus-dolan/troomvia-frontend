import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/app',
      name: 'WebApp',
      component: require('@/views/WebApp.vue').default
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/auth/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/auth/Register.vue')
    },
    {
      path: '/forgot-password',
      name: 'Forgot Password',
      component: () => import('@/views/auth/ForgotPassword.vue')
    },
  ]
});

export { router };