import allAlbums from "../../albums/all_albums";
import { showMiddleColumnContent } from "../show_middle_column_content"

const nextChapter = () => {
  const albumIndex = +localStorage.albumIndex;
  const bookIndex = +localStorage.bookIndex;
  const chapterIndex = +localStorage.chapterIndex;
  console.log(albumIndex);
  console.log(bookIndex);
  console.log(chapterIndex);

  const nextChapterExists = allAlbums[albumIndex].text[bookIndex].text[chapterIndex + 1];
  console.log(nextChapterExists);

  if (nextChapterExists) {
    showMiddleColumnContent(albumIndex, bookIndex, chapterIndex + 1);
    return;
  }
};

export default nextChapter;
