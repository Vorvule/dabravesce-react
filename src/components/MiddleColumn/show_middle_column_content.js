import allAlbums from "../../albums/albums";
import { outputMiddleColumnContent } from "./output_middle_column_content";
import { updateLocalStorage } from "./update_local_storage";
import { toggleMenuAndCore } from "../Common/toggle_menu_and_core";
import { setAudio } from "../Audio/set_audio";

const showMiddleColumnContent = (albumIndex, bookIndex, chapterIndex) => {
  updateLocalStorage(albumIndex, bookIndex, chapterIndex);
  window.scrollTo(0, 0);

  const albumName = allAlbums[albumIndex].name;
  const albumText = allAlbums[albumIndex].text;

  const bookName = albumText[bookIndex].name;
  const bookText = albumText[bookIndex].text;

  const chapterName = bookText[chapterIndex][0];
  const chapterText = bookText[chapterIndex][1];

  outputMiddleColumnContent(albumName, bookName, chapterName, chapterText);
  const middleColumnIsHidden = document
    .getElementById("MiddleColumn")
    .classList.contains("w3-hide");
  
  if (middleColumnIsHidden) {
    toggleMenuAndCore();
  }
  setAudio();
};

export { showMiddleColumnContent };
