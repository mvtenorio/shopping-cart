<template>
  <div id="app" class="bg-grey-lighter">
    <header class="w-full h-16 bg-indigo">
      <cart-indicator @cartOpened="cartIsOpen = true"></cart-indicator>
    </header>
    <main class="container mx-auto px-4">
      <product-list></product-list>
      <cart :is-open="cartIsOpen" @cartClosed="cartIsOpen = false"></cart>
    </main>
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
  data() {
    return {
      cartIsOpen: false,
    };
  },
};
</script>

<style lang="sass">
@import './assets/css/styles.scss';
</style>
