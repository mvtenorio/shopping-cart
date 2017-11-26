<template>
<div>
    <div class="flex flex-wrap justify-center sm:justify-start bg-grey-lightest">
      <product
        v-for="product in products"
        :key="product.id"
        v-bind="product"
      >
      </product>
    </div>
</div>
</template>

<script>
import Product from '@/components/Product';

export default {
  name: 'product-list',
  components: {
    Product,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>
