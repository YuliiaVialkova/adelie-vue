import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog',
      name: 'blog',

      component: () => import('../views/BlogView.vue'),
    },
    {
      path: '/blog/article/:id',
      name: 'article',
      props: true,
      component: () => import('../views/ArticleView.vue'),
    },
    {
      path: '/portfolio',
      name: 'portfolio',

      component: () => import('../views/PortfolioView.vue'),
    },
    {
      path: '/portfolio/item/:title',
      name: 'card',
      props: true,
      component: () => import('../views/PortfolioItemView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',

      component: () => import('../views/ContactView.vue'),
    },
  ],
})

export default router
