<template>
<div class="product-list">
    <cart-indicator></cart-indicator>
    <div class="list">
      <product
        v-for="product in sharedState.products"
        :key="product.id"
        v-bind="product"
      >
      </product>
    </div>
</div>
</template>

<script>
import CartIndicator from '@/components/CartIndicator';
import Product from '@/components/Product';
import store from '@/store';

export default {
  name: 'product-list',
  components: {
    CartIndicator,
    Product,
  },
  data() {
    return {
      sharedState: store.state,
    };
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}
</style>
