import { pairIndex } from "../../Common/pair-index";

const pushKeysToHistory = (albumIndex, bookIndex, chapterIndex) => {
  const searchKeys =
    pairIndex(albumIndex) + pairIndex(bookIndex) + pairIndex(chapterIndex);
  window.history.pushState({}, document.title, "index.html?k=" + searchKeys);
};

export { pushKeysToHistory };
