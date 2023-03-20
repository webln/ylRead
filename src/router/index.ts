import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/bookList',
    name: 'bookList',
    component: () => import('../views/bookList.vue')
  },
  {
    path: '/mediaList',
    name: 'mediaList',
    component: () => import('../views/mediaList.vue')
  },
  {
    path: '/detail1',
    name: 'detail1',
    component: () => import('../views/detail1.vue')
  },
  {
    path: '/detail2',
    name: 'detail2',
    component: () => import('../views/detail2.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// 跳转后自动返回页面顶部
router.afterEach(() => {window.scrollTo(0,0);})
export default router
