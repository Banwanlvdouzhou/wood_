import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('@/views/HistoryView.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/CategoryView.vue')
  },
  {
    path: '/category/:id',
    name: 'CategoryDetail',
    component: () => import('@/views/CategoryDetailView.vue')
  },
  {
    path: '/masterpieces',
    name: 'Masterpieces',
    component: () => import('@/views/MasterpiecesView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router