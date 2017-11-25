/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
import Vue from 'vue';
import Cart from '@/components/Cart';
import { products } from '@/data/products.json';

describe('Cart.vue', function () {
  let vm;
  beforeEach(function () {
    const Constructor = Vue.extend(Cart);
    const initialData = {
      sharedState: {
        products,
        productsAdded: [],
      },
    };
    vm = new Constructor({
      data: initialData,
      propsData: { isOpen: true },
    }).$mount();
  });

  it('is open', function () {
    expect(vm.isOpen).to.equal(true);
  });

  it('gets a product by id', function () {
    const product = vm.getProductById(1);
    expect(typeof product).to.equal('object');
    expect(product.title).to.equal('Produto A');
  });

  it('computes an order', function () {
    vm.sharedState.productsAdded = [{
      productId: 2,
      quantity: 3,
    }];
    expect(vm.order.length).to.equal(1);
    const firstItem = vm.order[0];
    expect(firstItem.quantity).to.equal(3);
    expect(firstItem.product.price).to.equal(199.9);
  });

  it('displays a message when is empty', function () {
    expect(vm.sharedState.productsAdded.length).to.equal(0);
    expect(vm.$el.querySelector('p').textContent.trim()).to.equal(
      'Seu carrinho está vazio.',
    );
  });

  it('displays a list of the products in the cart', async function () {
    vm.sharedState.productsAdded = [
      {
        productId: 1,
        quantity: 2,
      },
      {
        productId: 2,
        quantity: 1,
      },
    ];
    await Vue.nextTick();
    const listItems = vm.$el.querySelectorAll('tbody tr');
    expect(listItems.length).to.equal(2);
  });

  it('displays the thumbnail correctly', async function () {
    vm.sharedState.productsAdded = [
      {
        productId: 1,
        quantity: 2,
      },
      {
        productId: 2,
        quantity: 1,
      },
    ];
    await Vue.nextTick();

    const firstItemImg = vm.$el.querySelector('tbody img');
    expect(firstItemImg.src).to.equal('http://via.placeholder.com/50/1abc9c');
  });
});
