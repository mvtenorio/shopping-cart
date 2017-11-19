<template>
  <div>
    <p>Meu carrinho</p>
    <ul>
      <li
        v-for="item in sharedState.productsAdded"
        :key="item.productId"
      >
        {{ getProductById(item.productId).title }} - {{ item.quantity }}
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store';
import priceMixin from '@/mixins/price';

export default {
  name: 'cart',
  mixins: [priceMixin],
  data() {
    return {
      sharedState: store.state,
    };
  },
  methods: {
    getProductById(id) {
      return this.sharedState.products
        .filter(item => item.id === id)
        .shift();
    },
  },
};
</script>
