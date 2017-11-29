<template>
<div class="absolute pin-r pin-y w-full md:w-4/5 lg:w-3/5 bg-grey-darkest text-grey-lighter p-8 flex flex-col shadow-lg"
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
  <div class="flex-1" v-if="productsAdded.length">
    <table class="w-full text-sm md:text-base" cellspacing="0">
      <thead>
        <tr class="h-12 uppercase">
          <th class="hidden md:table-cell"></th>
          <th class="text-left">Produto</th>
          <th class="text-right">
            <span class="lg:hidden" title="Quantidade">Qtd</span>
            <span class="hidden lg:inline">Quantidade</span>
          </th>
          <th class="text-right hidden md:table-cell">Preço unitário</th>
          <th class="text-right">Preço total</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in order"
          :key="item.product.id"
          class="h-24"
        >
          <td class="w-24 hidden md:table-cell">
              <img :src="`https://via.placeholder.com/50/${item.product.image}`"
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
          <td class="text-right hidden md:table-cell">
            R$ {{ formatPrice(item.product.price) }}
          </td>
          <td class="text-right">
            R$ {{ formatPrice(item.product.price * item.quantity) }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="h-24">
          <td class="hidden md:table-cell"></td>
          <td class="border-t"></td>
          <td class="border-t hidden md:table-cell"></td>
          <th class="text-right border-t uppercase">Subtotal</th>
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
import priceMixin from '@/mixins/price';

export default {
  name: 'cart',
  mixins: [priceMixin],
  computed: {
    isOpen() {
      return this.$store.state.cartIsOpen;
    },

    productsAdded() {
      return this.$store.state.productsAdded;
    },

    order() {
      return this.$store.getters.order;
    },

    subtotal() {
      return this.$store.getters.subtotal;
    },
  },
  methods: {
    closeCart() {
      this.$store.commit('closeCart');
    },

    removeItem(id) {
      this.$store.commit('removeItem', id);
    },
  },
};
</script>
