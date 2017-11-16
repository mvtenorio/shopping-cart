<template>
  <div class="product">
    <figure class="product-image">
      <img :src="imgSrc" alt="Product Image">
      <figcaption>{{ title }}</figcaption>
    </figure>
    <div>-</div>
    <p>
      <small>R$</small>
      <span>{{ formatPrice(price) }}</span>
    </p>
    <p>
      ou {{ installments }} x <small>R$</small> {{
        formatPrice(installmentPrice) }}
    </p>
    <p>Quantidade:
      <input
        type="number"
        class="quantity"
        v-model="quantity"
        min="1"
        max="10"
      >
    </p>
    <button @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
import store from '@/store';
import priceMixin from '@/mixins/price';

export default {
  name: 'product',
  mixins: [priceMixin],
  props: [
    'currencyFormat',
    'id',
    'image',
    'installments',
    'price',
    'title',
  ],
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    installmentPrice() {
      return this.price / this.installments;
    },

    imgSrc() {
      return `http://via.placeholder.com/220/${this.image}`;
    },
  },
  methods: {
    addToCart() {
      const quantity = Number.parseInt(this.quantity, 10);
      if (quantity) {
        store.addToCartAction(this.id, quantity);
      }
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

.quantity {
  width: 50px;
}
</style>
