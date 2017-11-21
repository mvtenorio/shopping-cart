<template>
  <div id="app" class="bg-grey-lighter">
    <header class="w-full h-16 bg-indigo">
      <cart-indicator @cartOpened="cartIsOpen = true"></cart-indicator>
    </header>
    <main class="container mx-auto px-4 my-4">
      <product-list></product-list>
      <cart :is-open="cartIsOpen" @cartClosed="cartIsOpen = false"></cart>
    </main>
    <footer class="w-full h-16 p-8 text-indigo text-right">
      <div>Icon made by
        <a href="https://www.flaticon.com/authors/gregor-cresnar"
          title="Gregor Cresnar"
        >Gregor Cresnar
        </a> from
        <a href="https://www.flaticon.com/"
          title="Flaticon">www.flaticon.com
        </a> is licensed by
        <a href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
        >CC 3.0 BY
        </a>
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
