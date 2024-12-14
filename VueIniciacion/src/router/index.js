import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Computed.vue'),
  },
  {
    path: '/props', 
    name: 'props',
    component: () => import('@/views/Props.vue'),
    props: true,
  },
  {
    path: '/emit', 
    name: 'emit',
    component: () => import('@/views/Emit.vue'),
  },
  {
    path: '/provideinject', 
    name: 'provide',
    component: () => import('@/views/ProvideInject.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
