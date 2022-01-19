const setUrlHash = (albumIndex, bookIndex, chapterIndex) => {
  window.location.hash = `#${format(albumIndex)}${format(bookIndex)}${format(chapterIndex)}`;
};

export { setUrlHash };

const format = (index) => {
  if (!index) {
    index = 0;
  }
  index = index.toString();
  if (index.length < 2) {
    index = "0" + index;
  }
  return index;
};
