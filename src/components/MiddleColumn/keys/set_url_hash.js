import { pairIndex } from "./../../Common/pair-index";

const setUrlHash = (albumIndex, bookIndex, chapterIndex) => {
  window.location.hash =
    pairIndex(albumIndex) + pairIndex(bookIndex) + pairIndex(chapterIndex);
};

export { setUrlHash };
