<template>
<div class="flex flex-col items-center md:w-1/3 p-4 leading-loose">
  <figure>
    <img :src="imgSrc" alt="Product Image">
    <figcaption class="text-center">{{ title }}</figcaption>
  </figure>
  <div class="w-12 mb-4 border-t-2 border-indigo"></div>
  <p>
    <small class="text-grey-darker">R$</small>
    <span class="text-xl font-semibold">{{ formatPrice(price) }}</span>
  </p>
  <p class="text-grey-darker">
    ou {{ installments }} x <small>R$</small>
    <span class="font-semibold">
       {{ formatPrice(installmentPrice) }}
    </span>
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
      class="bg-indigo hover:bg-indigo-dark text-grey-lighter font-bold py-2 px-4 rounded"
      @click="addToCart"
    >
      Adicionar ao carrinho
    </button>
  </div>
</div>
</template>

<script>
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
        this.$store.commit('addToCart', {
          productId: this.id,
          quantity,
        });
      }
    },
  },
};
</script>
