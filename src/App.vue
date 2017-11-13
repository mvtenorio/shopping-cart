<template>
  <div id="app">
    <main>
      <cart-indicator></cart-indicator>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import CartIndicator from '@/components/CartIndicator';
import store from '@/store';

export default {
  name: 'app',
  components: {
    CartIndicator,
  },
  data() {
    return {
      sharedState: store.state,
    };
  },
};
</script>

<style>
*, *:before, *:after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding-top: 20px;
}
</style>
