import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/aboutService',
      name: 'AboutService',
      component: () => import('@/views/AboutService.vue')
    },
    {
      path: '/aboutAptitude',
      name: 'AboutAptitude',
      component: () => import('@/views/AboutAptitude.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About.vue')
    }
  ]
})

export default router
