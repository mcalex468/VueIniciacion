import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductsView.vue'),
    },
    {
      // Aqui hemos pasado id - name - description , por eso en el 
      // routerlink del Componente Products se comparte
      path: '/productDetail/:id/:name/:description',
      name: 'productDetail',
      component: () => import('../views/ProductDetailView.vue'),
    },
  ],
})

export default router
