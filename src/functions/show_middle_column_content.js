import allAlbums from "../albums/all_albums";
import { outputMiddleColumnContent } from "./output_middle_column_content";
import { updateLocalStorage } from "./update_local_storage";
import { toggleMenuAndCore } from "./toggle_menu_and_core";

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
  if (document.getElementById("MiddleColumn").classList.contains("w3-hide"))
    toggleMenuAndCore();
};

export { showMiddleColumnContent };
