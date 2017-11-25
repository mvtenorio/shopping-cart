<template>
  <div class="fixed pin-r pin-y w-3/5 bg-grey-darkest text-white p-8"
    v-if="isOpen"
  >
    <div class="relative mb-8">
      <h1 class="uppercase tracking-wide semibold inline-block">
        Meu carrinho
      </h1>
      <button class="text-white absolute pin-r"
        @click="$emit('cartClosed')"
      >
        <img class="w-6"
          src="./../assets/img/close.svg"
          alt="Fechar"
        >
      </button>
    </div>
    <ul class="list-reset" v-if="sharedState.productsAdded.length">
      <li
        v-for="item in order"
        :key="item.product.id"
      >
        <img :src="`http://via.placeholder.com/50/${item.product.image}`" alt="Thumbnail">
        {{ item.product.title }} - {{ item.quantity }}
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
  props: ['isOpen'],
  data() {
    return {
      sharedState: store.state,
    };
  },
  computed: {
    order() {
      return this.sharedState.productsAdded.map(item =>
        this.createOrderItem(item),
      );
    },
  },
  methods: {
    createOrderItem(item) {
      return {
        quantity: item.quantity,
        product: this.getProductById(item.productId),
      };
    },
    getProductById(id) {
      return this.sharedState.products.find(item => item.id === id);
    },
  },
};
</script>
