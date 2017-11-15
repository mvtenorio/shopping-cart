export default {
  methods: {
    formatPrice(price) {
      return price
        .toFixed(2)
        .replace('.', ',');
    },
  },
};
