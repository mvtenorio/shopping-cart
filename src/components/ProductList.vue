<template>
<div class="product-list">
    <product
      v-for="product in sharedState.products"
      :key="product.id"
      v-bind="product"
    >
    </product>
</div>
</template>

<script>
import Product from '@/components/Product';
import store from '@/store';

export default {
  name: 'product-list',
  components: {
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
.product-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
