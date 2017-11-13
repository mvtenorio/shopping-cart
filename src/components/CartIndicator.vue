<template>
  <div class="cart-indicator">
    cart-indicator - count: {{ sharedState.count }}
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'cart-indicator',
  data() {
    return {
      sharedState: store.state,
    };
  },
};
</script>

<style scoped>
</style>
