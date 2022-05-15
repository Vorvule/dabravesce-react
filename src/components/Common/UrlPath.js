import { Daily } from "../RightColumn/Daily/Daily";
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
      return Core.getData(...keys);
    } catch {
      UrlPath.pushKeys(Daily.getKeys());
    }
  }

  static pushKeys(keys) {
    // to History
    window.history.pushState({}, document.title, this.getPath(keys));
  }

  static getPath(keys) {
    const [albumIndex, bookIndex, chapterIndex] = keys;

    const searchKeys =
      Util.pairIndex(albumIndex) +
      Util.pairIndex(bookIndex) +
      Util.pairIndex(chapterIndex);

    return "index.html?k=" + searchKeys;
  }
}
