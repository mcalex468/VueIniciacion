import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/props', // Asegúrate de que el path sea único
    name: 'props',
    component: () => import('@/components/DefinePropsHijo.vue'),
  },
  {
    path: '/emit', // Cambiar a un path único
    name: 'emit',
    component: () => import('@/views/Emit.vue'),
  },
  {
    path: '/router', // Cambiar a un path único
    name: 'router',
    component: () => import('@/views/Router.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
