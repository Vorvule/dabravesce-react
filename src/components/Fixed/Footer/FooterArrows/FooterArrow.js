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
      return;
    }

    const lastChapterKey =
      !goForward && allAlbums[albumKey].text[bookKey - 1].text.length - 1;

    if (this.nextBookExists(goForward, albumKey, bookKey, lastChapterKey)) {
      goForward
        ? Core.show(albumKey, bookKey + 1, 0)
        : Core.show(albumKey, bookKey - 1, lastChapterKey);
      return;
    }
  }

  static nextChapterExists(goForward, albumKey, bookKey, chapterKey) {
    return goForward
      ? allAlbums[albumKey].text[bookKey].text[chapterKey + 1]
      : allAlbums[albumKey].text[bookKey].text[chapterKey - 1];
  }

  static nextBookExists(goForward, albumKey, bookKey, lastChapterKey) {
    return goForward
      ? allAlbums[albumKey].text[bookKey + 1].text[0]
      : allAlbums[albumKey].text[bookKey - 1].text[lastChapterKey];
  }
}
