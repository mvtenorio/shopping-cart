<template>
<div class="h-full flex p-2 pr-6">
  <div class="flex flex-col justify-center">
    <p>Subtotal: R$ {{ formatPrice(subtotal) }}</p>
  </div>
  <div class="relative h-full">
    <button class="w-24 h-full text-grey-lighter -mr-6"
      @click="openCart"
    >
      <img class="w-10"
        src="./../assets/img/shopping-cart.svg"
        alt="Carrinho"
      >
      <span
        class="inline-block min-w-6 bg-red absolute pin-r pin-t rounded-full leading-normal"
        v-if="quantity"
      >
        {{ quantity }}
      </span>
    </button>
  </div>
</div>
</template>

<script>
import store from '@/store';
import priceMixin from '@/mixins/price';

export default {
  name: 'cart-indicator',
  mixins: [priceMixin],
  data() {
    return {
      sharedState: store.state,
    };
  },
  computed: {
    quantity() {
      return this.sharedState.productsAdded
        .reduce((previous, current) => previous + current.quantity, 0);
    },

    subtotal() {
      return this.sharedState.productsAdded
        .reduce(
          (previous, current) => {
            const price = this.sharedState.products
              .find(item => item.id === current.productId)
              .price;
            const totalPrice = price * current.quantity;
            return previous + totalPrice;
          },
          0,
        );
    },
  },
  methods: {
    openCart() {
      store.openCartAction();
    },
  },
};
</script>
