<template>
<div id="app" class="text-grey-darkest relative">
  <header class="w-full h-16 bg-indigo text-grey-lighter flex justify-between">
    <div class="pl-4 flex items-center uppercase">Shopping Cart</div>
    <cart-indicator></cart-indicator>
  </header>
  <main class="container mx-auto px-4 my-4">
    <product-list></product-list>
    <cart :is-open="sharedState.cartIsOpen"></cart>
  </main>
  <footer class="w-full p-8 md:text-right leading-loose text-sm">
    <div>Icon made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    <div>Icon made by <a href="https://www.flaticon.com/authors/hadrien" title="Hadrien">Hadrien</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
  </footer>
</div>
</template>

<script>
import Cart from '@/components/Cart';
import CartIndicator from '@/components/CartIndicator';
import ProductList from '@/components/ProductList';
import store from '@/store';

export default {
  name: 'app',
  components: {
    Cart,
    CartIndicator,
    ProductList,
  },
  data() {
    return {
      sharedState: store.state,
    };
  },
};
</script>

<style lang="sass">
@import './assets/css/styles.scss';
</style>
