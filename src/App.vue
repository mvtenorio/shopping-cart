<template>
  <div id="app" class="bg-grey-lighter">
    <header class="w-screen h-16 bg-teal">
      <cart-indicator></cart-indicator>
    </header>
    <main class="container mx-auto px-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import CartIndicator from '@/components/CartIndicator';

export default {
  name: 'app',
  components: {
    CartIndicator,
  },
};
</script>

<style lang="sass">
@import './assets/css/styles.scss';
</style>
