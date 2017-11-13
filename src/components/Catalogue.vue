<template>
<div class="catalogue">
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
  name: 'catalogue',
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
.catalogue {
  display: flex;
  flex-wrap: wrap;
  /* align-content: space-between; */
}
/* .product {
  flex: 0 0 auto;
} */
</style>
