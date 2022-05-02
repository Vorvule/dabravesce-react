import { allAlbums } from "../../../../albums/albums";
import { Core } from "../../../MiddleColumn/core/Core";

export const nextChapter = () => {
  const albumIndex = +localStorage.albumIndex;
  const bookIndex = +localStorage.bookIndex;
  const chapterIndex = +localStorage.chapterIndex;

  const nextChapterExists =
    allAlbums[albumIndex].text[bookIndex].text[chapterIndex + 1];

  if (nextChapterExists) {
    Core.show(albumIndex, bookIndex, chapterIndex + 1);
  }
};
