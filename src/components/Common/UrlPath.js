import { Core } from "./Core";
import { Util } from "./Util";

export class UrlPath {
  static getKeys() {
    const parameters = new URLSearchParams(window.location.search);

    if (parameters.has("k")) {
      const pars = parameters.get("k"); // 000110

      const keys = [
        Number.parseInt(pars.slice(0, 2)),
        Number.parseInt(pars.slice(2, 4)),
        Number.parseInt(pars.slice(4, 6)),
      ];

      if (this.keysAreValid(keys)) {
        return keys;
      }
    }
  }

  static keysAreValid(keys) {
    try {
      const [albumName, bookName, chapterName, chapterText] = Core.get(...keys);
      if (albumName && bookName && chapterName && chapterText) return true;
    } catch {
      return false;
    }
  }

  static pushKeys(albumIndex, bookIndex, chapterIndex) {
    // to History
    const searchKeys =
      Util.pairIndex(albumIndex) +
      Util.pairIndex(bookIndex) +
      Util.pairIndex(chapterIndex);
      
    window.history.pushState({}, document.title, "index.html?k=" + searchKeys);
  }
}
