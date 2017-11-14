<template>
  <div class="product">
    <figure class="product-image">
      <img :src="imgSrc" alt="Product Image">
      <figcaption>{{ title }}</figcaption>
    </figure>
    <div>-</div>
    <p>
      <small>{{ currencyFormat }}</small>
      <span>{{ formattedPrice }}</span>
    </p>
    <p>
      ou {{ installments }} x <small>{{ currencyFormat }}</small> {{
        formattedInstallmentPrice }}
    </p>
    <button @click="increment">Add to cart</button>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'product',
  props: [
    'currencyFormat',
    'image',
    'installments',
    'price',
    'title',
  ],
  computed: {
    formattedPrice() {
      return this.price
        .toFixed(2)
        .replace('.', ',');
    },

    formattedInstallmentPrice() {
      return (this.price / this.installments)
        .toFixed(2)
        .replace('.', ',');
    },

    imgSrc() {
      return `http://via.placeholder.com/220/${this.image}`;
    },
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
