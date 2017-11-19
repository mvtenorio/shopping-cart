<template>
  <div class="flex flex-col items-center p-4">
    <figure>
      <img :src="imgSrc" alt="Product Image">
      <figcaption class="text-center">{{ title }}</figcaption>
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
        class="w-12"
        v-model="quantity"
        min="1"
        max="10"
      >
    </p>
    <div class="my-2">
      <button
        class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
        @click="addToCart"
      >
        Add to cart
      </button>
    </div>
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
