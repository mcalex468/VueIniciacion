import { createRouter, createWebHistory } from 'vue-router'

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
      // Vista Padre Producto
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductsView.vue'),
      children: [
        {
          // Aqui hemos pasado id - name - description , para que la ruta cambie 
          // y los props funcionen , si se quita no funciona el route !
          path: 'productDetail/:id/:name/:description',
          name: 'productDetail',
          component: () => import('../views/ProductDetailView.vue'),
          props: route=> ({ 
            id:route.params.id, 
            name:route.params.name,
            description:route.params.description })
      
        },
      ]
    },
  ],
})

export default router
