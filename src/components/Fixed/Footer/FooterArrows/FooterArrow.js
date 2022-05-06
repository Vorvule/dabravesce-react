import { allAlbums } from "../../../../albums/albums";

import { Core } from "../../../Common/Core";

export class FooterArrow {
  static nextChapter(goForward = true) {
    const albumKey = +localStorage.albumIndex;
    const bookKey = +localStorage.bookIndex;
    const chapterKey = +localStorage.chapterIndex;

    const nextChapterExists = goForward
      ? allAlbums[albumKey].text[bookKey].text[chapterKey + 1]
      : allAlbums[albumKey].text[bookKey].text[chapterKey - 1];

    if (nextChapterExists) {
      goForward
        ? Core.show(albumKey, bookKey, chapterKey + 1)
        : Core.show(albumKey, bookKey, chapterKey - 1);
    }
  }
}
