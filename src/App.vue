<template>
<div id="app" class="text-grey-darkest relative">
  <header class="w-full h-16 bg-indigo text-grey-lighter flex justify-between fixed pin-t">
    <div class="pl-4 flex items-center uppercase">Shopping Cart</div>
    <cart-indicator></cart-indicator>
  </header>
  <main class="container mx-auto px-4 pt-20">
    <product-list></product-list>
    <cart></cart>
  </main>
  <footer class="w-full p-8 leading-loose">
    <div class="md:text-center text-sm mb-8">
      Made by Marcus Tenório • <a href="https://github.com/mvtenorio/shopping-cart">Github</a>
    </div>
    <div class="md:text-right text-xs">
      <div>Icon made by <a href="https://www.flaticon.com/authors/gregor-cresnar" target="_blank" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" target="_blank" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      <div>Icon made by <a href="https://www.flaticon.com/authors/hadrien" target="_blank" title="Hadrien">Hadrien</a> from <a href="https://www.flaticon.com/" target="_blank" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    </div>
  </footer>
</div>
</template>

<script>
import Cart from '@/components/Cart';
import CartIndicator from '@/components/CartIndicator';
import ProductList from '@/components/ProductList';

export default {
  name: 'app',
  components: {
    Cart,
    CartIndicator,
    ProductList,
  },
};
</script>

<style lang="sass">
@import './assets/scss/styles.scss';
</style>
