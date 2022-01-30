const pairIndex = (index) => {
  if (!index) {
    index = 0;
  }
  index = index.toString();
  if (index.length < 2) {
    index = "0" + index;
  }
  return index;
};

export { pairIndex };
