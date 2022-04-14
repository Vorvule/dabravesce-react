import { outputCore } from "./outputCore";
import { updateLocalStorage } from "./updateLocalStorage";
import { showAudio } from "../Audio/showAudio";
import { getCore } from "./getCore";
import { pushKeysToHistory } from "./keys/pushKeysToHistory";

const showCore = (
  albumIndex = 0,
  bookIndex = 0,
  chapterIndex = 0,
  keysToBePushedInHistory = true
) => {
  outputCore(...getCore(albumIndex, bookIndex, chapterIndex));
  showAudio(albumIndex, bookIndex, chapterIndex);
  window.scrollTo(0, 0);
  keysToBePushedInHistory &&
    pushKeysToHistory(albumIndex, bookIndex, chapterIndex);
  updateLocalStorage(albumIndex, bookIndex, chapterIndex);
};

export { showCore };
