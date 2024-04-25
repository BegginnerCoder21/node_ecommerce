import CartPage from '@/views/CartPage.vue'
import ProductDetailsPage from '@/views/ProductDetailsPage.vue'
import ProductsPage from '@/views/ProductsPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/products',
      name: 'products',
      component: ProductsPage
    },
    {
      path: '/product-detail/:id',
      name: 'products-detail',
      component: ProductDetailsPage,
      props:true
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    },
    {
      path: '/',
      redirect: '/products'
    },
  ]
})

export default router
