<template>
<div>
    <div class="flex flex-wrap justify-center sm:justify-start bg-grey-lightest">
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
