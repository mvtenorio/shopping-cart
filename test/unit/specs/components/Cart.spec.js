/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
import Vue from 'vue';
import Cart from '@/components/Cart';
import { store, mutations } from '@/store';
import { products } from '@/data/products.json';

describe('Cart.vue', function () {
  let vm;
  beforeEach(function () {
    const initialState = {
      cartIsOpen: true,
      products,
      productsAdded: [],
    };
    store.replaceState(initialState);

    const Constructor = Vue.extend(Cart);
    vm = new Constructor({ store }).$mount();
  });

  it('is open', function () {
    expect(vm.$el.querySelector('h2').textContent.trim()).to.equal('Carrinho');
  });

  it('displays a message when is empty', function () {
    expect(vm.$el.querySelector('p').textContent.trim()).to.equal(
      'Seu carrinho está vazio.',
    );
  });

  it('displays a list of the products in the cart', async function () {
    mutations.addToCart(store.state, {
      productId: 1,
      quantity: 2,
    });
    mutations.addToCart(store.state, {
      productId: 2,
      quantity: 2,
    });
    await Vue.nextTick();
    const listItems = vm.$el.querySelectorAll('tbody tr');
    expect(listItems.length).to.equal(2);
  });

  it('displays the thumbnail', async function () {
    mutations.addToCart(store.state, {
      productId: 1,
      quantity: 2,
    });
    await Vue.nextTick();
    const firstItemImg = vm.$el.querySelector('tbody img');
    expect(firstItemImg.src).to.equal('http://via.placeholder.com/50/1abc9c');
  });
});
