import { pairIndex } from "./../../Common/pair-index";

const setUrlHash = (albumIndex, bookIndex, chapterIndex) => {
  // deleteLocationSearch();
  const searchKeys =
    pairIndex(albumIndex) + pairIndex(bookIndex) + pairIndex(chapterIndex);
  window.history.pushState({}, document.title, "index.html?k=" + searchKeys);
};

export { setUrlHash };

const deleteLocationSearch = () => {
  // delete location search parameters with the question mark
  if (window.location.search) {
    window.history.pushState({}, document.title, window.location.pathname);
  }
};
