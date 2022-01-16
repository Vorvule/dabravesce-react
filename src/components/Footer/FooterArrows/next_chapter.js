import allAlbums from "../../../albums/albums";
import { showMiddleColumnContent } from "../../MiddleColumn/show_middle_column_content"

const nextChapter = () => {
  const albumIndex = +localStorage.albumIndex;
  const bookIndex = +localStorage.bookIndex;
  const chapterIndex = +localStorage.chapterIndex;

  const nextChapterExists = allAlbums[albumIndex].text[bookIndex].text[chapterIndex + 1];

  if (nextChapterExists) {
    showMiddleColumnContent(albumIndex, bookIndex, chapterIndex + 1);
    return;
  }
};

export default nextChapter;
