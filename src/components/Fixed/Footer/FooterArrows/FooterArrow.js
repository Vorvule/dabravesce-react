import { allAlbums } from "../../../../albums/albums";

import { Core } from "../../../Common/Core";

export class FooterArrow {
  static nextChapter(goForward = true) {
    const albumKey = +localStorage.albumIndex;
    const bookKey = +localStorage.bookIndex;
    const chapterKey = +localStorage.chapterIndex;

    if (this.nextChapterExists(goForward, albumKey, bookKey, chapterKey)) {
      goForward
        ? Core.show(albumKey, bookKey, chapterKey + 1)
        : Core.show(albumKey, bookKey, chapterKey - 1);
    }
  }

  static nextChapterExists(goForward, albumKey, bookKey, chapterKey) {
    return goForward
      ? allAlbums[albumKey].text[bookKey].text[chapterKey + 1]
      : allAlbums[albumKey].text[bookKey].text[chapterKey - 1];
  }
}
