/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

import Vue from 'vue';
import Vuex from 'vuex';
import { products } from '@/data/products.json';

Vue.use(Vuex);

const state = {
  cartIsOpen: false,
  products,
  productsAdded: [],
};

function createOrderItem(item, _products) {
  return {
    quantity: item.quantity,
    product: _products.find(p => p.id === item.productId),
  };
}

export const mutations = {
  addToCart(state, { productId, quantity }) {
    const product = state.productsAdded.find(
      item => item.productId === productId,
    );

    if (product) {
      product.quantity += quantity;
      return;
    }
    state.productsAdded.push({
      productId,
      quantity,
    });
  },


  removeItem(state, productId) {
    const indexToRemove = state.productsAdded.findIndex(
      item => item.productId === productId,
    );
    state.productsAdded.splice(indexToRemove, 1);
  },

  openCart(state) {
    state.cartIsOpen = true;
  },

  closeCart(state) {
    state.cartIsOpen = false;
  },
};

export const getters = {
  order(state) {
    return state.productsAdded.map(item =>
      createOrderItem(item, state.products),
    );
  },

  totalQuantity(state) {
    return state.productsAdded
      .reduce((previous, current) => previous + current.quantity, 0);
  },

  subtotal(state) {
    return state.productsAdded
      .reduce(
        (previous, current) => {
          const price = state.products
            .find(item => item.id === current.productId)
            .price;
          const totalPrice = price * current.quantity;
          return previous + totalPrice;
        },
        0,
      );
  },
};

export const store = new Vuex.Store({
  state,
  mutations,
  getters,
});
