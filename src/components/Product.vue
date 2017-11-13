<template>
  <div class="product">
    <figure class="product-image">
      <img src="http://via.placeholder.com/220" alt="Product Image">
      <figcaption>{{ title }}</figcaption>
    </figure>
    <div>-</div>
    <p>
      <small>R$</small>
      <span>{{ price }}</span>
    </p>
    <p>ou 4x R$ 25,00</p>
    <button @click="increment">Add to cart</button>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'product',
  props: [
    'price',
    'title',
  ],
  data() {
    return {
      sharedState: store.state,
    };
  },
  methods: {
    increment() {
      store.incrementCountAction();
    },
  },
};
</script>

<style scoped>
.product {
  width: 300px;
  height: 480px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
