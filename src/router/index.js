import Vue from 'vue';
import Router from 'vue-router';
import Catalogue from '@/components/Catalogue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Catalogue',
      component: Catalogue,
    },
  ],
});
