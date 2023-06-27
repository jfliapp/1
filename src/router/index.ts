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
      path: '/situation',
      name: 'Situation',
      component: () => import('@/views/Situation.vue')
    },
    {
      path: '/qualification',
      name: 'Qualification',
      component: () => import('@/views/Qualification.vue')
    },
    {
      path: '/foreignTrading',
      name: 'ForeignTrading',
      component: () => import('@/views/ForeignTrading.vue')
    },
    {
      path: '/goodsTrading',
      name: 'GoodsTrading',
      component: () => import('@/views/GoodsTrading.vue')
    },
    {
      path: '/partners',
      name: 'Partners',
      component: () => import('@/views/Partners.vue')
    },
    {
      path: '/news/:id',
      name: 'News',
      component: () => import('@/views/News.vue')
    }
  ]
})

export default router
