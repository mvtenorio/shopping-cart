<template>
  <div class="fixed pin-r pin-y w-3/5 bg-grey-darkest text-white p-8"
    v-if="isOpen"
  >
    <div class="relative mb-8">
      <h1 class="uppercase tracking-wide semibold inline-block">
        Meu carrinho
      </h1>
      <button class="text-white text-xg absolute pin-r"
        @click="$emit('cartClosed')"
      >Fechar
      </button>
    </div>
    <ul class="list-reset" v-if="sharedState.productsAdded.length">
      <li
        v-for="item in sharedState.productsAdded"
        :key="item.productId"
      >
        {{ getProductById(item.productId).title }} - {{ item.quantity }}
      </li>
    </ul>
    <p v-else>
      Seu carrinho está vazio.
    </p>
  </div>
</template>

<script>
import store from '@/store';
import priceMixin from '@/mixins/price';

export default {
  name: 'cart',
  mixins: [priceMixin],
  props: [
    'isOpen',
  ],
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
