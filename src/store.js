/* eslint-disable no-console */
import { products } from '@/data/products.json';

export default {
  debug: true,
  state: {
    products,
    productsAdded: [],
  },

  addToCartAction(productId) {
    if (this.debug) {
      console.log('addToCartAction triggered with productId', productId);
    }
    const product = this.state.productsAdded
      .find(item => item.productId === productId);

    if (product) {
      product.quantity += 1;
      return;
    }
    this.state.productsAdded.push({
      productId,
      quantity: 1,
    });
  },
};
