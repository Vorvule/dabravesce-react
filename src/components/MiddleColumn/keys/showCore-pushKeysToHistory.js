import { pairIndex } from "../../Common/pair-index";

const pushKeysToHistory = (albumIndex, bookIndex, chapterIndex) => {
  // deleteLocationSearch();
  const searchKeys =
    pairIndex(albumIndex) + pairIndex(bookIndex) + pairIndex(chapterIndex);
  window.history.pushState({}, document.title, "index.html?k=" + searchKeys);
};

export { pushKeysToHistory };

const deleteLocationSearch = () => {
  // delete location search parameters with the question mark
  if (window.location.search) {
    window.history.pushState({}, document.title, window.location.pathname);
  }
};
