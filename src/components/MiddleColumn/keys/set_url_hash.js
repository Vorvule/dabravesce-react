import { pairIndex } from "./../../Common/pair-index";

const setUrlHash = (albumIndex, bookIndex, chapterIndex) => {
  deleteLocationSearch();
  window.location =
    pairIndex(albumIndex) + pairIndex(bookIndex) + pairIndex(chapterIndex);
  // window.history.pushState({}, document.title, window.location);
};

export { setUrlHash };

const deleteLocationSearch = () => {
  // delete location search parameters with the question mark
  if (window.location.search) {
    window.history.pushState({}, document.title, window.location.pathname);
  }
};
