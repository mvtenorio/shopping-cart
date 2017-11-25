<template>
<div class="absolute pin-r pin-y w-full md:w-3/5 bg-grey-darkest text-white p-8 flex flex-col"
  v-if="isOpen"
>
  <div class="relative mb-8">
    <h1 class="uppercase tracking-wide inline-block">
      Meu carrinho
    </h1>
    <button class="text-white absolute pin-r"
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
          <th class="text-right">Preço</th>
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
            {{ item.product.title }}
          </td>
          <td class="text-right">
            {{ item.quantity }}
          </td>
          <td class="text-right">
            R$ {{ formatPrice(item.product.price) }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="h-24">
          <td></td>
          <th colspan="2" class="text-right border-t uppercase">Subtotal</th>
          <td class="text-right border-t">-</td>
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
    closeCart() {
      store.closeCartAction();
    },
  },
};
</script>
