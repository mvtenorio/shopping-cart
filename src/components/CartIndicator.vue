<template>
  <div class="h-full flex">
    <div class="flex flex-col justify-center w-48 px-4 ml-auto text-white">
      <p>Quantidade: {{ quantity }}</p>
      <p>Subtotal: R$ {{ formatPrice(subtotal) }}</p>
    </div>
    <div class="flex justify-center w-24 cursor-pointer"
      @click="$emit('cartOpened')"
    >
      <img class="w-8"
        src="./../assets/img/shopping-cart.svg"
        alt="Cart"
      >
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
};
</script>
