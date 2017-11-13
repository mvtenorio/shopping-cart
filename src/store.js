/* eslint-disable no-console */
import { products } from '@/data/products.json';

export default {
  debug: true,
  state: {
    count: 0,
    products,
  },
  incrementCountAction() {
    if (this.debug) {
      console.log('incrementCountAction triggered');
    }
    this.state.count += 1;
  },
};
