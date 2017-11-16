/* eslint-disable no-console */
import { products } from '@/data/products.json';

export default {
  debug: true,
  state: {
    products,
    productsAdded: [],
  },

  addToCartAction(productId, quantity) {
    if (this.debug) {
      console.log(
        `addToCartAction triggered with productId ${productId} and quantity ${
          quantity
        }`,
      );
    }
    const product = this.state.productsAdded.find(
      item => item.productId === productId,
    );

    if (product) {
      product.quantity += quantity;
      return;
    }
    this.state.productsAdded.push({
      productId,
      quantity,
    });
  },
};
