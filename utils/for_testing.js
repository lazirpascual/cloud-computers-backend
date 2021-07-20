const subtotal = (product) => {
  const subtotal = product.quantity * product.price;
  const roundedTotal = Math.round(subtotal * 100) / 100;

  return roundedTotal;
};

const orderTotal = (products) => {
  const sum = products.reduce((accumulator, currentValue) => {
    return accumulator + subtotal(currentValue);
  }, 0);
  const roundedSum = Math.round(sum * 100) / 100;

  return products.length === 0 ? 0 : roundedSum;
};

const totalQuantity = (products) => {
  const count = products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0);

  return products.length === 0 ? 0 : count;
};

module.exports = {
  subtotal,
  orderTotal,
  totalQuantity,
};
