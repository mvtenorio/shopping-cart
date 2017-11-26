/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
import store from '@/store';
import { products } from '@/data/products.json';

describe('store.js', function () {
  before(function () {
    store.debug = false;
    store.state.products = products;
    store.state.productsAdded = [];
  });

  it('removes an item', function () {
    store.state.productsAdded = [{
      productId: 2,
      quantity: 3,
    }];
    expect(store.state.productsAdded.length).to.equal(1);
    store.removeItemAction(2);
    expect(store.state.productsAdded.length).to.equal(0);
  });
});
