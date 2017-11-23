import Vue from 'vue';
import Cart from '@/components/Cart';
import { products } from '@/data/products.json';

describe('Cart.vue', () => {
  let vm;
  beforeEach(() => {
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
  it('is open', () => {
    expect(vm.isOpen).to.equal(true);
  });

  it('gets a product by id', () => {
    const product = vm.getProductById(1);
    expect(typeof product).to.equal('object');
    expect(product.title).to.equal('Produto A');
  });

  it('computes an order', () => {
    vm.sharedState.productsAdded = [{
      productId: 2,
      quantity: 3,
    }];
    expect(vm.order.length).to.equal(1);
    const firstItem = vm.order[0];
    expect(firstItem.quantity).to.equal(3);
    expect(firstItem.product.price).to.equal(199.9);
  });
});
