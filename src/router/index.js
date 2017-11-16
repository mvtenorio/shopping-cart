import Vue from 'vue';
import Router from 'vue-router';
import Cart from '@/components/Cart';
import ProductList from '@/components/ProductList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
  ],
});
