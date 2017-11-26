module.exports = {
  quantity(productsAdded) {
    return productsAdded
      .reduce((previous, current) => previous + current.quantity, 0);
  },

  subtotal(productsAdded, products) {
    return productsAdded
      .reduce(
        (previous, current) => {
          const price = products
            .find(item => item.id === current.productId)
            .price;
          const totalPrice = price * current.quantity;
          return previous + totalPrice;
        },
        0,
      );
  },
};
