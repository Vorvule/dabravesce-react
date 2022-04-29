import { outputCore } from "./outputCore";
import { showAudio } from "../audio/showAudio";
import { getCore } from "./getCore";
import { pushKeysToHistory } from "../keys/pushKeysToHistory";
import { showOneColumnWithId } from "../../context/showOneColumnWithId";

export const showCore = (
  albumIndex = 0,
  bookIndex = 0,
  chapterIndex = 0,
  keysToBePushedInHistory = true
) => {
  outputCore(...getCore(albumIndex, bookIndex, chapterIndex));
  showAudio(albumIndex, bookIndex, chapterIndex);
  window.scrollTo(0, 0);
  showOneColumnWithId("MiddleColumn");

  keysToBePushedInHistory &&
    pushKeysToHistory(albumIndex, bookIndex, chapterIndex);

  updateLocalStorage(albumIndex, bookIndex, chapterIndex);
};

/* ****** */

const updateLocalStorage = (albumIndex, bookIndex, chapterIndex) => {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("albumIndex", albumIndex);
    localStorage.setItem("bookIndex", bookIndex);
    localStorage.setItem("chapterIndex", chapterIndex);
  }
};
