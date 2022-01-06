const randomInteger = (minIncluded, maxExcluded) => {
  return Math.floor(Math.random() * (maxExcluded - minIncluded)) + minIncluded;
};

export { randomInteger };
