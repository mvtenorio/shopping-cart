/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
import { store, mutations, getters } from '@/store';
import { products } from '@/data/products.json';

describe('Store', function () {
  beforeEach(function () {
    const initialState = {
      cartIsOpen: false,
      products,
      productsAdded: [
        { productId: 1, quantity: 1 },
        { productId: 2, quantity: 7 },
        { productId: 3, quantity: 4 },
      ],
    };
    store.replaceState(initialState);
  });

  describe('mutations', function () {
    it('adds an item', function () {
      mutations.addToCart(store.state, {
        productId: 4,
        quantity: 1,
      });
      expect(store.state.productsAdded.length).to.equal(4);
    });

    it('removes an item', function () {
      mutations.removeItem(store.state, 1);
      expect(store.state.productsAdded.length).to.equal(2);
    });
  });

  describe('getters', function () {
    it('creates an order object', function () {
      const order = getters.order(store.state);
      expect(order.length).to.equal(3);

      const firstItem = order[0];
      expect(firstItem.quantity).to.equal(1);
      expect(firstItem.product.price).to.equal(229.9);
    });

    it('calculates the total quantity', function () {
      const quantity = getters.totalQuantity(store.state);
      expect(quantity).to.equal(12);
    });

    it('calculates the subtotal', function () {
      const subtotal = getters.subtotal(store.state);
      expect(subtotal).to.equal(1748.8);
    });
  });
});
