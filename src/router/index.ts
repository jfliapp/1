import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/Home',
    children: [
      {
        path: '/Home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/menu/Home.vue')
      },
      {
        path: '/Partners',
        name: 'Partners',
        component: () => import(/* webpackChunkName: "Partners" */ '../views/menu/Partners.vue')
      },
      {
        path: '/CompanyOverview',
        name: 'CompanyOverview',
        component: () => import(/* webpackChunkName: "CompanyOverview" */ '../views/menu/CompanyOverview.vue')
      },
      {
        path: '/LegalDocument',
        name: 'LegalDocument',
        component: () => import(/* webpackChunkName: "LegalDocument" */ '../views/menu/LegalDocument.vue')
      },
      {
        path: '/Qualification',
        name: 'Qualification',
        component: () => import(/* webpackChunkName: "Qualification" */ '../views/menu/Qualification.vue')
      },
      {
        path: '/Commodities',
        name: 'Commodities',
        component: () => import(/* webpackChunkName: "Commodities" */ '../views/menu/Commodities.vue')
      },
      {
        path: '/FinancingTransaction',
        name: 'FinancingTransaction',
        component: () => import(/* webpackChunkName: "FinancingTransaction" */ '../views/menu/FinancingTransaction.vue')
      },
      {
        path: '/PlatformIntroduced',
        name: 'PlatformIntroduced',
        component: () => import(/* webpackChunkName: "PlatformIntroduced" */ '../views/menu/PlatformIntroduced.vue')
      },
      {
        path: '/DownloadCenter',
        name: 'DownloadCenter',
        component: () => import(/* webpackChunkName: "DownloadCenter" */ '../views/menu/DownloadCenter.vue')
      },
      {
        path: '/News/:type(1|2)',
        name: 'News',
        component: () => import(/* webpackChunkName: "News" */ '../views/menu/News.vue')
      }
    ]
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
