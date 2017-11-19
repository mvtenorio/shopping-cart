<template>
  <div class="h-full">
    <div class="w-48 h-full ml-auto text-white flex flex-col justify-center">
      <p>Quantidade: {{ quantity }}</p>
      <p>Subtotal: R$ {{ formatPrice(subtotal) }}</p>
      <a href="#/cart">Comprar</a>
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
