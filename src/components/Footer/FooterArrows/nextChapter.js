import { allAlbums } from "../../../albums/albums";
import { showCore } from "../../MiddleColumn/core/showCore";

export const nextChapter = () => {
  const albumIndex = +localStorage.albumIndex;
  const bookIndex = +localStorage.bookIndex;
  const chapterIndex = +localStorage.chapterIndex;

  const nextChapterExists =
    allAlbums[albumIndex].text[bookIndex].text[chapterIndex + 1];

  if (nextChapterExists) {
    showCore(albumIndex, bookIndex, chapterIndex + 1);
    return;
  }
};
