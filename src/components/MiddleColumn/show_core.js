import { outputCore } from "./output_core";
import { updateLocalStorage } from "./update_local_storage";
import { setAudio } from "../Audio/set_audio";
import { getCore } from "./get_core";

const showCore = (
  albumIndex = 0,
  bookIndex = 0,
  chapterIndex = 0
) => {
  outputCore(...getCore(albumIndex, bookIndex, chapterIndex));
  updateLocalStorage(albumIndex, bookIndex, chapterIndex);
  setAudio();
  window.scrollTo(0, 0);
};

export { showCore };
