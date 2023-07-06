import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/create',
      component: () => import('../views/CreateMadlibsView.vue')
    },
    {
      path: '/story',
      component: () => import('../views/StoryView.vue')
    }
  ]
})

export default router
