import { outputCore } from "./output_core";
import { updateLocalStorage } from "./update_local_storage";
import { showAudio } from "../Audio/showAudio";
import { getCore } from "./get_core";
import { pushKeysToHistory } from "./keys/showCore-pushKeysToHistory";

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
