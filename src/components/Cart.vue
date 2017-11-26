<template>
<div class="absolute pin-r pin-y w-full md:w-3/5 bg-grey-darkest text-grey-lighter p-8 flex flex-col shadow-lg"
  v-if="isOpen"
>
  <div class="relative mb-8">
    <img class="w-6 mr-4"
        src="./../assets/img/shopping-cart.svg"
        alt="Carrinho"
      >
    <h2 class="uppercase font-normal tracking-wide inline-block">
      Carrinho
    </h2>
    <button class="absolute pin-r"
      @click="closeCart"
    >
      <img class="w-6"
        src="./../assets/img/close.svg"
        alt="Fechar"
      >
    </button>
  </div>
  <div class="flex-1" v-if="sharedState.productsAdded.length">
    <table class="w-full" cellspacing="0">
      <thead>
        <tr class="h-12 uppercase">
          <th></th>
          <th class="text-left">Produto</th>
          <th class="text-right">Quantidade</th>
          <th class="text-right">Preço unitário</th>
          <th class="text-right">Preço total</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in order"
          :key="item.product.id"
          class="h-24"
        >
          <td class="w-24">
              <img :src="`http://via.placeholder.com/50/${item.product.image}`"
                alt="Thumbnail"
              >
          </td>
          <td>
            <p class="mb-2">{{ item.product.title }}</p>
            <button class="text-grey-lighter"
              @click="removeItem(item.product.id)"
            >
              <small>(Remover item)</small>
            </button>
          </td>
          <td class="text-right">
            {{ item.quantity }}
          </td>
          <td class="text-right">
            R$ {{ formatPrice(item.product.price) }}
          </td>
          <td class="text-right">
            R$ {{ formatPrice(item.product.price * item.quantity) }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="h-24">
          <td></td>
          <th colspan="3" class="text-right border-t uppercase">Subtotal</th>
          <td class="text-right border-t">
            R$ {{ formatPrice(subtotal) }}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
  <p v-else>
    Seu carrinho está vazio.
  </p>
</div>
</template>

<script>
import store from '@/store';
import { subtotal } from '@/utils/order';
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
    subtotal() {
      return subtotal(this.sharedState.productsAdded, this.sharedState.products);
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

    closeCart() {
      store.closeCartAction();
    },

    removeItem(id) {
      store.removeItemAction(id);
    },
  },
};
</script>
